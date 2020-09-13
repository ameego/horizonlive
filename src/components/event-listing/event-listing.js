import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import style from "./event-listing.module.scss"
import PageIntro from "../page-intro/page-intro"

function formatDay(day) {
  return day.length > 1 ? day : `0${day}`
}

const EventListing = ({ data, isArtistNameHidden }) => {
  const artistData = useStaticQuery(graphql`
    query EventListingQuery {
      allArtistsJson: allArtistsJson {
        edges {
          node {
            slug
            artistName
          }
        }
      }
    }
  `)

  const getArtistSlug = artistName => {
    return artistData.allArtistsJson.edges.find(
      x => artistName === x.node.artistName
    ).node.slug
  }

  return (
    <div>
      <PageIntro title="Agenda" isSmaller={true} lessBottomSpace={true} />
      <div className={style.scrollingbox}>
        <ul className={style.eventlisting}>
          {data.nodes.map((date, index) => (
            <li key={index} className={style.eventlisting__container}>
              <div className={style.eventlisting__date}>
                <div className={style.eventlisting__date1}>
                  {formatDay(date.eventdate.split("/")[0])}
                </div>
                <div className={style.eventlisting__date2}>
                  <span>{date.eventdate.split("/")[1]}</span>
                  <span>{date.eventdate.split("/")[2]}</span>
                </div>
              </div>
              <div className={style.eventlisting__information}>
                {!isArtistNameHidden ? (
                  <p className={style.eventlisting__title}>{date.evenement}</p>
                ) : (
                  <>
                    <p className={style.eventlisting__title}>
                      <Link to={`/artistes/${getArtistSlug(date.category)}`}>
                        {date.category}
                      </Link>
                    </p>
                    <p className={style.eventlisting__subtitle}>
                      {date.evenement}
                    </p>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EventListing
