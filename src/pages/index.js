import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export const PureHome = ({
  data: {
    allArtistsJson: { edges },
  },
}) => (
  <>
    {edges.map((artist, index) => (
      <p key={index}>
        <Link to={artist.node.slug}>{artist.node.artistName}</Link>
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

  return <PureHome data={data} />
}

export default Home
