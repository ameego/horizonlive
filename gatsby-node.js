const fs = require("fs-extra")
const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const artistsTemplate = require.resolve(`./src/templates/artistsTemplate.js`)
  const result = await graphql(`
    {
      allArtistsJson {
        edges {
          node {
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

  result.data.allArtistsJson.edges.forEach(item => {
    createPage({
      path: item.node.slug,
      component: artistsTemplate,
      context: {
        slug: item.node.slug,
      },
    })
  })
}
