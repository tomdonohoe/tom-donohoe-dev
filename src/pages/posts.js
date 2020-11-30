import React from 'react'
import { graphql } from 'gatsby'
import PostLink from '../components/PostLink.js'

const PostsPage = ({ data }) => {
  const Posts = data.allMarkdownRemark.edges
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return <div>{Posts}</div>
}

export default PostsPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
