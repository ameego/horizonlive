import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FluidImg from "../fluid-img/fluid-img"
import style from "./image-banner.module.scss"
import Utils from "../../utils/utils"

const ImageBanner = ({ src, isFixed }) => {
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

  var className = isFixed ? `${style.banner} ${style.isFixed}` : style.banner

  var commonNode = data.common.nodes.length > 0 ? data.common.nodes[0] : null
  src = !src && commonNode
    ? Utils.getCurrentImage(data.homeBanner.nodes, commonNode.banner)
    : src

  return (
    <div className={className}>
      <div className={style.banner__img}>
        <FluidImg src={src} />
      </div>
    </div>
  )
}

export default ImageBanner
