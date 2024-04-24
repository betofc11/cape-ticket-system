import React from 'react'

const Pill = ({children, color}) => {
  return (
    <span className={`px-4 py-2 rounded-xl ${!color ? 'bg-gray-600': ''} ${children === '-' ? 'border-2 border-dashed' : ''}`} style={{
      backgroundColor: color
    }}>{children}</span>
  )
}

export default Pill