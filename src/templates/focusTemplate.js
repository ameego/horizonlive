import React from "react"
import { graphql, Link } from "gatsby"
export default function Template({
  data: {
    allArtistsJson: { edges },
  },
}) {
  return (
    <div>
      {edges.map((artist, index) => (
        <p key={index}>
          <Link to={`../artists/${artist.node.slug}`}>
            {artist.node.artistName}
          </Link>
        </p>
      ))}
    </div>
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
