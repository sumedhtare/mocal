import React, { memo, type ButtonHTMLAttributes } from 'react'
import './button.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md'
}
export const Button = ({ size = 'md', ...rest }: ButtonProps) => {
  return <button className={`${size === 'md' ? 'button' : 'sm-button'} ${rest.disabled ? 'btn-disabled' : ''}`} {...rest}>
    {rest.children}
    </button>
}

export const MemoisedButton = memo(Button)
