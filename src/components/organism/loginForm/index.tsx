import React, { useCallback } from 'react'
import './loginForm.scss'
import EmailLogin from '../../molecules/emailLogin'
import { Divider } from '../../atoms/divider'
import { MemoizedSocialLogin } from '../../molecules/socialLogin'
import { MemoisedTextLink } from '../../atoms/link'
import useLogin from '../../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const { loginWithEmailAndPassword } = useLogin()
  const handleOnSubmit = useCallback((e: any) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    console.log(email)
    loginWithEmailAndPassword({ email, password })
      .then(res => {
        navigate('/dashboard')
      })
      .catch(e => {
        alert(e.message)
      })
  }, [])

  return <div className='form-container'>
    <div className='form-container input-wrapper'>
    <EmailLogin onSubmit={handleOnSubmit} />
    <Divider text='OR' />
    </div>
    <MemoizedSocialLogin/>
    <p className='new-user'>New User? <span><MemoisedTextLink text="Register!" href="#" big/></span></p>
  </div>
}

export default LoginForm
