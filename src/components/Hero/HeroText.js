import React from 'react'
import Button from '../Button/Button.js'
import styles from './HeroText.module.css'

const HeroText = () => {
    return (
        <div className={styles.heroText}>
            <div>
                <span className={styles.jobTitle}>Software Engineer</span>
                <h1>Tom Donohoe</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magni rerum enim provident officia sequi accusantium vitae quis quisquam quibusdam expedita, facere sapiente placeat. Iusto, ullam mollitia! Quaerat, nam tempora.</p>
            </div>
            <div>
                <Button text="view projects" link="/projects" />
            </div>
        </div>
    )
}

export default HeroText