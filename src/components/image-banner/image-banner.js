import React from "react"
import Img from "gatsby-image"
import style from "./image-banner.module.scss"

const ImageBanner = ({ data }) => (
  <div className={style.banner}>
    <div className={style.banner__img}>
      <Img fluid={data} />
    </div>
  </div>
)

export default ImageBanner
