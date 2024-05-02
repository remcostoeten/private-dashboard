"use client"
import { ReactNode } from "react"
import useSessionRedirect from "../hooks/useSessionRedirect"

type SessionWrapperProps = {
  children: ReactNode
  sessionUrl?: string
  noSessionUrl?: string
}

export default function SessionWrapperRedirect({
  children,
  sessionUrl,
  noSessionUrl
}: SessionWrapperProps) {
  useSessionRedirect({ sessionUrl, noSessionUrl })

  return <>{children}</>
}
