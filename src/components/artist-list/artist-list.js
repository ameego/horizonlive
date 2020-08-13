import React from "react"
import { Link } from "gatsby"
import style from "./artist-list.module.scss"
import FluidImg from "../fluid-img/fluid-img"
import Title3 from "../titles/title-3/title-3"
import Tags from "../tags/tags"
import Utils from "../../utils/utils"

const ArtistList = ({ data, banners }) => {
  return (
    <ul className={style.list}>
      {data.map((artist, index) => (
        <li className={style.list__item} key={index}>
          <Link to={`../../artists/${artist.slug}`}>
            <FluidImg
              src={Utils.getCurrentImage(banners.nodes, artist.banner)}
            />
            <div className={style.list__information}>
              <Title3 text={artist.artistName} />
              <Tags data={artist.category} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ArtistList
