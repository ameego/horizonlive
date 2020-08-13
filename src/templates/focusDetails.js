import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import ArtistList from "../components/artist-list/artist-list"

export default function Template({ data }) {
  return (
    <>
      <SEO />
      <Layout>
        <ArtistList data={data.artistData.nodes} />
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    artistData: allArtistsJson(filter: { category: { eq: $slug } }) {
      nodes {
        ...ArtistsFragment
      }
    }
  }
`
