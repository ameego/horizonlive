import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

export default function Template({ data }) {
  var aristData = data.allArtistsJson.edges[0].node
  var agendaData = data.allAgendaJson.edges

  return (
    <Layout>
      <h1>{aristData.artistName}</h1>
      <p>{aristData.biography}</p>
      <ul>
        {aristData.category.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <h2>Agenda</h2>
      <ul>
        {agendaData.map((date, index) => (
          <li key={index}>
            <p>
              {date.node.evenement} | {date.node.eventdate}
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!, $artistName: String!) {
    allArtistsJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          ...ArtistsFragment
        }
      }
    }
    allAgendaJson(filter: { category: { eq: $artistName } }) {
      edges {
        node {
          ...AgendaFragment
        }
      }
    }
  }
`
