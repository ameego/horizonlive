import React from "react"
import FluidImg from "../fluid-img/fluid-img"
import style from "./image-banner.module.scss"

const ImageBanner = ({ data }) => (
  <div className={style.banner}>
    <div className={style.banner__img}>
      <FluidImg durationFadeIn={5000} loading="eager" data={data} />
    </div>
  </div>
)

export default ImageBanner
