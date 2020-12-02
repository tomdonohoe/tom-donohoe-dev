import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import PostLink from './PostLink.js'

const Posts = () => {
    return (
        <StaticQuery
            query={graphql`
            query {
              allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "post"}}}) {
                edges {
                  node {
                    id
                    frontmatter {
                      date(formatString: "MMMM DD, YYYY")
                      slug
                      title
                      author
                    }
                  }
                }
              }
            }
            `}
              render={data => {
                let posts = data.allMarkdownRemark.edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)
                return <div>{posts}</div>
              }}
        />
    )
}

export default Posts