import React, { useState, createContext } from 'react'

export const initialAppState = {
  theme: 'light',
  setTheme: (e: string) => {},
  user: null,
  setUser: (e: any) => {}
}

export const AppContext = createContext(initialAppState)

interface AppProviderProps {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState<string>(initialAppState.theme)
  const [user, setUser] = useState<any>(initialAppState.user)

  return (
    <AppContext.Provider value={{ theme, setTheme, user, setUser }}>
        <div className={`theme--${theme}`}>
          {children}
        </div>
    </AppContext.Provider>
  )
}

export default AppProvider
