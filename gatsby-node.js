const get = require(`lodash.get`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  const isFuture = fieldName => source => {
    const date = get(source, fieldName)
    return new Date(date) > new Date()
  }

  createFieldExtension({
    name: `isFuture`,
    args: {
      fieldName: "String!",
    },
    extend({ fieldName }) {
      return {
        resolve: isFuture(fieldName),
      }
    },
  })

  createTypes(`
    type AgendaJson implements Node {
      isFuture: Boolean! @isFuture(fieldName: "eventdate")
    }
  `)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allFocusJson {
        edges {
          node {
            slug
            focus
          }
        }
      }
      allArtistsJson {
        edges {
          node {
            slug
            artistName
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
      path: `artistes/${item.node.slug}`,
      component: require.resolve(`./src/templates/artistsDetails.js`),
      context: {
        slug: item.node.slug,
        artistName: item.node.artistName,
      },
    })
  })

  result.data.allFocusJson.edges.forEach(item => {
    createPage({
      path: `focus/${item.node.slug}`,
      component: require.resolve(`./src/templates/focusDetails.js`),
      context: {
        slug: item.node.focus,
        url: item.node.slug,
      },
    })
  })
}
