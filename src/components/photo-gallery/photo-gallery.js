import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import "./photo-gallery.module.scss"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

const PhotoGallery = ({ data }) => {
  var formattedData = data.map(item => {
    return {
      full: item.childImageSharp.full,
      thumb: item.childImageSharp.thumb,
    }
  })

  return <Gallery images={formattedData} />
}

export default PhotoGallery
