import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export const PureHome = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => (
  <>
    {nodes.map((artist, index) => (
      <p key={index}>
        <Link to={artist.frontmatter.slug}>
          {artist.frontmatter.artistName}
        </Link>
      </p>
    ))}
  </>
)

export const Home = () => {
  const data = useStaticQuery(graphql`
    query Test {
      allMarkdownRemark {
        nodes {
          frontmatter {
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
