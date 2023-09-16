import './theme/global.scss'
import React from 'react'
import ThemeProvider from './provider/appProvider/appContext'
import { ThemeSetter } from './provider/appProvider/themeSetter'
import Navigation from './provider/routeProvider'

function App () {
  return (
    <ThemeProvider>
      <ThemeSetter />
      <div className='myApp'/>
      <Navigation />
    </ThemeProvider>
  )
}

export default App
