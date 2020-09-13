import React from "react"
import Img from "gatsby-image"

const FluidImg = ({ src, loading, durationFadeIn }) => (
  <>
    {src ? (
      <Img
        durationFadeIn={durationFadeIn ? durationFadeIn : 500}
        loading={loading ? loading : "lazy"}
        fluid={src}
      />
    ) : null}
  </>
)

export default FluidImg
