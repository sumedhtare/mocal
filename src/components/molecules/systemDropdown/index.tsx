import React, { memo } from 'react'
import './systemDropdown.scss'
import { MemoisedDropdown } from '../../atoms/dropdown'

export const SystemDropdown = () => {
  return <div className='system-dropdown-container'>
        <MemoisedDropdown title='Language' data={['English', 'Hindi', 'Marathi']}/>
        <MemoisedDropdown title='Font Size' data={['Medium', 'Easy', 'Hard']}/>
    </div>
}

export const MemoisedSystemDropdown = memo(SystemDropdown)
