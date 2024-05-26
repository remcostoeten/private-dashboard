'use-client'
import { Toaster } from 'sonner'
import '@uploadthing/react/styles.css'
import { Lato } from 'next/font/google'
import '../styles/app.scss'
import Providers from '@/components/layout/providers'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import NextTopLoader from 'nextjs-toploader'
import { SESSION_COOKIE_NAME } from '@/core/constants/firebase-config'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import LanguageSwitcher from '@c/LanguageSwitcher'
import NotAuthenticatedWizard from '@c/effects/NotAutenticatedWizard'

const inter = Lato({
  weight: ['400'],
  subsets: ['latin'],
})

// export const metadata: Metadata = {
//     title: 'Remco Stoeten - Dashboard',
//     description: 'Basic dashboard with Next.js and Shadcn',
// }

interface Props {
  children: ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  const session = cookies().get(SESSION_COOKIE_NAME)?.value || null

  return (
    <NextIntlClientProvider messages={messages}>
      <html
        lang={locale}
        className={clsx(inter.className, 'h-full')}
        suppressHydrationWarning
      >
        <body
          className={`${inter.className} bg-bg overflow-x-hidden flex h-full flex-col`}
        >
          <Providers>
            <NextTopLoader
              showSpinner={false}
              color="#02c9a5"
              initialPosition={0.38}
              easing="ease-in-out"
            />{' '}
            <Toaster position="top-center" />
            <NotAuthenticatedWizard />
            {children}
            <LanguageSwitcher />{' '}
          </Providers>
        </body>
      </html>
    </NextIntlClientProvider>
  )
}
