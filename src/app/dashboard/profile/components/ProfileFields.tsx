import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import React from 'react'
export default function ProfileFields() {
  const imageUrl =
    'https://cdn.builder.io/api/v1/image/assets/TEMP/edfb8db67d2b7cf16b1a6488232354e907eb6393bc3c8ee97c26c48d41f9cc88?apiKey=2a72745ec00444ad9fe2bd2391d98932&'

  return (
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
            Example: Passionate software engineer with 5+ years of experience
            specializing in web development and data science.{' '}
          </p>
          <span className="flex gap-1 mt-8 items-center">
            <InfoCircledIcon />
            <p className="text-gray-400 ">Max length of 400 chars!</p>
          </span>
        </span>
        <Textarea className="w-1/2" placeholder="Enter your bio here" />
      </div>
      <div className="flex flex-col flex-1">
        <div>Company size</div>
        <div className="flex gap-5 py-4 pr-5 mt-2.5 text-center rounded-md border border-solid border-neutral-800">
          <div className="flex-auto">Select organization size</div>
          <img
            loading="lazy"
            src={imageUrl}
            className="shrink-0 my-auto border-2 border-black border-solid aspect-[1.79] stroke-[2px] stroke-black w-[9px]"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div>Workspace URL</div>
        <div className="shrink-0 mt-2.5 rounded-lg border border-solid border-neutral-800 h-[43px]" />
      </div>
    </div>
  )
}
