import React, { memo } from 'react'
import './dropdown.scss'

interface DropdownProps {
  title: string
  data: string[]
}
export const Dropdown = ({ title, data = [] }: DropdownProps) => {
  return <div className='dropdown-container'>
    <p className='title primary-color'>{title}</p>
    <div className='dropdown-wrapper'>
        <select name={title} id={title} className='dropdown'>
            {data.map((item: string, index: number) => <option key={item} value={item}>{item}</option>)}
        </select>
        </div>
    </div>
}

export const MemoisedDropdown = memo(Dropdown)
