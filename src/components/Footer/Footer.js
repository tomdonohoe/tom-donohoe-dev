import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a href="https://github.com/tomdonohoe">Github</a>
                <a href="https://www.linkedin.com/in/tomdonohoe/">Linkedin</a>
                <a href="https://twitter.com/TomDonohoe_">Twitter</a>
            </div>
            <div></div>
            <div className={styles.copyright}>
                <p>&copy; 2020 Tom Donohoe</p>
            </div>
        </footer>
    )
}

export default Footer