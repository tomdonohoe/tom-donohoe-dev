import React from 'react'
import { Link } from 'gatsby'
import styles from './PostLink.module.css'

const PostLink = ({ post }) => {
    return (
            <div className={styles.postLink}>
                <Link to={post.frontmatter.slug}>
                <h2>{post.frontmatter.title}</h2>
                </Link>
                <div className={styles.meta}>
                    <div>Published on {post.frontmatter.date}</div>
                    <div>Written by {post.frontmatter.author}</div>
                </div>
            </div>
    )
}

export default PostLink