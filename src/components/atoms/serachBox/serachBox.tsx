import React, { memo } from 'react'
import searchLogo1 from '../../../assets/images/Icon ionic-md-search.svg'
import searchLogo2 from '../../../assets/images/Icon ionic-md-search-red.svg'

import './serachBox.scss'
interface SearchBoxProps {
  size?: 'sm' | 'lg'
}
export const SearchBox = ({ size = 'sm' }: SearchBoxProps) => {
  return <div className='search-box-container'>
        <div className={`search-wrapper ${size}`}>
            <input placeholder="Search" className='search-input' />
            <img className={`logo-${size}`} src={size === 'sm' ? searchLogo1 : searchLogo2} />
        </div>
    </div>
}

export const MemoisedSearchBox = memo(SearchBox)
