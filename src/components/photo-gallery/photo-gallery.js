import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import style from "./photo-gallery.module.scss"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import PageIntro from "../page-intro/page-intro"

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
          <PageIntro
            title="Galerie photo"
            isSmaller={true}
            lessBottomSpace={true}
          />
          <div className={style.photogallery}>
            <Gallery images={formattedData} />
          </div>
        </>
      ) : null}
    </>
  )
}

export default PhotoGallery
