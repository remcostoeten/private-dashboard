import { Toaster } from 'sonner'
import '@uploadthing/react/styles.css'
import {
  DM_Sans,
  Electrolize,
  Federant,
  Federo,
  Inter,
  Lato,
  Manrope,
  Noto_Sans_Caucasian_Albanian,
  Roboto_Mono,
} from 'next/font/google'
import '@/styles/app.scss'
import Providers from '@/components/layout/providers'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import NextTopLoader from 'nextjs-toploader'
import { SESSION_COOKIE_NAME } from '@/core/constants/firebase-config'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

const inter = Lato({
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Remco Stoeten - Dashboard',
  description: 'Basic dashboard with Next.js and Shadcn',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value || null

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-bg overflow-x-hidden`}>
        <Providers>
          <NextTopLoader
            showSpinner={false}
            color="#02c9a5"
            initialPosition={0.38}
            easing="ease-in-out"
          />{' '}
          <Toaster position="top-center" />
          {children}
        </Providers>
      </body>
    </html>
  )
}
