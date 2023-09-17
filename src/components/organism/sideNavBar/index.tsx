import React, { memo } from 'react'
import './sideNavBar.scss'
import noImg from '../../../assets/images/noimages.png'
import img1 from '../../../assets/images/Group 15413.svg'
import img2 from '../../../assets/images/Group 16186.svg'
import img3 from '../../../assets/images/Group 18506.svg'
import img4 from '../../../assets/images/Group 18507.svg'

export const SideNavBar = () => {
  return <div className="navbar-container">
    <img className='logo' src={noImg} />
    <div className='nav-wrapper'>
      <div className='nav-container'>
        <img src={img1} className='nav-logo'/>
        <img src={img2} className='nav-logo'/>
        <img src={img3} className='nav-logo'/>
        <img src={img4} className='nav-logo'/>

      </div>
      <div className='nav-spacer'/>
      <div className='nav-container'>
      <img src={img1} className='nav-logo'/>
        <img src={img2} className='nav-logo'/>
        <img src={img3} className='nav-logo'/>
        <img src={img4} className='nav-logo'/>

      </div>
    </div>
  </div>
}

export const MemoisedSideNavBar = memo(SideNavBar)
