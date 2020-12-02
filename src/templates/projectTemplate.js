import React from 'react'
import { graphql } from 'gatsby'
import PostContainer from '../components/Container/PostContainer.js'


const projectTemplate = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <PostContainer>
        <div className="post">
            <h1>{frontmatter.title}</h1>
            <div 
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
        </PostContainer>
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
        author
        date(formatString: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
`