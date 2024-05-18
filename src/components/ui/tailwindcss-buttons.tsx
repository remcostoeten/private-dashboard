'use client'
import { cn } from '@/core/lib/utils'
import { LucideClipboard } from 'lucide-react'
import React from 'react'
import { ReactNode } from 'react'

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'p-4 bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <LucideClipboard className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <div className="relative z-40">{children}</div>
    </div>
  )
}
