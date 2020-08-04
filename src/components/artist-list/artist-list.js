import React from "react"
import { Link } from "gatsby"
import style from "./artist-list.module.scss"

const ArtistList = ({
  data: {
    allArtistsJson: { edges },
  },
}) => (
  <ul className={style.list}>
    {edges.map((artist, index) => (
      <li className={style.list__item} key={index}>
        <Link to={`../artists/${artist.node.slug}`}>
          <h2 className={style.title}>{artist.node.artistName}</h2>
          <div className={style.tag_container}>
            {artist.node.category.map((category, index) => (
              <span key={index}>{category}</span>
            ))}
          </div>
        </Link>
      </li>
    ))}
  </ul>
)

export default ArtistList
