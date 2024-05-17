import { AvatarImage, Avatar } from '@/components/ui/avatar'
import Aside from './Aside'
import TjetHeader from '@/component/TjetHeader'

export default function V0() {
  const amount = 24
  const title = 'design_team'

  return (
    <div className="flex">
      <Aside />

      <main className="flex-grow p-6">
        <TjetHeader amount={amount} title={title} />
        <div className="space-y-6">
          <div className="flex space-x-4 items-start">
            <Avatar>
              <AvatarImage
                alt="Charlie Kenter"
                src="/placeholder.svg?height=40&width=40"
              />
            </Avatar>
            <div>
              <div className="bg-[#2c2c2e] p-3 rounded-md mb-2">
                <p>
                  friendly reminder: don't forget to update client copies before
                  you finish your work.
                </p>
              </div>
              <span className="text-xs text-gray-400">3:59 pm</span>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <Avatar>
              <AvatarImage
                alt="Madelyn Gouse"
                src="/placeholder.svg?height=40&width=40"
              />
            </Avatar>
            <div>
              <div className="bg-[#2c2c2e] p-3 rounded-md mb-2">
                <p>
                  guys, I was thinking, how about we go bowling together?🎳 we
                  haven't been out in a while.
                </p>
              </div>
              <span className="text-xs text-gray-400">4:35 pm</span>
            </div>
          </div>
          <div className="flex space-x-4 items-start justify-end">
            <div>
              <div className="bg-[#007aff] p-3 rounded-md mb-2">
                <p className="text-white">
                  haha!😄 that's a cool idea! I'm ready!
                </p>
              </div>
              <span className="text-xs text-gray-400">4:22 pm</span>
            </div>
            <Avatar>
              <AvatarImage
                alt="you"
                src="/placeholder.svg?height=40&width=40"
              />
            </Avatar>
          </div>
        </div>
      </main>
    </div>
  )
}
