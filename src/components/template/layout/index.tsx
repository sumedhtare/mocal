import React, { useContext, useEffect } from 'react'
import { useNavigation, useNavigate } from 'react-router-dom'
import { AppContext } from '../../../provider/appProvider/appContext'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  const navigation = useNavigation()
  const navigate = useNavigate()
  const { user } = useContext(AppContext)

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [navigation, user])
  return <>
    {children}
    </>
}

export default Layout
