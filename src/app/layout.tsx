import Providers from "@/components/layout/providers"
import { Toaster } from "@/components/ui/toaster"
import "@uploadthing/react/styles.css"
import type { Metadata } from "next"
import "../styles/app.css"
import { getServerSession } from "next-auth"
import { siteConfig } from "@/core/data/site-config"
import NextTopLoader from "nextjs-toploader"
import { figtree } from "@/core/constants/fonts"
import SessionWrapperRedirect from "@/core/providers/SessionRedirectWrapper"
import Ssession from "./showsession"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.className} overflow-hidden`}>
        <NextTopLoader color="#2dd4bf" height={5} showSpinner={false} />
        <Providers session={session}>
          <SessionWrapperRedirect>
            <Ssession />
            <Toaster />
            {children}
          </SessionWrapperRedirect>
        </Providers>
      </body>
    </html>
  )
}
