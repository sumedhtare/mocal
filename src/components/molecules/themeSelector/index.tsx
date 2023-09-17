import React, { memo, useCallback, useContext, useState } from 'react'
import './themeSelector.scss'
import { MemoisedRadioSelect } from '../../atoms/radioSelect'
import { AppContext } from '../../../provider/appProvider/appContext'

interface SelectorData {
  title: string
  value: string
  img?: any
}
interface ThemeSelectorProps {
  title: string
  data: SelectorData[]
}

export const ThemeSelector = ({ title, data = [] }: ThemeSelectorProps) => {
  const { theme, setTheme } = useContext(AppContext)
  const [selected, setSelected] = useState<string>(data[theme].title)

  const handleChange = useCallback((e: any, item: SelectorData, index: number) => {
    setSelected(item.title)
    if (title === 'Theme') {
      setTheme(index)
    }
  }, [])
  return <div className='theme-selector-container'>
    <p className='title primary-color'>{title}</p>
    <div className='theme-selector'>
        {data.map((item: SelectorData, index: number) => <MemoisedRadioSelect img={item.img}
        key={item.title} title={item.title}
        onChange={(e: any) => { handleChange(e, item, index) }}
        selected={selected === item.title}/>)}
        </div>
    </div>
}

export const MemoisedThemeSelector = memo(ThemeSelector)
