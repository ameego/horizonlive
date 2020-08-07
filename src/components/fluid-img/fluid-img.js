import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Utils from "../../utils/utils"

const FluidImg = ({ data, loading }) => (
  <StaticQuery
    query={graphql`
      query AllImagesQuery {
        allImageContent: allImageSharp {
          edges {
            node {
              ...ArtistFluid
            }
          }
        }
      }
    `}
    render={gqlData => (
      <>
        <Img
          loading={loading ? loading : "lazy"}
          fluid={Utils.getCurrentImage(gqlData.allImageContent, data)}
        />
      </>
    )}
  />
)

export default FluidImg
