import React, { memo } from 'react'
import './socialLogin.scss'
import { MemoizedButtonWithLogo } from '../../atoms/buttonWithLogo'
import googleLogo from '../../../assets/images/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png'
import microsoftLogo from '../../../assets/images/pngimg.com - microsoft_PNG9.png'

interface SocialLoginProps {
  onClick?: (e: any) => void
}
export const SocialLogin = ({ onClick }: SocialLoginProps) => {
  return <div className='social-container'>
            <MemoizedButtonWithLogo logo={googleLogo} text="Sign In with Google" onClick={onClick}/>
            <MemoizedButtonWithLogo logo={microsoftLogo} text="Sign In with Microsoft" onClick={onClick}/>
    </div>
}

export const MemoizedSocialLogin = memo(SocialLogin)
