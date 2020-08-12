import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import style from "./photo-gallery.module.scss"
import FluidImg from "../fluid-img/fluid-img"

const PhotoGallery = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query ImagesForGallery {
          images: allImageSharp {
            nodes {
              ...ArtistGalleryFluid
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <div>
              <Gallery images={data.images.nodes} />
            </div>
          </>
        )
      }}
    />
  )
}

export default PhotoGallery
