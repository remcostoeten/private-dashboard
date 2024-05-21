'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import NavLink from './NavLink'
import { motion } from 'framer-motion'
import { ExpandIcon } from 'lucide-react'

const ProfileItems = [
  { href: '/dashboard/profile', label: 'Profile' },
  { href: '/dashboard/profile/user', label: 'Profile v2' },
  { href: '/webhooks', label: 'Noter menu item' },
]

export default function ProfileNav() {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  const variants = {
    open: { opacity: 1, height: 'auto', width: '15%' },
    closed: { opacity: 0, height: 0, width: '0%' },
  }

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <motion.button
        className="absolute"
        onClick={toggleNav}
        animate={{ rotate: isOpen ? 0 : 180 }}
        transition={{ duration: 0.6 }}
      >
        <ExpandIcon />
      </motion.button>
      <motion.div
        className="border-r"
        initial="open"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 1, type: 'spring', bounce: 0 }}
      >
        <motion.nav className="flex border-r flex-col max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-8">
            <div className="flex flex-col self-start mt-5 ml-5 text-base leading-6 max-md:ml-2.5 w-[80%]">
              {ProfileItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={isActive(item.href)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </motion.nav>
      </motion.div>
    </>
  )
}

function collapseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      fill="none"
      viewBox="0 0 24 30"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M6.865 6l3.384-3.59L8.917 1l-4.37 4.627a2 2 0 000 2.746L8.916 13l1.332-1.41L6.865 8H20V6H6.865zM20 18h-8v-2h8v2zm0-5h-8v-2h8v2z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
