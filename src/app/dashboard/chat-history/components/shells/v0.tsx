import { Badge } from '@/components/ui/badge'
import { AvatarImage, Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Aside from './Aside'
import { MoveVerticalIcon, PhoneIcon, UserPlusIcon, VideoIcon } from '../icons'

export default function V0() {
    return (
        <div className="flex">
            <Aside />
            <main className="flex-grow p-6">
                <header className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <Badge variant="secondary">24</Badge>
                        <h1 className="text-2xl font-bold">design_team</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost">
                            <UserPlusIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost">
                            <PhoneIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost">
                            <VideoIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost">
                            <MoveVerticalIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </header>
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
