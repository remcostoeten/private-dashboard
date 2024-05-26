'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icons } from '@/components/icons'
import { cn } from '@/core/lib/utils'
import { NavItem } from '@/core/types'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { hoverStyling } from '@/core/helpers/HelperClasses'
import LabelPill from './ui/LabelPill'

interface DashboardNavProps {
  items: NavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
}

type labelProps = {
  children: ReactNode
  onHold: boolean
  Wip: boolean
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname()

  if (!items?.length) {
    return null
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || 'arrowRight']
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? '/' : item.href}
              onClick={() => {
                if (setOpen) setOpen(false)
              }}
            >
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  path === item.href ? hoverStyling : 'transparent',
                  item.disabled && 'cursor-not-allowed opacity-80',
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <div className="flex justify-between w-full items-center">
                  <span>{item.title}</span>

                  {(item.onHold || item.inProgress) && (
                    <LabelPill
                      color="rgb(2, 201, 165)"
                      background="rgb(2, 201, 165)"
                      borderColor="rgb(2, 201, 165)"
                      onHold={item.onHold}
                      inProgress={item.inProgress}
                    >
                      {item.onHold && <span>{item.label} (On Hold)</span>}
                      {item.inProgress && (
                        <span>{item.label} (In Progress)</span>
                      )}
                    </LabelPill>
                  )}
                </div>
              </span>
            </Link>
          )
        )
      })}
    </nav>
  )
}
