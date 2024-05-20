'use client'
import { FormEvent, useEffect, useState } from 'react'
import { auth } from '@/core/database/firebase'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { toast } from 'sonner'
import { useDropzone } from 'react-dropzone'

import { getAuth, updateProfile } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

interface AvatarProfileProps {
  subtitle: string
}

export default function AvatarProfile({ subtitle }: AvatarProfileProps) {
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

  useEffect(() => {
    setUserProfilePicture(user?.photoURL || null)
  }, [user])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {
      setAvatar(acceptedFiles[0])
      await handleForm(new Event('submit') as FormEvent<Element>)
    },
  })

  async function handleForm(event: FormEvent) {
    event.preventDefault()

    if (auth.currentUser && avatar) {
      const avatarRef = ref(storage, `avatars/${auth.currentUser.uid}`)
      await uploadBytes(avatarRef, avatar)
      const downloadURL = await getDownloadURL(avatarRef)

      await updateProfile(auth.currentUser, {
        photoURL: downloadURL,
      })

      toast('Avatar updated!')

      const updatedUser = getAuth().currentUser
      if (updatedUser) {
        setUserProfilePicture(updatedUser.photoURL as any)
      }
      document.dispatchEvent(new CustomEvent('userUpdated'))
    }
  }

  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col grow mt-3.5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start self-start">
          <Avatar>
            {userProfilePicture ? (
              <AvatarImage src={userProfilePicture} />
            ) : (
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            )}
          </Avatar>
          <div {...getRootProps()} className="flex flex-col text-neutral-200">
            <input {...getInputProps()} />
            <div className="text-xl leading-8">{displayName} </div>
            <div className="mt-5 text-sm tracking-wide leading-6">
              {subtitle || 'N/A'}
            </div>
            <div className="mt-3.5 text-sm leading-5 text-blue-500">
              Upload Image
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-9 h-px bg-neutral-800 max-md:max-w-full" />
        <div className="flex flex-col gap-5 mt-12 text-base leading-6 text-neutral-200 max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-1">
            <span className="w-1/2">
              <h2 className="text-lg font-bold">Name</h2>
              <p className="text-md text-gray-400">Example: Jon Doe</p>
            </span>
            <Input className="w-1/2" />
          </div>
          <div className="flex flex-1">
            <span className="w-1/2">
              <h2 className="text-lg font-bold">Title</h2>
              <p className="text-md text-gray-400">Example: A legend</p>
            </span>
            <Input className="w-1/2" />
          </div>
          <div className="flex flex-1">
            <span className="w-1/2">
              <h2 className="text-lg font-bold">Bio</h2>
              <p className="text-md text-gray-400">
                Example: Passionate software engineer with 5+ years of
                experience specializing in web development and data science.{' '}
              </p>
              <span className="flex gap-1 mt-8 items-center">
                <InfoCircledIcon />
                <p className="text-gray-400 ">Max length of 400 chars!</p>
              </span>
            </span>
            <Textarea className="w-1/2" placeholder="Enter your bio here" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div>Company size</div>
          <div className="flex gap-5 py-4 pr-5 mt-2.5 text-center rounded-md border border-solid border-neutral-800">
            <div className="flex-auto">Select organization size</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/edfb8db67d2b7cf16b1a6488232354e907eb6393bc3c8ee97c26c48d41f9cc88?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
              className="shrink-0 my-auto border-2 border-black border-solid aspect-[1.79] stroke-[2px] stroke-black w-[9px]"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div>Workspace URL</div>
          <div className="shrink-0 mt-2.5 rounded-lg border border-solid border-neutral-800 h-[43px]" />
        </div>
      </div>
    </div>
  )
}
