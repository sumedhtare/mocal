import React from 'react'
import './login.scss'
import logo from '../../assets/images/Mocal Logo 2@4x-8@2x.png'
import LoginForm from '../../components/organism/loginForm'
import Layout from '../../components/template/layout'
export default function LoginPage () {
  return (
    <Layout>
        <div className="container">
            <div className='left'>
                <h1 className="welcom-text">
                    Welcome to
                    <h1 className="sec">MoCal!</h1>
                </h1>
                <h2 className="signup-text">Get Your First Month Free. Sign Up Now!</h2>
            </div>

            <div className='center'>
                <div className='img-container'>
                <img src={logo}/>
                </div>
               <LoginForm/>
            </div>

            <div className='right'>
                <h2 className='welcom-text'>
                We’ll help you find the perfect time with your clients. Please enter your details to start with and we’ll fit you right in.
                </h2>

            </div>
        </div>
        </Layout>
  )
}
