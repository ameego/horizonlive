import React from "react"
import style from "./photo-gallery.module.scss"
import FluidImg from "../fluid-img/fluid-img"

const PhotoGallery = ({ data }) => (
  <div>
    <ul className={style.photogallery}>
      {data.galleryImages
        ? data.galleryImages.map((item, index) => {
            return (
              <li key={index}>
                <FluidImg data={item.image} />
              </li>
            )
          })
        : null}
    </ul>
  </div>
)

export default PhotoGallery
