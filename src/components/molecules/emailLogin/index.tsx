import React, { memo } from 'react'
import Input from '../../atoms/textInput'
import './emailLogin.scss'
import { MemoisedButton } from '../../atoms/button'
import { MemoisedTextLink } from '../../atoms/link'

interface EmailLoginProps {
  onSubmit: (e: any) => void
}
const EmailLogin = ({ onSubmit }: EmailLoginProps) => {
  return (
    <div className='form'>
      <form onSubmit={onSubmit} >
        <Input id="email" required placeholder='Enter Username / Email Address' />
        <br/>
        <br/>
        <Input id="password" required placeholder='Enter Password' type='password'/>
        <br/>
        <br/>
        <MemoisedTextLink href='#' text='Forgot Password?'/>
        <div className='center-btn'>
          <MemoisedButton type="submit">
            Login
          </MemoisedButton>
        </div>
      </form>
    </div>
  )
}

export default memo(EmailLogin)
