import React from 'react'
import AppProvider from './provider/appProvider/appContext'
import Navigation from './provider/routeProvider'
import './theme/global.scss'

function App () {
  return (
    <AppProvider>
      <div className='myApp'/>
      <Navigation />
    </AppProvider>
  )
}

export default App
