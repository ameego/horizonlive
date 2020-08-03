import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import ArtistList from "../components/artist-list/artist-list"

export const Home = () => {
  const data = useStaticQuery(graphql`
    query ArtistQuery {
      allArtistsJson {
        edges {
          node {
            ...ArtistsFragment
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ArtistList data={data} />
    </Layout>
  )
}

export default Home
