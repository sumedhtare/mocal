/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { memo } from 'react'
import './navTab.scss'
import { Link } from 'react-router-dom'

interface NavTabProps {
  logo?: any
  title: string
  href?: string
  active?: boolean
}
export const NavTab = ({ logo, title, href = '#', active }: NavTabProps) => {
  return <Link to={href} className={`nav-tab-container ${active ? 'red' : ''}`}>
    {logo && <img src={logo} className={`logo ${active ? 'red' : ''}`}/>}
    <p className={`${active ? 'red' : 'text'}`}>{title}</p>
    </Link>
}

export const MemoisedNavTab = memo(NavTab)
