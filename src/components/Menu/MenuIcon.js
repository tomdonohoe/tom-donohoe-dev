import React from 'react'
import { useState } from 'react'
import {container, change, bar1, bar2, bar3} from './MenuIcon.module.css'

const MenuIcon = () => {
    const [isMenuActive, setMenuState] = useState(false)

    return (
        <div className={`${container} ${isMenuActive ? change : ''}`} onClick={() => setMenuState(!isMenuActive)}>
            <div className={bar1}></div>
            <div className={bar2}></div>
            <div className={bar3}></div>
        </div>
    )
}

export default MenuIcon