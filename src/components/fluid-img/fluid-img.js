import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FluidImg = ({ src, loading, durationFadeIn }) => {
  const image = src ? getImage(src) : null
  return image ? (
    <GatsbyImage
      image={image}
      alt=""
      loading={loading || "lazy"}
    />
  ) : null
}

export default FluidImg
