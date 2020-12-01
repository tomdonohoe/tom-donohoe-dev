import React from 'react'
import styles from './HeroImage.module.css'
import Tom from './tom.jpeg'

const HeroImage = () => {

    return (
        <img className={styles.heroImage} src={Tom} />
    )
}

export default HeroImage