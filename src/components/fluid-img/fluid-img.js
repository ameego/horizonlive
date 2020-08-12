import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Utils from "../../utils/utils"

const FluidImg = ({
  imageSources,
  imageToDisplay,
  loading,
  durationFadeIn,
}) => (
  <>
    <Img
      durationFadeIn={durationFadeIn ? durationFadeIn : 1500}
      loading={loading ? loading : "lazy"}
      fluid={Utils.getCurrentImage(imageSources, imageToDisplay)}
    />
  </>
)

export default FluidImg
