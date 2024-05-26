import { cn } from '@/core/lib/utils'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type BreadCrumbType = {
  title: string
  link: string
}

type BreadCrumbPropsType = {
  items: BreadCrumbType[]
}

export default function BreadCrumb({ items }: BreadCrumbPropsType) {
  let accumulatedPath = 'dashboard'

  return (
    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
      <Link
        href={'/' + accumulatedPath}
        className="overflow-hidden text-ellipsis whitespace-nowrap"
      >
        Dashboard
      </Link>
      {items?.map((item: BreadCrumbType, index: number) => {
        // Strip the leading slash from item.link
        let linkWithoutLeadingSlash = item.link.startsWith('/')
          ? item.link.substring(1)
          : item.link
        accumulatedPath += '/' + linkWithoutLeadingSlash
        return (
          <React.Fragment key={item.title}>
            <ChevronRightIcon className="h-4 w-4" />
            <Link
              href={'/' + accumulatedPath}
              className={cn(
                'font-medium',
                index === items.length - 1
                  ? 'text-foreground pointer-events-none'
                  : 'text-muted-foreground',
              )}
            >
              {item.title}
            </Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}
