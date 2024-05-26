'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'

interface TitleDropdownProps {
  options: string[]
  actions: string[]
}

export default function TitleDropdown({
  options,
  actions,
}: TitleDropdownProps) {
  const [isToggle, setIsToggle] = useState(false)

  return (
    <DropdownMenu onOpenChange={setIsToggle}>
      <DropdownMenuTrigger asChild>
        <Button className="space-x-1 " aria-haspopup="true" variant="ghost">
          <span>{options[0]}</span>
          <motion.div
            animate={{ rotate: isToggle ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDownIcon className="h-4 w-4" />
          </motion.div>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.slice(1).map((option, index) => (
          <DropdownMenuLabel key={index}>{option}</DropdownMenuLabel>
        ))}
        {actions.map((action, index) => (
          <DropdownMenuItem key={index}>{action}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
