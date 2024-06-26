'use client'
import React from 'react'
import { Button } from './ui/button'
import { Icons } from './icons'
import { useUserSession } from '@/core/hooks/useUser'
import { signInWithGoogle, signOutWithGoogle } from '@/core/database/auth'
import { createSession, removeSession } from '@/core/actions/auth-actions'

export default function SocialSignInButton({
  provider,
  session,
}: {
  provider: 'github' | 'google'
  session?: string | null
}) {
  const userSessionId = useUserSession(session as any)
  const Icon = provider === 'github' ? Icons.gitHub : Icons.google
  const buttonText = `Continue with ${
    provider.charAt(0).toUpperCase() + provider.slice(1)
  }`

  const handleSignIn = async () => {
    const userUid = await signInWithGoogle()
    if (userUid) {
      await createSession(userUid)
    }
  }

  const handleSignOut = async () => {
    await signOutWithGoogle()
    await removeSession()
  }

  if (!userSessionId) {
    return (
      <Button
        className="w-full"
        variant="outline"
        type="button"
        onClick={handleSignIn}
      >
        <Icon className="mr-2 h-4 w-4" />
        {buttonText}
      </Button>
    )
  }

  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  )
}
