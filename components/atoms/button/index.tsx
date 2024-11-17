import React from 'react'
import { ButotnProps } from './index.type'

const Index = ({children, onClick, className}: ButotnProps) => {
  return (
    <button
        onClick={onClick}
        className={className}
    >
        {children}
    </button>
  )
}

export default Index