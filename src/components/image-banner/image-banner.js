import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FluidImg from "../fluid-img/fluid-img"
import style from "./image-banner.module.scss"
import Utils from "../../utils/utils"

const ImageBanner = ({ src }) => {
  const data = useStaticQuery(graphql`
    query ImageBannerQuery {
      homeBanner: allFile(
        filter: { sourceInstanceName: { eq: "commonBanner" } }
      ) {
        nodes {
          childImageSharp {
            ...CommonFragment
          }
        }
      }
      common: allCommonJson {
        nodes {
          banner
        }
      }
    }
  `)


  src = !src
    ? Utils.getCurrentImage(data.homeBanner.nodes, data.common.nodes[0].banner)
    : src

  return (
    <div className={style.banner}>
      <div className={style.banner__img}>
        <FluidImg durationFadeIn={1000} src={src} />
      </div>
    </div>
  )
}

export default ImageBanner
