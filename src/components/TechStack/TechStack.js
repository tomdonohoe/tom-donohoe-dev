import React from 'react'
import styles from './TechStack.module.css'
import jsLogo from './js.png'
import rubyLogo from './ruby.png'
import pythonLogo from './python.png'

import nodeLogo from './nodejs.png'
import sqlLogo from './sql.png'
import reactLogo from './react.png'

const TechStack = () => {

    return (
        <div className={styles.techStack}>
            <img src={jsLogo} alt=""/>
            <img src={nodeLogo} alt=""/>
            <img src={pythonLogo} alt=""/>
            <img src={rubyLogo} alt=""/>
            <img src={sqlLogo} alt=""/>
            <img src={reactLogo} alt=""/>
        </div>
    )
}

export default TechStack