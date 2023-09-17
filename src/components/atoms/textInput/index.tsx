import React, { type FC, type InputHTMLAttributes } from 'react'
import './input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ui?: 'login' | 'profile'
  label?: string
}
const Input: FC<InputProps> = ({ ui = 'login', label = '', ...rest }) => {
  if (ui === 'login') {
    return <div>
    <input className={`input-${ui}`} {...rest}/>
    <div className='input-underline'/>
  </div>
  }
  return <div>
    <p className='input-label'>{label}</p>
    <input className={`input-${ui}`} {...rest}/>
  </div>
}

export default Input
