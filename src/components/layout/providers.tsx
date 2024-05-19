'use client'
import React from 'react'
import ThemeProvider from './ThemeToggle/theme-provider'
import { AuthContextProvider } from '@/core/providers/auth-provider'
import { TooltipProvider } from 'sonner'

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthContextProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <PostHogProvider client={posthog}>
          <TooltipProvider>{children}</TooltipProvider>
        </PostHogProvider>
      </ThemeProvider>
    </AuthContextProvider>
  )
}
