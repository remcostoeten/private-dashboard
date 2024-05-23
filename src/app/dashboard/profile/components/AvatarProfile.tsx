import { FormEvent, useEffect, useState, useMemo } from 'react'
import { auth } from '@/core/database/firebase'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { getAuth, updateProfile } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/effects/Hovercard'
import Spinner from '@/components/effects/spinner'

export default function AvatarProfile() {
    const user = auth.currentUser
    const displayName = user?.displayName || 'N/A'
    const email = user?.email || 'N/A'
    const avatarFallback = email.charAt(0)
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState<File | null>(null)
    const [userProfilePicture, setUserProfilePicture] = useState<string | null>(
        user?.photoURL || null,
    )
    const storage = useMemo(() => getStorage(), [])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user) {
            setUserProfilePicture(user?.photoURL as any)
            setName(user?.displayName || '')
            setLoading(false)
        }
    }, [user])

    const handleForm = async (event: FormEvent) => {
        event.preventDefault()
        setLoading(true)

        if (user) {
            if (avatar) {
                const avatarRef = ref(storage, `avatars/${user.uid}`)
                await uploadBytes(avatarRef, avatar)
                const downloadURL = await getDownloadURL(avatarRef)

                await updateProfile(user, {
                    displayName: name,
                    photoURL: downloadURL,
                })
            } else {
                await updateProfile(user, {
                    displayName: name,
                })
            }

            toast('Profile updated!')
            setLoading(false)

            const updatedUser = getAuth().currentUser
            if (updatedUser) {
                setName(updatedUser.displayName || '')
                setUserProfilePicture(updatedUser.photoURL as any)
            }
            document.dispatchEvent(new CustomEvent('userUpdated'))
        }
    }

    const username = name || user?.displayName || ''

    return (
        <Card>
            <div className="flex flex-col grow ">
                <div className="flex gap-5 justify-between items-start self-start">
                    <div className="relative">
                        <Input
                            id="avatar"
                            name="avatar"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    setAvatar(e.target.files[0])
                                } else {
                                    setAvatar(null)
                                }
                            }}
                            className="hidden"
                        />
                    </div>
                    <form className="mt-4 space-y-4 w-full" onSubmit={handleForm}>
                        <Title>Update display name</Title>
                        <Subtitle>
                            This is your username that's displayed throughout the site
                        </Subtitle>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder={username}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 rounded  h-12  pl-4 w-full"
                        />
                        <Title>Update your avatar</Title>
                        <div className="flex gap-4 justify-start items-center">
                            <Avatar className="flex items-center justify-centers rounded-full border-2 ">
                                {userProfilePicture ? (
                                    <AvatarImage
                                        src={userProfilePicture}
                                        className="rounded-full p-2"
                                    />
                                ) : (
                                    <AvatarFallback className="rounded-full">
                                        {user && user.email ? user.email[0] : ''}
                                    </AvatarFallback>
                                )}
                            </Avatar>

                            <Button type="submit">Update Profile</Button>
                        </div>
                    </form>
                </div>
            </div>
            {loading ? <Spinner size="md" /> : null}
        </Card>
    )
}

function Title({ children }) {
    return (
        <h2 className=" ">{children}</h2>
    )
}

function Subtitle({ children }) {
    return <p className="flex-auto prose-sm text-gray-400">{children}</p>
}
