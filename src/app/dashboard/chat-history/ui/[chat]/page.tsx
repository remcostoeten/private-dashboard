'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface ChatCard {
  timestamp: string
  name: string
  message: string
  image: string
}

const ChatPage = () => {
  const pathname = usePathname()
  const chatId = pathname?.split('/').pop()
  const [chatData, setChatData] = useState<ChatCard | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchChatData = async () => {
      if (!chatId) return
      try {
        const response = await fetch(`/api/chat-files/${chatId}`)
        const data: ChatCard = await response.json()
        setChatData(data)
      } catch (error) {
        console.error('Failed to fetch chat data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchChatData()
  }, [chatId])

  if (isLoading) return <div>Loading...</div>
  if (!chatData) return <div>No chat data found</div>

  return (
    <div>
      <h1>{chatData.name}</h1>
      <p>{chatData.message}</p>
      <img src={chatData.image} alt={chatData.name} />
      <time>{chatData.timestamp}</time>
    </div>
  )
}

export default ChatPage
