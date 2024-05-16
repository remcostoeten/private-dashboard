'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'

type LogoProps = {
  full?: boolean
  width?: string
  height?: string
  icon?: boolean
  className?: string
  link?: boolean | string
}

const Logo = ({
  full = false,
  className,
  width,
  height,
  link,
  icon = false,
  ...props
}: LogoProps) => {
  const { theme } = useTheme()
  const fill = theme === 'light' ? '#000' : '#fff'

  const svgElement = (
    <svg
      className={className}
      viewBox="0 0 115.8 46"
      width={`${width}px`}
      height={`${height}px`}
      {...props}
    >
      {icon ? (
        <>
          <path
            d="M23.885 19.583a13.83 13.83 0 0 0 1.604-3.552c1.474 3.161 4.679 5.36 8.39 5.36v3.219h-.029c-5.098 0-9.25 4.156-9.25 9.265h-3.214c-.01-4.669 2.557-8.743 6.355-10.884a12.485 12.485 0 0 1-3.856-3.408z"
            fill={fill}
            opacity="1"
          />
          <path
            d="M20.499 29.92c-1.426-3.025-4.432-5.156-7.95-5.316-.14.005-.28.005-.426.005V21.37c.14 0 .286.005.426.005a9.175 9.175 0 0 0 6.118-2.697 9.204 9.204 0 0 0 2.707-6.554h3.219c0 3.335-1.296 6.467-3.654 8.825a12.464 12.464 0 0 1-2.673 2.045 12.559 12.559 0 0 1 3.842 3.392A13.93 13.93 0 0 0 20.5 29.92z"
            fill={fill}
            opacity="1"
          />
        </>
      ) : (
        <>
          <path
            d="M46.3 17.9c.6-.4 1.4-.5 2.2-.5V20h-.7c-1 0-1.8.3-2.3.8-.5.5-.8 1.4-.8 2.7V30h-2.6V17.5h2.6v1.8c.5-.6 1-1.1 1.6-1.4z"
            fill={fill}
            opacity="1"
          />
          <path
            d="M62.2 24.7h-9.5c.1 1 .4 1.8 1.1 2.4.7.6 1.5.9 2.4.9 1.4 0 2.4-.6 2.9-1.7h2.8c-.4 1.1-1.1 2.1-2 2.8-1 .7-2.2 1.1-3.7 1.1-1.2 0-2.2-.3-3.2-.8-.9-.5-1.7-1.3-2.2-2.2-.5-1-.8-2.1-.8-3.4 0-1.3.3-2.4.8-3.4s1.2-1.7 2.2-2.2c.9-.5 2-.8 3.2-.8 1.2 0 2.2.3 3.1.8.9.5 1.6 1.2 2.1 2.1.5.9.8 2 .8 3.2v1.2zm-2.6-2.1c0-.9-.4-1.7-1-2.3-.7-.6-1.5-.9-2.5-.9-.9 0-1.6.3-2.3.8s-1 1.3-1.1 2.3h6.9z"
            fill={fill}
            opacity="1"
          />
          <path
            d="M82.4 17.9c.8.4 1.4 1 1.8 1.8s.7 1.8.7 2.9v7.3h-2.5V23c0-1.1-.3-2-.8-2.6-.6-.6-1.3-.9-2.3-.9s-1.7.3-2.3.9c-.6.6-.8 1.4-.8 2.6v6.9h-2.5V23c0-1.1-.3-2-.8-2.6-.6-.6-1.3-.9-2.3-.9-1 0-1.7.3-2.3.9-.6.6-.8 1.4-.8 2.6v6.9h-2.6V17.5h2.6v1.4c.4-.5 1-.9 1.6-1.2.6-.3 1.3-.4 2.1-.4 1 0 1.9.2 2.7.6.8.4 1.4 1 1.8 1.8.4-.8 1-1.3 1.8-1.8.8-.4 1.6-.7 2.6-.7.6.1 1.5.3 2.3.7z"
            fill={fill}
            opacity="1"
          />
          <path
            d="M88.1 20.3c.5-1 1.2-1.7 2.1-2.2.9-.5 2-.8 3.1-.8 1.5 0 2.7.4 3.7 1.1 1 .7 1.6 1.7 2 3h-2.8c-.2-.6-.6-1.1-1.1-1.4s-1.1-.5-1.9-.5c-1 0-1.9.4-2.5 1.1-.6.7-.9 1.8-.9 3.1s.3 2.4.9 3.1c.6.8 1.5 1.1 2.5 1.1 1.5 0 2.5-.7 2.9-2h2.8c-.4 1.3-1 2.3-2 3s-2.2.8-3.7.8c-1.2 0-2.2-.3-3.1-.8-.9-.5-1.6-1.3-2.1-2.2-.5-1-.8-2.1-.8-3.4.1-1.2.3-2.3.9-3.3z"
            fill={fill}
            opacity="1"
          />
          <path
            d="M103.8 29.3c-.9-.5-1.7-1.3-2.2-2.2-.5-1-.8-2.1-.8-3.4 0-1.3.3-2.4.8-3.4.6-1 1.3-1.7 2.3-2.2 1-.5 2-.8 3.2-.8s2.3.3 3.2.8c1 .5 1.7 1.3 2.3 2.2s.8 2.1.8 3.4c0 1.3-.3 2.4-.9 3.4-.6 1-1.3 1.7-2.3 2.3s-2.1.8-3.2.8c-1.2-.1-2.2-.3-3.2-.9zm5.1-1.9c.6-.3 1-.8 1.4-1.4.4-.6.5-1.4.5-2.3 0-.9-.2-1.7-.5-2.3-.3-.6-.8-1.1-1.4-1.4-.6-.3-1.2-.5-1.8-.5-.7 0-1.3.2-1.8.5-.6.3-1 .8-1.3 1.4s-.5 1.4-.5 2.3c0 1.3.3 2.4 1 3.1s1.5 1.1 2.6 1.1c.6 0 1.2-.2 1.8-.5z"
            fill={fill}
            opacity="1"
          />{' '}
        </>
      )}
    </svg>
  )
  return link ? (
    <Link href={typeof link === 'string' ? link : '/'}>{svgElement}</Link>
  ) : (
    svgElement
  )
}

export default Logo
