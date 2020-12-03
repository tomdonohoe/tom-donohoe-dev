import React from 'react'
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.content}>
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempora accusamus perferendis sunt itaque! Laboriosam itaque, repellendus libero consequuntur possimus deserunt blanditiis aperiam pariatur provident officia. Tempora nobis praesentium hic.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempora accusamus perferendis sunt itaque! Laboriosam itaque, repellendus libero consequuntur possimus deserunt blanditiis aperiam pariatur provident officia. Tempora nobis praesentium hic.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempora accusamus perferendis sunt itaque! Laboriosam itaque, repellendus libero consequuntur possimus deserunt blanditiis aperiam pariatur provident officia. Tempora nobis praesentium hic.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempora accusamus perferendis sunt itaque! Laboriosam itaque, repellendus libero consequuntur possimus deserunt blanditiis aperiam pariatur provident officia. Tempora nobis praesentium hic.</p>
            </div>
            <div className={styles.image}>
                <img src="https://via.placeholder.com/500" alt=""/>
            </div>
        </div>
    )
}

export default About