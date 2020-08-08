import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import ArtistList from "../components/artist-list/artist-list"
import ImageBanner from "../components/image-banner/image-banner"

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
        <ArtistList data={data} />
      </Layout>
    </>
  )
}

export default Home
