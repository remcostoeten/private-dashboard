'use client'
import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle'
import { cn } from '@/core/lib/utils'
import { MobileSidebar } from './mobile-sidebar'
import UserNav from './user-nav'
import Logo from '../theme/logo'

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-background/60 border-b bg-background/95 z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Logo icon link className="w-28" />
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
