import React from 'react'

const Pill = ({children, color}) => {
  return (
    <span className={`px-4 py-2 rounded-xl ${color ?? 'bg-sky-800'}`}>{children}</span>
  )
}

export default Pill