import React, { memo } from 'react'
import './buttonWithLogo.scss'

interface ButtonWithLogoProps {
  text: string
  logo: any
  onClick?: (e: any) => void
}
export const ButtonWithLogo = ({ text, logo, onClick }: ButtonWithLogoProps) => {
  return <div className='button-container' onClick={onClick}>
    <img className='logo' src={logo}/>
    <p className='text'>{text}</p>
</div>
}

export const MemoizedButtonWithLogo = memo(ButtonWithLogo)
