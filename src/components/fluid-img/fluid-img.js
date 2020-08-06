import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Utils from "../../utils/utils"

const FluidImg = ({ data }) => (
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
        <Img fluid={Utils.getCurrentImage(gqlData.allImageContent, data)} />
      </>
    )}
  />
)

export default FluidImg
