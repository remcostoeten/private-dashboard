'use client'

import AvatarProfile from './components/AvatarProfile'
import { auth } from '@/core/database/firebase'
import ChangeUsername from './components/ProfileAvatar'

export default function MyComponent() {
  const user = auth.currentUser
  const name = user?.displayName

  return (
    <>
      <div className="flex gap-0 max-md:flex-wrap">
        <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
          <div className="py-4 px-6 ">
            <p>Welcome! You can edit your user profile here</p>
            <div className="mt-4 max-md:max-w-full">
              <AvatarProfile name={name} />
            </div>
            <div className="flex gap-5 self-center mt-7 w-full text-lg tracking-wide leading-8 text-center max-w-[1400px] text-neutral-200 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto">Delete Workspace</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4897265e2d240980590a0f0f2e8773fe1957ccee0a6c3df20d66a19dfe15477e?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                className="shrink-0 self-start border-2 border-black border-solid aspect-[1.67] stroke-[2px] stroke-black w-[15px]"
              />
            </div>
            <div className="self-end mt-8 mr-9 text-base tracking-wide leading-6 text-neutral-200 w-[1283px] max-md:mr-2.5 max-md:max-w-full">
              The danger zone of the workspace delete page is a critical area
              that requires careful consideration and attention. When deleting a
              workspace, all of the data and resources within that workspace
              will be permanently removed and cannot be recovered.
            </div>
            <div className="justify-center items-start py-3 mt-10 ml-96 max-w-full text-base leading-6 text-center text-white bg-red-500 rounded-md w-[197px] max-md:pr-5 max-md:ml-2.5">
              Delete my workspace
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
