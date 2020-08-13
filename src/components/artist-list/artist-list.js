import React from "react"
import { Link, StaticQuery } from "gatsby"
import style from "./artist-list.module.scss"
import FluidImg from "../fluid-img/fluid-img"
import Title3 from "../titles/title-3/title-3"
import Tags from "../tags/tags"
import Utils from "../../utils/utils"

const ArtistList = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ArtistBanner {
        allFile(filter: { sourceInstanceName: { eq: "artistsBanner" } }) {
          nodes {
            childImageSharp {
              ...ArtistBannerImage
            }
          }
        }
      }
    `}
    render={bannerSet => (
      <ul className={style.list}>
        {data.map((artist, index) => (
          <li className={style.list__item} key={index}>
            <Link to={`../../artists/${artist.slug}`}>
              <FluidImg
                src={Utils.getCurrentImage(
                  bannerSet.allFile.nodes,
                  artist.banner
                )}
              />
              <div className={style.list__information}>
                <Title3 text={artist.artistName} />
                <Tags data={artist.category} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    )}
  />
)

export default ArtistList
