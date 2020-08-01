import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"

export default function Template({
  data: {
    allArtistsJson: { edges },
  },
}) {
  return (
    <Layout>
      {edges.map((artist, index) => (
        <p key={index}>
          <Link to={`../artists/${artist.node.slug}`}>
            {artist.node.artistName}
          </Link>
        </p>
      ))}
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    allArtistsJson(filter: { category: { eq: $slug } }) {
      edges {
        node {
          slug
          artistName
        }
      }
    }
  }
`
