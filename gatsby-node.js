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
      allAgendaJson {
        edges {
          node {
            category
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
      path: `artists/${item.node.slug}`,
      component: require.resolve(`./src/templates/artistsDetails.js`),
      context: {
        slug: item.node.slug,
        artistName: item.node.artistName,
      },
    })
  })

  // result.data.allFocusJson.edges.forEach(item => {
  //   createPage({
  //     path: `focus/${item.node.slug}`,
  //     component: require.resolve(`./src/templates/focusDetails.js`),
  //     context: {
  //       slug: item.node.focus,
  //     },
  //   })
  // })
}
