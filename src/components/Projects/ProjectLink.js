import React from 'react'
import { Link } from 'gatsby'
import styles from '../Posts/PostLink.module.css'

const ProjectLink = ({ project }) => {
    return (
            <div className={styles.projectLink}>
                <Link to={project.frontmatter.slug}>
                <h2>{project.frontmatter.title}</h2>
                </Link>
            </div>
    )
}

export default ProjectLink