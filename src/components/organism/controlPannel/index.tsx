import React from 'react'
import './controlPannel.scss'
import { MemoisedSearchBox } from '../../atoms/serachBox/serachBox'
import systemLogo from '../../../assets/images/Group 16186.svg'
import brandingLogo from '../../../assets/images/Group 16194.svg'
import notificationLogo from '../../../assets/images/Group 16192.svg'
import groupsLogo from '../../../assets/images/Group 16256.svg'
import systemLogoGrey from '../../../assets/images/Group 16198.svg'
import { MemoisedNavTab } from '../../atoms/navTab'
import { MemoisedNavList } from '../../molecules/navList'
import { MemoisedNavHeader } from '../../molecules/navHeader'
import { MemoisedSystemDropdown } from '../../molecules/systemDropdown'
import { MemoisedThemeSelector } from '../../molecules/themeSelector'
import { themeData } from '../../../provider/appProvider/appContext'
interface ControlPannelProps {
  size?: 'sm' | 'md'
}

const dateModeData = [
  { title: 'Apr 26 2023', value: 'Apr 26 2023' },
  { title: '26 Apr 2023', value: '26 Apr 2023' },
  { title: '2023/ 04/ 26', value: '2023/ 04/ 26' },
  { title: '2023-04-26', value: '2023-04-26' }
]
const ControlPannel = ({ size = 'sm' }: ControlPannelProps) => {
  return <div className="side-pannel-container">
    <div className={`side-pannel ${size}`}>
      <MemoisedNavHeader title="Setting">
        <MemoisedSearchBox />
      </MemoisedNavHeader>
      <MemoisedNavList title='GENERAL'>
        <MemoisedNavTab title="System" active logo={systemLogo} />
        <MemoisedNavTab title="Profile" href='/profile' logo={groupsLogo} />

      </MemoisedNavList>

      <MemoisedNavList title='CALENDER'>
        <MemoisedNavTab title="Branding" logo={brandingLogo} />
        <MemoisedNavTab title="Notifications" logo={notificationLogo} />
        <MemoisedNavTab title="Groups" logo={groupsLogo} />
      </MemoisedNavList>
    </div>
    <div className='side-pannel-view'>
      <div className='title-wrapper'>
        <img className='img' src={systemLogoGrey}/>
        <p className='title'>System</p>
      </div>
      <MemoisedSystemDropdown />
      <MemoisedThemeSelector title="Theme" data={themeData}/>
      <MemoisedThemeSelector title="Date Mode" data={dateModeData}/>
    </div>
  </div>
}

export default ControlPannel
