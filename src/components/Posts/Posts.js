import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styles from './Posts.module.css'
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
                return (
                  <div>
                    <div className={styles.postsHeader}>
                      <h1>Latest Posts</h1>
                    </div>
                  <div className={styles.postsList}>
                    {posts}
                  </div>
                  </div>
                )
              }}
        />
    )
}

export default Posts