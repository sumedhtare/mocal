import React, { memo } from 'react'
import './header.scss'
import { MemoisedSearchBox } from '../../atoms/serachBox/serachBox'
import icon1 from '../../../assets/images/Group 15413.svg'
import icon2 from '../../../assets/images/Group 16186.svg'
import icon3 from '../../../assets/images/Group 18506.svg'
import avatar from '../../../assets/images/Rahul photo 1@2x.png'
import downArrow from '../../../assets/images/Group 1.svg'

export const Header = () => {
  return <div className='header-container'>
        <div />
        <div className='center'>
        <MemoisedSearchBox size="lg" />
        </div>
        <div className='right-menu'>
            <div className='circle'>
                <img src={icon1}/>
            </div>
            <div className='circle'>
            <img src={icon2}/>

            </div>
            <div className='circle'>
            <img src={icon3}/>

            </div>
            <div className='box'>
                <img src={avatar} className='avatar'/>
                <p className='name font-color'>BG</p>
                <img src={downArrow}/>
            </div>
        </div>
    </div>
}

export const MemoisedHeader = memo(Header)
