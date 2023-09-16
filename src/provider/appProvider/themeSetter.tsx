import React, { useContext } from 'react'
import { AppContext } from './appContext'

const themeOptions = [{ value: 'light' }, { value: 'dark' }]

export const ThemeSetter = () => {
  const { theme, setTheme } = useContext(AppContext)
  return (
    <select value={theme} onChange={(e) => { setTheme(e.currentTarget.value) }}>
      {themeOptions.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.value}
        </option>
      ))}
    </select>
  )
}
