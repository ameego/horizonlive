exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const artistsTemplate = require.resolve(`./src/templates/artistsTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.slug,
      component: artistsTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
