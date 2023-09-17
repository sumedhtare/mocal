import React, { memo } from 'react'
import './navList.scss'

interface NavListProps {
  title: string
  children: React.ReactNode
}

export const NavList = ({ title, children }: NavListProps) => {
  return <div className='nav-list-container'>
        <p className='title'>{title}</p>
        <div className='nav-children'>
        {children}
        </div>
    </div>
}

export const MemoisedNavList = memo(NavList)
