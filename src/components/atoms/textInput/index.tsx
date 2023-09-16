import React, { type FC, type InputHTMLAttributes } from 'react'
import './input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ui?: 'login' | 'profile'
}
const Input: FC<InputProps> = ({ ui = 'login', ...rest }) => {
  return <div>
    <input className={`input-${ui}`} {...rest}/>
    <div className='input-underline'/>
  </div>
}

export default Input
