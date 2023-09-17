/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { memo } from 'react'
import './radioSelect.scss'

interface RadioSelectProps {
  img?: any
  title: string
  selected?: boolean
  onChange?: (e: any) => void
}
export const RadioSelect = ({ img, title, selected = false, onChange }: RadioSelectProps) => {
  return <div className='radio-container'>
        {img && <div className={`image-container ${selected ? 'selected' : ''}`}>
            <img className='image' src={img}/>
            </div>}
        <div className='radio-wrapper'>
            <div className='radio-circle' onClick={onChange} >
                <div className={selected ? 'radio' : 'checked'}/>
            </div>
        <label className='font-color' htmlFor={title}>{title}</label>
        </div>
    </div>
}

export const MemoisedRadioSelect = memo(RadioSelect)
