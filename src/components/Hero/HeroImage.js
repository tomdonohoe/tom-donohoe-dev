import React from 'react'
import styles from './HeroImage.module.css'
import Avatar from './img_placeholder_avatar.jpg'

const HeroImage = () => {

    return (
        <img className={styles.heroImage} src={Avatar} />
    )
}

export default HeroImage