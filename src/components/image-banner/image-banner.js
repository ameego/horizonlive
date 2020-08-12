import React from "react"
import FluidImg from "../fluid-img/fluid-img"
import style from "./image-banner.module.scss"

const ImageBanner = ({ imageToDisplay, imageSources }) => (
  <div className={style.banner}>
    <div className={style.banner__img}>
      <FluidImg
        durationFadeIn={1000}
        imageToDisplay={imageToDisplay}
        imageSources={imageSources}
      />
    </div>
  </div>
)

export default ImageBanner
