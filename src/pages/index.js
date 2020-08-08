import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import PageIntro from "../components/page-intro/page-intro"
import ArtistList from "../components/artist-list/artist-list"
import ImageBanner from "../components/image-banner/image-banner"
import Subtitle from "../components/subtitle/subtitle"

export const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      allArtistsJson {
        edges {
          node {
            ...ArtistsFragment
          }
        }
      }
      allHomeJson {
        edges {
          node {
            title
            subtitle
            banner
          }
        }
      }
    }
  `)
  return (
    <>
      <ImageBanner data={data.allHomeJson.edges[0].node.banner} />
      <Layout>
        <PageIntro
          title={data.allHomeJson.edges[0].node.title}
          subtitle={data.allHomeJson.edges[0].node.subtitle}
        />
        <ArtistList data={data} />
        <Subtitle text="Vidéothèque" />
      </Layout>
    </>
  )
}

export default Home
