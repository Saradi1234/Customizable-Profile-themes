import React, { useState } from 'react'
import "../styles/navbar.css"
import { BsThreeDotsVertical } from 'react-icons/bs'

const THEME_NAMES = ['Light', 'Dark', 'Nature', 'Love']

function Navbar({ setTheme, theme }) {
  const [showMenu, setShowMenu] = useState(false)
  const handleSetTheme = (theme)=>{
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }
  return (
    <div className={`nav-container ${theme}`}>
      <div className="vertical-menu" onClick={() => { setShowMenu(prev => !prev) }}>
        <BsThreeDotsVertical className='vertical-menu-icon' />
        <div className={`theme-selector ${showMenu ? 'active' : ''}`}>
          {THEME_NAMES.map((theme, idx) => {
            return <div
              key={idx}
              className="theme"
              onClick={() => { handleSetTheme(theme) }}
            >
              {theme}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar