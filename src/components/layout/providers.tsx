'use client'
import { ReactNode } from 'react'
import ThemeProvider from './ThemeToggle/theme-provider'
import { AuthContextProvider, useAuth } from '@/core/providers/auth-provider'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { usePathname, useRouter } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_POSTHOG_KEY: string
    NEXT_PUBLIC_POSTHOG_HOST: string
  }
}

export default function Providers({ children }: { children: ReactNode }) {
  const user = useAuth()
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

  if (user) {
    if (pathname === '/') {
      router.push('/dashboard')
    }
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
