import React from 'react'
import { Link } from 'gatsby'
import styles from './PostLink.module.css'


const Meta = ({ post }) => {
    if (post.frontmatter.type === 'post') {
        return (
            <div className={styles.meta}>
                <div>Published on {post.frontmatter.date}</div>
                <div>Written by {post.frontmatter.author}</div>
            </div>
        )
    } else {
        return (
            <div className={styles.meta}>
                <div>Tech stack: {post.frontmatter.stack}</div>
            </div>
        )
    }
}

const PostLink = ({ post }) => {
    return (
            <div className={styles.postLink}>
                <Link to={post.frontmatter.slug}>
                <h2>{post.frontmatter.title}</h2>
                </Link>
                <Meta post={post} />
            </div>
    )
}

export default PostLink