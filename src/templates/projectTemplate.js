import React from 'react'
import { graphql } from 'gatsby'
import styles from './projectTemplate.module.css'

const projectTemplate = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <div className={styles.project}>
              <h1>{frontmatter.title}</h1>
              <p className={styles.techstack}>Tech stack: {frontmatter.stack}</p>
              <div 
                  className="content"
                  dangerouslySetInnerHTML={{ __html: html }}
              />
        </div>
    )
}

export default projectTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        stack
        author
        date(formatString: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
`