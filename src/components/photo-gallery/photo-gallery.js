import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import style from "./photo-gallery.module.scss"
import PageIntro from "../page-intro/page-intro"

const PhotoGallery = ({ data, artistData }) => {
  var galleryImages = artistData.nodes[0] && artistData.nodes[0].galleryImages
    ? artistData.nodes[0].galleryImages
    : []

  var formattedData = data.map(item => {
    // Match the file to its CMS caption entry using File.base (filename with extension)
    var caption = galleryImages.find(x => {
      if (!x.image) return false
      var srcPath = x.image.split("/")
      var src = srcPath[srcPath.length - 1]
      return src === item.base
    })

    if (caption && item.childImageSharp) {
      return {
        title: caption.altText || "",
        alt: caption.altText || "",
        full: item.childImageSharp.full,
        thumb: item.childImageSharp.thumb,
      }
    }
  })

  var filtered = formattedData.filter(x => x !== undefined)

  return (
    <>
      {filtered.length > 0 ? (
        <>
          <PageIntro
            title="Galerie photo"
            isSmaller={true}
            lessBottomSpace={true}
          />
          <div className={style.photogallery}>
            <Gallery images={filtered} />
          </div>
        </>
      ) : null}
    </>
  )
}

export default PhotoGallery
