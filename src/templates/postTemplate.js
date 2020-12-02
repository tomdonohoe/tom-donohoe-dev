import React from 'react'
import { graphql } from 'gatsby'
import styles from './postTemplate.module.css'
import PostContainer from '../components/Container/PostContainer.js'


const blogTemplate = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <PostContainer>
        <div className="post">
            <h1>{frontmatter.title}</h1>
            <div className={styles.meta}>
                <span>Published on {frontmatter.date}</span>
                <span>Written by {frontmatter.author}</span>
            </div>
            <div 
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
        </PostContainer>
    )
}

export default blogTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        author
        date(formatString: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
`