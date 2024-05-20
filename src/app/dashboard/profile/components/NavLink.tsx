import { ReactNode } from 'react'
import Link from 'next/link'
import { hoverStyling } from '@/core/helpers/HelperClasses'

interface NavLinkProps {
  href: string
  active: boolean
  children: ReactNode
}

const NavLink = ({ href, active, children }: NavLinkProps) => {
  const className = active
    ? `${hoverStyling} px-5 py-2 rounded-sm`
    : 'justify-center items-start px-5 py-4 text-base leading-6 text-neutral-400 whitespace-nowrap rounded-lg bg-transparent bg-opacity-10 max-md:pr-5'

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default NavLink
