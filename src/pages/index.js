import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import ArtistList from "../components/artist-list/artist-list"

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
    }
  `)
  console.log(data)
  return (
    <Layout>
      <ArtistList data={data} />
    </Layout>
  )
}

export default Home
