import React from 'react'
import menuStyles from './MobileMenu.module.css'
import MenuIcon from './MenuIcon.js'

const MobileMenu = () => {

    return (
        <nav className={menuStyles.menu}>
            <div className={menuStyles.header}>
                <a href="/">Tom Donohoe</a>
                <MenuIcon />
            </div>
            <div className={menuStyles.menuLinks}>
                <a className={menuStyles.menuLink} href="/about">about</a>
                <a className={menuStyles.menuLink} href="/">projects</a>
                <a className={menuStyles.menuLink} href="/">resume</a>
                <a className={menuStyles.menuLink} href="/posts">blog</a>                
            </div>
        </nav>
    )
}

export default MobileMenu