import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styles from './Posts.module.css'
import PostLink from './PostLink.js'

const Posts = ({ type }) => {
    return (
        <StaticQuery
            query={graphql`
            query {
              allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    id
                    frontmatter {
                      date(formatString: "MMMM DD, YYYY")
                      slug
                      title
                      author
                      stack
                      type
                    }
                  }
                }
              }
            }
            `}
              render={data => {
                console.log(data.allMarkdownRemark.edges)
                let posts = data.allMarkdownRemark.edges
                  .filter(edge => edge.node.frontmatter.type === type)
                  .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
                return (
                  <div>
                    <div className={styles.postsHeader}>
                      <h1>Latest {type}s</h1>
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