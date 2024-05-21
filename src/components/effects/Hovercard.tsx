'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/core/lib/utils'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { AnimatePresence, motion } from 'framer-motion'

type HovercardProps = {
  width?: string
  height?: string
  description?: string
  className?: string
  title?: string
  introText?: string
  projectName?: string
  projectSlug?: string
  projectId?: string
  children?: React.ReactNode
  onSubmit?: (projectName: string, projectSlug: string) => void
  useTextarea?: boolean
}

const Hovercard: React.FC<HovercardProps> = ({
  width = 'max-w-md',
  height = 'max-h-[20rem]',
  className,
  title,
  introText,
  projectName,
  projectSlug,
  description = 'dwadawdwadwa',
  children,
  onSubmit,
  useTextarea = false,
}) => {
  const [mouseEnter, setMouseEnter] = useState(false)
  const [inputValue, setInputValue] = useState(projectName)
  const [textareaValue, setTextareaValue] = useState(projectSlug)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    if (onSubmit) {
      await onSubmit(inputValue ?? '', textareaValue ?? '')
    }
    setIsSaving(false)
  }

  const InputOrTextarea = useTextarea ? Textarea : Input

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true)
      }}
      onMouseLeave={() => {
        setMouseEnter(false)
      }}
      className={cn(
        `relative bg-card p-6 ${width} ${height} w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600 flex flex-col justify-between min-h-[48px]`,
        className,
      )}
    >
      <div>
        {title && <h2>{title}</h2>}
        {introText && <p>{introText}</p>}
        <Illustration mouseEnter={mouseEnter} />
        <div className="flex flex-col gap-5 self-stretch w-full max-md:flex-wrap max-md:max-w-full z-10 relative">
          <div className="flex-auto text-2xl leading-9 text-gray-200">
            <InputOrTextarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="flex gap-2.5 self-start text-lg leading-7 text-center text-gray-300 max-md:flex-wrap max-md:max-w-full">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="px-2 pb-6 z-10 relative">
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
        {children}
      </div>
    </div>
  )
}

export default Hovercard

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <p className={cn('text-base text-white max-w-[16rem]', className)}>
      {children}
    </p>
  )
}

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <h2 className={cn('font-bold text-2xl text-[#eaeaea]', className)}>
      {children}
    </h2>
  )
}

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 108
  const columns = 18

  const [glowingStars, setGlowingStars] = useState<number[]>([])

  const highlightedStars = useRef<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars),
      )
      setGlowingStars([...highlightedStars.current])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="h-48 p-1 w-full
            absolute inset-0 z-0
"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx)
        const delay = (starIdx % 10) * 0.1
        const staticDelay = starIdx * 0.01
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? '#fff' : '#666',
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      }}
      className={cn('bg-[#666] h-[1px] w-[1px] rounded-full relative z-20')}
    ></motion.div>
  )
}

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400"
    />
  )
}
