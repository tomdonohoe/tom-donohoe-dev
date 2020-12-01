import React from 'react'
import HeroImage from './HeroImage.js'
import HeroText from './HeroText.js'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div>
                <HeroText />
            </div>
            <div>
                <HeroImage />
            </div>
        </section>
    )
}

export default Hero