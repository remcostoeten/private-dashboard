'use client'
import { useEffect, useState } from 'react'

interface ChatCard {
  name: string
  message: string
  timestamp: string // changed from 'date'
  image: string // changed from 'img'
}

const useChatData = () => {
  const [chatData, setChatData] = useState<ChatCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch('/api/chat-files')
        if (!response.ok) {
          throw new Error('An error occurred while fetching the data.')
        }
        const data: ChatCard[] = await response.json()
        if (Array.isArray(data)) {
          setChatData(data)
        } else {
          console.error('Received non-array data: ', data)
          setChatData([])
        }
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to fetch chat data: ', error)
        setChatData([])
        setIsLoading(false)
      }
    }
    fetchChatData()
  }, [])

  return { chatData, isLoading }
}

export default useChatData
