import React from 'react'
import Tom from './tom.jpeg'
import styles from './Bio.module.css'

const Bio = () => {
    return (
        <section className={styles.bio}>
            <img className={styles.bioImage} src={Tom} alt=""/>
            <p>Tech blog by Tom Donohoe</p>
        </section>
    )
}

export default Bio