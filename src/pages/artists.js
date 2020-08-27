import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import PageIntro from "../components/page-intro/page-intro"
import ImageBanner from "../components/image-banner/image-banner"
import ArtistList from "../components/artist-list/artist-list"

export const Home = () => {
  const data = useStaticQuery(graphql`
    query ArtistQuery {
      artistData: allArtistsJson(sort: { fields: displayOrder }) {
        nodes {
          ...ArtistsFragment
        }
      }
      allArtistsPageJson {
        nodes {
          title
          subtitle
        }
      }
    }
  `)
  return (
    <>
      <SEO />
      <ImageBanner />
      <Layout>
        <PageIntro
          title={data.allArtistsPageJson.nodes[0].title}
          subtitle={data.allArtistsPageJson.nodes[0].subtitle}
        />
        <ArtistList data={data.artistData.nodes} />
      </Layout>
    </>
  )
}

export default Home
