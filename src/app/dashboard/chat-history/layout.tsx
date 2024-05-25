import React, { Children } from 'react'
import Aside from './components/shells/Aside'

export default function MessageHistoryLayout({ children }) {
  return (
    <div className="flex">
      <Aside />
      {children}
    </div>
  )
}
