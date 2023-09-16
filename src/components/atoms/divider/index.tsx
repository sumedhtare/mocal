import React, { memo } from 'react'
import './divider.scss'
interface DividerProps {
  text?: string
}
export const Divider = ({ text }: DividerProps) => {
  if (text !== undefined) {
    return <div className='divider-container'>
      <div className='divider' />
      <p className='text'>{text}</p>
      <div className='divider' />
    </div>
  }
  return <div className='divider-container'>
    <div className='divider' />
  </div>
}

export const MemoisedDivider = memo(Divider)
