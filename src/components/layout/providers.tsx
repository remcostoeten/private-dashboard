'use client'

import { ReactNode } from 'react'
import ThemeProvider from './ThemeToggle/theme-provider'
import { AuthContextProvider } from '@/core/providers/auth-provider'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { usePathname, useRouter } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/core/database/firebase'
import NotAutenticatedWizard from '../effects/NotAutenticatedWizard'

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_POSTHOG_KEY: string
    NEXT_PUBLIC_POSTHOG_HOST: string
  }
}

export default function Providers({ children }: { children: ReactNode }) {
  const [user, loading, error] = useAuthState(auth)
  const router = useRouter()
  const pathname = usePathname()

  if (typeof window !== 'undefined') {
    if (
      !process.env.NEXT_PUBLIC_POSTHOG_KEY ||
      !process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      console.error(
        'Environment variables NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST are not defined',
      )
    } else {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      })
    }
  }

  if (user && pathname === '/login') {
    router.push('/dashboard')
  }

  if (!user && pathname !== '/login') {
    setTimeout(() => {
      router.push('/login')
    }, 12200)
    return (
      <>
        <NotAutenticatedWizard />
      </>
    )
  }

  return (
    <PostHogProvider client={posthog}>
      <AuthContextProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </AuthContextProvider>
    </PostHogProvider>
  )
}
