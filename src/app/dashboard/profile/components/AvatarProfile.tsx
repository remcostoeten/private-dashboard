'use client'
import { FormEvent, useEffect, useState } from 'react'
import { auth } from '@/core/database/firebase'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

import { getAuth, updateProfile } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
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
  const storage = getStorage()
  const [loading, setLoading] = useState(false) // Initialize loading state

  useEffect(() => {
    if (auth.currentUser) {
      setUserProfilePicture(auth.currentUser?.photoURL as any)
      setName(auth.currentUser?.displayName || '')
      setLoading(false) // Set loading to false once initial data is loaded
    }
  }, [auth.currentUser])

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true) // Start loading state before starting the upload process

    if (auth.currentUser) {
      if (avatar) {
        const avatarRef = ref(storage, `avatars/${auth.currentUser.uid}`)
        await uploadBytes(avatarRef, avatar)
        const downloadURL = await getDownloadURL(avatarRef)

        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: downloadURL,
        })
      } else {
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
      }

      toast('Profile updated!')
      setLoading(false) // End loading state after profile update

      const updatedUser = getAuth().currentUser
      if (updatedUser) {
        setName(updatedUser.displayName || '')
        setUserProfilePicture(updatedUser.photoURL as any)
      }
      document.dispatchEvent(new CustomEvent('userUpdated'))
    }
  }

  const username = name || auth.currentUser?.displayName || ''

  return (
    <div className="flex flex-col gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col grow mt-3.5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start self-start">
          <Avatar className="self-center">
            {userProfilePicture ? (
              <AvatarImage src={userProfilePicture} />
            ) : (
              <AvatarFallback>
                {user && user.email ? user.email[0] : ''}
              </AvatarFallback>
            )}
          </Avatar>
          <form className="mt-4 space-y-4 w-full" onSubmit={handleForm}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder={username}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded border border-gray-300 focus:border-primary focus:outline-none w-full"
            />
            <Label htmlFor="avatar">Upload Avatar</Label>
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
              className="p-2 rounded border border-gray-300 focus:border-primary focus:outline-none w-full"
            />
            <Button
              type="submit"
              className="inline-flex h-9 max-w-fit items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mt-4 w-full"
            >
              Update Profile
            </Button>
          </form>
        </div>
      </div>
      {loading ? <Spinner size="md" /> : null}
    </div>
  )
}
;``
