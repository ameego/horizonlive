import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import Utils from "../utils/utils"
// console.log(Utils)

export default function Template({ data }) {
  const { aristData, agendaData, allImageContent } = data

  return (
    <Layout>
      <h1>{aristData.edges[0].node.artistName}</h1>
      <p>{aristData.edges[0].node.biography}</p>
      <ul>
        {aristData.edges[0].node.category.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <h2>Agenda</h2>
      <ul>
        {agendaData.edges.map((date, index) => (
          <li key={index}>
            <p>
              {date.node.evenement} | {date.node.eventdate}
            </p>
          </li>
        ))}
      </ul>

      <ul>
        {aristData.edges[0].node.galleryImages
          ? aristData.edges[0].node.galleryImages.map((image, index) => {
              return (
                <li key={index}>
                  <p>
                    <Img
                      fluid={Utils.getCurrentImage(allImageContent, image)}
                    />
                  </p>
                </li>
              )
            })
          : null}
      </ul>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!, $artistName: String!) {
    aristData: allArtistsJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          ...ArtistsFragment
        }
      }
    }
    agendaData: allAgendaJson(filter: { category: { eq: $artistName } }) {
      edges {
        node {
          ...AgendaFragment
        }
      }
    }
    allImageContent: allImageSharp {
      edges {
        node {
          fluid(maxWidth: 500) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
