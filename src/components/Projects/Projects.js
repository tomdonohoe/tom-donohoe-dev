import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import ProjectLink from './ProjectLink.js'

const Projects = () => {
    return (
        <StaticQuery
            query={graphql`
            query {
              allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "project"}}}) {
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
                let projects = data.allMarkdownRemark.edges.map(edge => <ProjectLink key={edge.node.id} project={edge.node} />)
                return <div>{projects}</div>
              }}
        />
    )
}

export default Projects