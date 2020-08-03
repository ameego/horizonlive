import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ArtistList from "../components/artist-list/artist-list"

export default function Template({ data }) {
  return (
    <Layout>
      <ArtistList data={data} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    allArtistsJson(filter: { category: { eq: $slug } }) {
      edges {
        node {
          ...ArtistsFragment
        }
      }
    }
  }
`
