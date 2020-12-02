exports.createPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions
    const postTemplate = require.resolve(`./src/templates/postTemplate.js`)
    const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`)
    const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              slug
              type
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allMarkdownRemark
  edges.forEach( ({ node }) => {

    if (node.frontmatter.type === 'project') {
      createPage({
        path: node.frontmatter.slug,
        component: projectTemplate,
        context: {
            slug: node.frontmatter.slug
        }
      })
    } else {
      createPage({
        path: node.frontmatter.slug,
        component: postTemplate,
        context: {
            slug: node.frontmatter.slug
        }
      })      
    }
  })

}