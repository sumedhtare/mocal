import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import './link.scss'
interface LinkProps {
  text: string
  href: string
  isInternal?: boolean
  big?: boolean
}
export const TextLink = ({ text, href, isInternal = true, big = false }: LinkProps) => {
  if (isInternal) {
    return <Link className={`link${big ? ' big' : ''}`} to={href}>{text}</Link>
  }
  return <a className={`link${big ? ' big' : ''}`} href={href}>{text}</a>
}

export const MemoisedTextLink = memo(TextLink)
