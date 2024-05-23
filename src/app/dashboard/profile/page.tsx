'use client'

import AvatarProfile from './components/AvatarProfile'
import { auth } from '@/core/database/firebase'

export default function MyComponent() {
    const user = auth.currentUser
    const name = user?.displayName

    return (
        <>
            <div className="flex gap-0 max-md:flex-wrap">
                <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
                    <div className="px-6 py-6">
                        <article className="prose lg:prose-xl">
                            <h1 className='text-white'>Welcome to Your Profile Page!</h1>
                            <p>
                                Here, you can edit your user profile, change your avatar, and
                                manage your workspace. Take a moment to review your settings and
                                make any necessary updates.
                            </p>

                            {/* <UpdateUserName /> */}
                            <AvatarProfile />
                            <p className="self-end mt-8 mr-9 text-base tracking-wide leading-6 text-neutral-200 w-[1283px] max-md:mr-2.5 max-md:max-w-full">
                            The danger zon  e of the workspace delete page is a critical area
                            that requires careful consideration and attention. When deleting a
                            workspace, all of the data and resources within that workspace
                            will be permanently removed and cannot be recovered.
                        </p>
                        <div className="justify-center items-start py-3 mt-10 ml-96 max-w-full text-base leading-6 text-center text-white bg-red-500 rounded-md w-[197px] max-md:pr-5 max-md:ml-2.5">
                            Delete my workspace
                        </div>
                    </article>
                </div>
            </div>
        </div >
        </>
    )
}