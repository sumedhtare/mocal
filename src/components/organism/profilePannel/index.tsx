import React from 'react'
import './profilePannel.scss'
import brandingLogo from '../../../assets/images/Group 16194.svg'
import notificationLogo from '../../../assets/images/Group 16192.svg'
import groupsLogo from '../../../assets/images/Group 16256.svg'
import groupsLogoAct from '../../../assets/images/Group 15413.svg'

import systemLogoGrey from '../../../assets/images/Group 16198.svg'
import { MemoisedNavTab } from '../../atoms/navTab'
import { MemoisedNavList } from '../../molecules/navList'
import { MemoisedNavHeader } from '../../molecules/navHeader'
// import { MemoisedSystemDropdown } from '../../molecules/systemDropdown'
// import { MemoisedThemeSelector } from '../../molecules/themeSelector'
// import noImage from '../../../assets/images/noimages.png'
import ProfileForm from '../profileForm'
interface ProfilePannelProps {
  size?: 'sm' | 'md'
}

const ProfilePannel = ({ size = 'sm' }: ProfilePannelProps) => {
  return <div className="side-pannel-container">
    <div className={`side-pannel ${size}`}>
      <MemoisedNavHeader title="My Account">
      </MemoisedNavHeader>

      <MemoisedNavList title=''>
        <MemoisedNavTab title="System" href='/dashboard' logo={systemLogoGrey} />
        <MemoisedNavTab title="Profile" active href='/profile' logo={groupsLogoAct} />
        <MemoisedNavTab title="Branding" logo={brandingLogo} />
        <MemoisedNavTab title="Notifications" logo={notificationLogo} />
        <MemoisedNavTab title="Groups" logo={groupsLogo} />
      </MemoisedNavList>

    </div>
    <div className='side-pannel-view'>
      <div className='title-wrapper'>
        <img className='img' src={groupsLogo}/>
        <p className='title'>Profile</p>
      </div>
      <ProfileForm/>
    </div>
  </div>
}

export default ProfilePannel
