import React, { memo, useContext } from 'react'
import './profileForm.scss'
import Input from '../../atoms/textInput'
import { MemoisedDropdown } from '../../atoms/dropdown'
import { MemoisedDivider } from '../../atoms/divider'
import { MemoisedButton } from '../../atoms/button'
import { AppContext } from '../../../provider/appProvider/appContext'
import noImg from '../../../assets/images/noimages.png'
const ProfileForm = () => {
  const { user } = useContext(AppContext)

  if (user) {
    return <form className='profile-form-wrapper'>

        <div className='profile-info'>
            <img className="profile-img" src={noImg}/>
            <div>
            <p className='profile-name'>{(user as any).firstname}</p>
            <p className='profile-email'> {(user as any).email}</p>
            </div>
        </div>
        <div className='profile-form-container'>
            <Input ui='profile' label='First Name' id="firstname" placeholder={(user as any).firstname} />
            <Input ui='profile' label='Last Name' id="lastname" placeholder={(user as any).lastname} />
            <Input ui='profile' label='Display Name' id="displayname" placeholder={(user as any).displayname} />
            <Input ui='profile' label='Gender' id="gender" placeholder={(user as any).gender} />
            <MemoisedDropdown title='Designation' data={['PR & Business Development Manager']} />
            <MemoisedDropdown title='I am...' data={['Individual']} />
            <MemoisedDropdown title='Industry' data={['PR & Marketing']} />
            <Input ui='profile' label='Website' id="website" placeholder={(user as any).gender} />
            <Input ui='profile' label='Address Line' id="address" placeholder={(user as any).gender} />
            <Input ui='profile' label='City' id="city" placeholder={(user as any).gender} />
            <MemoisedDropdown title='State' data={['Karnataka']} />
            <MemoisedDropdown title='Country' data={['India']} />
        </div>
        <div>
            <MemoisedDivider text="WORK DETAILS" lg />
        </div>
        <div className='profile-form-container'>
            <Input ui='profile' label='Company / Organisation Name' id="company" placeholder={(user as any).company} />
            <MemoisedDropdown title='Company Type' data={['Partnership']} />
            <MemoisedDropdown title='Seniority Level' data={['Owner']} />
            <MemoisedDropdown title='Company Headcount' data={['100 - 150']} />
            <Input ui='profile' label='Work Email Address' id="wrokEmail" placeholder={(user as any).wrokEmail} />
            <Input ui='profile' label='Work Phone Number' id="workNumber" placeholder={(user as any).workNumber} />
            <Input ui='profile' label='Company Website' id="companyWebsite" placeholder={(user as any).companyWebsite} />
            <MemoisedDropdown title='Company Headquarters' data={['Bangalore']} />
            <Input ui='profile' label='Work Address' id="workAddress" placeholder={(user as any).workAddress} />
            <Input ui='profile' label='Work City' id="workCity" placeholder={(user as any).workCity} />
            <MemoisedDropdown title='Work State' data={['Karnataka']} />
            <MemoisedDropdown title='Work Country' data={['India']} />
            <MemoisedDropdown title='Department' data={['Accounting']} />
        </div>

        <div className='profile-form-container'>
            <MemoisedButton size='sm' type='submit'>SAVE</MemoisedButton>
            <MemoisedButton size='sm' type='reset' disabled>CANCLE</MemoisedButton>
        </div>

        <MemoisedDivider />

        <div>
            <p className='profile-text'>Close Account</p>
            <p className='profile-text-sec'>Permanently delete all account information and services data.</p>
        </div>
        <MemoisedButton type='submit'>Close Account</MemoisedButton>

    </form>
  }
  return null
}

export default memo(ProfileForm)
