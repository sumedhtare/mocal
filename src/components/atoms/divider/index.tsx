/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { memo } from 'react'
import './divider.scss'
interface DividerProps {
  text?: string
  lg?: boolean
}
export const Divider = ({ text, lg }: DividerProps) => {
  if (text !== undefined) {
    return <div className='divider-container'>
      <div className={`divider ${lg ? 'w-lg' : ''}`} />
      <p className={`text ${lg ? 'text-lg' : ''}`}>{text}</p>
      <div className={`divider ${lg ? 'w-lg' : ''}`} />
    </div>
  }
  return <div className='divider-container'>
    <div className='divider' />
  </div>
}

export const MemoisedDivider = memo(Divider)
