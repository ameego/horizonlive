import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import style from "./event-listing.module.scss"
import PageIntro from "../page-intro/page-intro"

function formatDay(day) {
  return day.length > 1 ? day : `0${day}`
}

const EventListing = ({ data, isArtistNameHidden, isScrollable, title }) => {
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
    var match = artistData.allArtistsJson.edges.find(
      x => artistName === x.node.artistName
    )
    return match ? match.node.slug : null
  }

  var eventClassName = isScrollable ? style.scrollingbox : ""

  return (
    <div>
      <PageIntro title={title} isSmaller={true} lessBottomSpace={true} />
      <div className={eventClassName}>
        <ul className={style.eventlisting}>
          {data.nodes.map((date, index) => {
            var dateParts = date.eventdate ? date.eventdate.split("/") : []
            var slug = date.category ? getArtistSlug(date.category) : null
            return (
            <li key={index} className={style.eventlisting__container}>
              <div className={style.eventlisting__date}>
                <div className={style.eventlisting__date1}>
                  {dateParts[0] ? formatDay(dateParts[0]) : null}
                </div>
                <div className={style.eventlisting__date2}>
                  <span>{dateParts[1]}</span>
                  <span>{dateParts[2]}</span>
                </div>
              </div>
              <div className={style.eventlisting__information}>
                {!isArtistNameHidden ? (
                  <p className={style.eventlisting__title}>{date.evenement}</p>
                ) : (
                  <>
                    <p className={style.eventlisting__title}>
                      {slug ? (
                        <Link to={`/artistes/${slug}`}>
                          {date.category}
                        </Link>
                      ) : date.category}
                    </p>
                    <p className={style.eventlisting__subtitle}>
                      {date.evenement}
                    </p>
                  </>
                )}
              </div>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default EventListing
