const fs = require("fs-extra")
const path = require("path")

exports.sourceNodes = ({ actions, createContentDigest, createNodeId }) => {
  const { createNode } = actions

  const createGraphqlNode = (content, nodeName, id) => {
    const nodeContent = JSON.stringify(content)
    const nodeMeta = {
      id: createNodeId(`my-data-${id}`),
      parent: null,
      children: [],
      internal: {
        type: nodeName,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(content),
      },
    }
    const node = Object.assign({}, content, nodeMeta)
    createNode(node)
  }

  fs.readdir("artists/", (err, files) => {
    files.map(file => {
      fs.readJson(path.resolve("./", "artists/", file)).then(content => {
        createGraphqlNode(content, "Artists", content.artistName)
      })
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const artistsTemplate = require.resolve(`./src/templates/artistsTemplate.js`)
  const result = await graphql(`
    {
      allArtists {
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

  result.data.allArtists.edges.forEach(item => {
    createPage({
      path: item.node.slug,
      component: artistsTemplate,
      context: {
        slug: item.node.slug,
      },
    })
  })
}
