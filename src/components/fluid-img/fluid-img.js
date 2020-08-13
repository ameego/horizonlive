import React from "react"
import Img from "gatsby-image"

const FluidImg = ({ src, loading, durationFadeIn }) => (
  <Img
    durationFadeIn={durationFadeIn ? durationFadeIn : 1500}
    loading={loading ? loading : "lazy"}
    fluid={src}
  />
)

export default FluidImg
