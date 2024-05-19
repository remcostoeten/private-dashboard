import { Trash2 } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'

const ClearButton = () => {
  const handleClear = async () => {
    try {
      const response = await fetch('/api/status/clear/', { method: 'POST' })
      if (!response.ok) {
        throw new Error('Failed to clear status data.')
      }
      const data = await response.json()
      toast('Data clearend successfully')
      console.log(data.message)
    } catch (error) {
      toast('Failed to clear status data')
      console.error(error)
    }
  }

  return (
    <Button variant="secondary" onClick={handleClear}>
      <span className="flex gap-2">
        <Trash2 />
        Clear Status Data
      </span>
    </Button>
  )
}

export default ClearButton
