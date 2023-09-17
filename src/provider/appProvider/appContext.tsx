import React, { useState, createContext } from 'react'
import noImage from '../../assets/images/noimages.png'

export const themeData = [
  { title: 'Light', img: noImage, value: 'light' },
  { title: 'Dark', img: noImage, value: 'dark' },
  { title: 'White', img: noImage, value: 'light' }
]

export const initialAppState = {
  theme: 0,
  setTheme: (e: number) => {},
  user: null,
  setUser: (e: any) => {}
}

export const AppContext = createContext(initialAppState)

interface AppProviderProps {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState<number>(initialAppState.theme)
  const [user, setUser] = useState<any>(initialAppState.user)

  return (
    <AppContext.Provider value={{ theme, setTheme, user, setUser }}>
        <div className={`theme-${themeData[theme].value}`}>
          {children}
        </div>
    </AppContext.Provider>
  )
}

export default AppProvider
