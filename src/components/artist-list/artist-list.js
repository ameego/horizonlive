import React from "react"
import { Link, useStaticQuery } from "gatsby"

const PureArtistList = ({
  data: {
    allArtistsJson: { edges },
  },
}) => (
  <ul>
    {edges.map((artist, index) => (
      <p key={index}>
        <Link to={`artists/${artist.node.slug}`}>{artist.node.artistName}</Link>
      </p>
    ))}
  </ul>
)

export const ArtistList = () => {
  const data = useStaticQuery(graphql`
    query Test {
      allArtistsJson {
        edges {
          node {
            ...ArtistsFragment
          }
        }
      }
    }
  `)
  return <PureArtistList data={data} />
}

export default ArtistList
