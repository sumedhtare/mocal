import React, { memo } from 'react'
import './navHeader.scss'

interface NavHeaderProps {
  title: string
  children: React.ReactNode
}

export const NavHeader = ({ title, children }: NavHeaderProps) => {
  return <div className='nav-header-container'>
        <p className='title font-color'>{title}</p>
        {children}
    </div>
}

export const MemoisedNavHeader = memo(NavHeader)
