import {
  UserPlusIcon,
  PhoneIcon,
  VideoIcon,
  MoveVerticalIcon,
} from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const iconData = [
  { icon: UserPlusIcon, key: 'user' },
  { icon: PhoneIcon, key: 'phone' },
  { icon: VideoIcon, key: 'video' },
  { icon: MoveVerticalIcon, key: 'move' },
]

const TjetHeader = ({ amount, title }) => (
  <header className="flex items-center justify-between mb-4">
    <div className="flex items-center space-x-2">
      <Badge variant="secondary">{amount}</Badge>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
    <div className="flex items-center space-x-2">
      {iconData.map(({ icon: Icon, key }) => (
        <Button variant="ghost" key={key}>
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  </header>
)

export default TjetHeader
