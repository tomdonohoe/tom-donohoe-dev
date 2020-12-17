import React from 'react'
import { useState } from 'react'
import menuStyles from './Menu.module.css'

const Menu = () => {

    const [isMenuActive, setMenuState] = useState(false)

    // className={`${container} ${isMenuActive ? change : ''}`} onClick={() => setMenuState(!isMenuActive)}>

    return (
        <nav className={menuStyles.navigation}>
            <div className={menuStyles.navigationBranding}>
                <a href="/">Tom Donohoe</a>
            </div>
            <div 
                className={`${menuStyles.navigationOverlay} ${isMenuActive ? menuStyles.navigationToggled : ''}`}
                >
                <ul className={menuStyles.navigationLinks}>
                    <li><a href="/projects">projects</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/posts">blog</a></li>             
                </ul>
            </div>
            <div
                className={`${menuStyles.navigationIcon} ${isMenuActive ? menuStyles.change : ''}`}
                onClick={() => setMenuState(!isMenuActive)}
                >
                <div className={menuStyles.bar1}></div>
                <div className={menuStyles.bar2}></div>
                <div className={menuStyles.bar3}></div>
            </div>
        </nav>
    )
}

export default Menu