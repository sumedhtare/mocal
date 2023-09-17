import React from 'react'
import './pageWithNav.scss'
import { Header } from '../../organism/header'
import { MemoisedSideNavBar } from '../../organism/sideNavBar'

interface PageWithNavProps {
  children?: React.ReactNode
}
const PageWithNav = ({ children }: PageWithNavProps) => {
  return <div className="page-anv-container">
        <Header/>
        <MemoisedSideNavBar/>
        {children}
    </div>
}

export default PageWithNav
