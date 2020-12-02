import React from 'react'
import menuStyles from './Menu.module.css'

const Menu = () => {

    return (
        <nav className={menuStyles.menu}>
            <div className={menuStyles.logo}>
            <a href="/">Tom Donohoe</a>
            </div>
            <div className={menuStyles.menuLinks}>
                <a className={menuStyles.menuLink} href="/projects">projects</a>
                <a className={menuStyles.menuLink} href="/about">about</a>
                <a className={menuStyles.menuLink} href="/posts">blog</a>                
            </div>
        </nav>
    )
}

export default Menu