import { useEffect } from "react"

export default function useEmojiRain(
  loginStatus: string | null,
  emoji: string,
  duration: number = 5000,
  speed: number = 100
) {
  useEffect(() => {
    if (loginStatus) {
      const cursor = { x: 0, y: 0 }
      const emojis = []

      function createEmoji() {
        const el = document.createElement("div")
        el.className = "emoji"
        el.textContent = emoji
        el.style.left = `${cursor.x}px`
        el.style.top = `${cursor.y}px`
        document.body.appendChild(el)
        emojis.push(el)
      }

      function updateEmojis() {
        for (const el of emojis) {
          const rect = el.getBoundingClientRect()
          el.style.top = `${rect.top + speed}px`
          if (rect.top > window.innerHeight) {
            el.remove()
            const index = emojis.indexOf(el)
            emojis.splice(index, 1)
          }
        }
      }

      function loop() {
        updateEmojis()
        if (emojis.length < 100) {
          createEmoji()
        }
        requestAnimationFrame(loop)
      }

      loop()

      setTimeout(() => {
        for (const el of emojis) {
          el.remove()
        }
        emojis.length = 0
      }, duration)
    }
  }, [loginStatus, emoji, duration, speed])
}
