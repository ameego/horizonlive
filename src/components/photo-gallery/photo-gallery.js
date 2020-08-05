import React from "react"
import Img from "gatsby-image"
import style from "./photo-gallery.module.scss"
import Utils from "../../utils/utils"

const PhotoGallery = ({ data }) => (
  <div>
    <ul className={style.photogallery}>
      {data.galleryImages
        ? data.galleryImages.map((item, index) => {
            return (
              <li key={index}>
                <Img
                  fluid={Utils.getCurrentImage(
                    data.allImageContent,
                    item.image
                  )}
                />
              </li>
            )
          })
        : null}
    </ul>
  </div>
)

export default PhotoGallery
