import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import ArtistList from "../components/artist-list/artist-list"

export const Home = () => {
  const data = useStaticQuery(graphql`
    query ArtistQuery {
      artistData: allArtistsJson {
        nodes {
          ...ArtistsFragment
        }
      }
    }
  `)
  return (
    <>
      <SEO />
      <Layout>
        <ArtistList data={data.artistData.nodes} />
      </Layout>
    </>
  )
}

export default Home
