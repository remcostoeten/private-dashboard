'use client'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import * as React from 'react'
import { HomeIcon } from '../../chat-history/components/icons'

type BreadcrumbProps = {
  text: string
  isLink: boolean
}

const Separator: React.FC = () => (
  <div className="w-full bg-gray-800 min-h-[1px] max-md:max-w-full" />
)

const Breadcrumb: React.FC<BreadcrumbProps> = ({ text, isLink }) => (
  <div
    className={`self-stretch my-auto ${
      isLink ? 'text-slate-500' : 'text-white'
    }`}
  >
    {isLink ? <Link href={text}>{text}</Link> : text}
  </div>
)

export default function Breadcrumbs() {
  const pathname = usePathname()
  const pathnames = pathname?.split('/').filter((x) => x)

  return (
    <section className="flex flex-col text-xs">
      <Separator />
      <nav className="flex gap-3 items-center self-start py-2 ml-6 max-md:ml-2.5">
        <HomeIcon width={16} height={16} />
        <Breadcrumb text="/" isLink={true} />
        {pathnames?.map((value, index) => {
          const last = index === pathnames.length - 1
          const to = `/${pathnames.slice(0, index + 1).join('/')}`

          return <Breadcrumb text={to} isLink={!last} key={to} />
        })}
      </nav>
      <Separator />
    </section>
  )
}
