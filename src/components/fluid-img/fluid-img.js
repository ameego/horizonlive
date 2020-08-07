import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Utils from "../../utils/utils"

const FluidImg = ({ data, loading, durationFadeIn }) => (
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
          durationFadeIn={durationFadeIn ? durationFadeIn : 1500}
          loading={loading ? loading : "lazy"}
          fluid={Utils.getCurrentImage(gqlData.allImageContent, data)}
        />
      </>
    )}
  />
)

export default FluidImg
