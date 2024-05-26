'use client'
import React from 'react'
import TitleDropdown from './TitleDropdown'

export default function Toolbar() {
  const options = ['Folders', 'Files', 'PDF']
  const actions = ['Action 1', 'Action 2', 'Action 3']

  return (
    <div className="flex items-center">
      <div>
        <TitleDropdown options={options} actions={actions} />
      </div>
    </div>
  )
}
