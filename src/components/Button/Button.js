import React from 'react'
import style from './Button.module.css'

const Button = ({ text, link}) => {
    return (
       <a
        className={style.btn} 
        href={link}
       >
          {text}
       </a> 
    )
}

export default Button