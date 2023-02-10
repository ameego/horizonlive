import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import style from "./photo-gallery.module.scss"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import PageIntro from "../page-intro/page-intro"

const PhotoGallery = ({ data, artistData }) => {
  var formattedData = data.map(item => {
    var caption = artistData.nodes[0].galleryImages.find(x => {
      var srcPath = x.image.split("/")
      var src = srcPath[srcPath.length - 1]

      return src === item.childImageSharp.full.originalName
    })

    if(caption) {
      const img = caption.image.split("/");
      const currentImg = img[img.length - 1];

      if(currentImg === item.childImageSharp.full.originalName) {
        return {
          title: caption ? caption.altText : "",
          alt: caption ? caption.altText : "",
          full: item.childImageSharp.full,
          thumb: item.childImageSharp.thumb,
        }
      }
    }
  })

  var filtered = formattedData.filter(function(x) {
    return x !== undefined;
  });

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
            <Gallery images={filtered} />
          </div>
        </>
      ) : null}
    </>
  )
}

export default PhotoGallery
