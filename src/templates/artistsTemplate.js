import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data: {
    allArtistsJson: { edges },
  },
}) {
  return (
    <div>
      <h1>{edges[0].node.artistName}</h1>
      <ul>
        {edges[0].node.category.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <p>{edges[0].node.biography}</p>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    allArtistsJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          artistName
          biography
          category
        }
      }
    }
  }
`
