import React, { memo, type ButtonHTMLAttributes } from 'react'
import './button.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
export const Button = ({ ...rest }: ButtonProps) => {
  return <button className='button' {...rest}>
    {rest.children}
    </button>
}

export const MemoisedButton = memo(Button)
