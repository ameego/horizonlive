import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout/layout.js"

export const PureHome = ({
  data: {
    allArtistsJson: { edges },
  },
}) => (
  <>
    {edges.map((artist, index) => (
      <p key={index}>
        <Link to={`artists/${artist.node.slug}`}>{artist.node.artistName}</Link>
      </p>
    ))}
  </>
)

export const Home = () => {
  const data = useStaticQuery(graphql`
    query Test {
      allArtistsJson {
        edges {
          node {
            slug
            artistName
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <PureHome data={data} />
    </Layout>
  )
}

export default Home
