import React from 'react'
import styles from '../Subscribe/Subscribe.module.css'

const Subscribe = () => {
    return (
        <form action="">
            <input className={styles.subscribeInput} type="text" placeholder="enter email" />
            <input className={styles.subscribeBtn} type="submit" value="subscribe" />
        </form>
    )
}

export default Subscribe