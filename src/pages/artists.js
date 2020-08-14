import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import ImageBanner from "../components/image-banner/image-banner"
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
      <ImageBanner />
      <Layout>
        <ArtistList data={data.artistData.nodes} />
      </Layout>
    </>
  )
}

export default Home
