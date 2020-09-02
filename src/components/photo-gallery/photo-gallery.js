import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import style from "./photo-gallery.module.scss"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import Title from "../titles/title-1/title-1"

const PhotoGallery = ({ data }) => {
  var formattedData = data.map(item => {
    return {
      full: item.childImageSharp.full,
      thumb: item.childImageSharp.thumb,
    }
  })

  return (
    <>
      {data.length > 0 ? (
        <>
          <Title text="Galerie photo" isSmaller />
          <div className={style.photogallery}>
            <Gallery images={formattedData} />
          </div>
        </>
      ) : null}
    </>
  )
}

export default PhotoGallery
