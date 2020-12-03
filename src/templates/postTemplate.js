import React from 'react'
import { graphql } from 'gatsby'
import ShareButtons from '../components/Share/Share.js'
import Subscribe from '../components/Subscribe/Subscribe.js'
import styles from './postTemplate.module.css'

const blogTemplate = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const tags = frontmatter.tags.map(tag => <div className={styles.tag}>{tag}</div>)
    // console.log(frontmatter.tags)
    return (
        <div className={styles.post}>
            <article>
              <h1>{frontmatter.title}</h1>
              <div className={styles.meta}>
                  <span>Published on {frontmatter.date}</span>
                  <span>Written by {frontmatter.author}</span>
              </div>
              <div 
                  className="content"
                  dangerouslySetInnerHTML={{ __html: html }}
              />
              </article>

              <aside className={styles.sidebar}>
                <div className={styles.sidebarItem}>
                  <h3>Share on social</h3>
                  <ShareButtons title={frontmatter.title} url={frontmatter.slug} />
                </div>

                <div className={styles.sidebarItem}>
                  <h3>Subscribe to blog</h3>
                  <Subscribe />
                </div>

                <div className={styles.sidebarItem}>
                  <h3>Related tags</h3>
                  <div className={styles.tags}>
                    {tags}
                  </div>
                </div>
              </aside>
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
        date(formatString: "MMMM DD, YYYY")
        excerpt
        tags
      }
    }
  }
`