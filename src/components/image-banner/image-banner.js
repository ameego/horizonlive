import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FluidImg from "../fluid-img/fluid-img"
import style from "./image-banner.module.scss"

const ImageBanner = ({ src, isAbsolute }) => {
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
    }
  `)

  src = !src ? data.homeBanner.nodes[0].childImageSharp.fluid : src

  return (
    <div
      className={style.banner}
      style={{ position: isAbsolute ? "absolute" : "fixed" }}
    >
      <div className={style.banner__img}>
        <FluidImg durationFadeIn={1000} src={src} />
      </div>
    </div>
  )
}

export default ImageBanner
