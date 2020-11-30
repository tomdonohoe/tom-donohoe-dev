import React from 'react'
import { graphql } from 'gatsby'


const blogTemplate = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="post">
            <div className="meta">
                <h1>{frontmatter.title}</h1>
                <span>written by {frontmatter.author}</span>
                <span>published on {frontmatter.date}</span>
            </div>
            <div 
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
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
        date(formatString: "YYYY MM DD")
        excerpt
      }
    }
  }
`