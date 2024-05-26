'use client'
import Link from 'next/link'
import * as React from 'react'
import { HomeIcon } from '../../chat-history/components/icons'
import { navItems } from '@/core/constants/data'
import { usePathname } from 'next/navigation'
import { Home } from 'lucide-react'

type BreadcrumbProps = {
  text: string
  isLink: boolean
}

const Separator: React.FC = () => <span className="mx-2 text-gray-400">/</span>

function getLabelFromHref(href: string) {
  const navItem = navItems.find((item) => item.href === href)
  return navItem ? navItem.label : href
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ text, isLink }) => {
  const displayText =
    text === '/dashboard' ? (
      <Link href={'dashboard'}>
        <HomeIcon width={16} />
      </Link>
    ) : (
      getLabelFromHref(text)
    )

  return (
    <div
      className={`my-auto first-letter:uppercase ${
        isLink
          ? 'text-slate-500 hover:text-blue-600 cursor-pointer'
          : 'font-semibold text-white'
      }`}
    >
      {isLink ? <Link href={text}>{displayText}</Link> : displayText}
    </div>
  )
}

const labels = {
  'status-checker': 'Status checker',
  'file-storage': 'File storage',
  expense: 'Finances',
  ui: 'WhatsApp chat history',
  'ui-components': 'UI components',
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const pathnames = pathname?.split('/').filter((x) => x)

  if (pathname !== '/dashboard') {
    return (
      <section className="flex flex-wrap  border-b pb-4 text-sm md:text-base">
        {pathnames?.flatMap((value, index) => {
          const last = index === pathnames.length - 1
          const to = `${pathnames.slice(0, index + 1).join('/')}`
          const text = labels[pathnames[index]] || pathnames[index]
          const breadcrumb = <Breadcrumb text={text} isLink={!last} key={to} />

          return last
            ? [breadcrumb]
            : [breadcrumb, <Separator key={`separator-${index}`} />]
        })}
      </section>
    )
  }
}
