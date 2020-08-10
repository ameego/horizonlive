import React from "react"
import style from "./event-listing.module.scss"

function displayPrimaryInfo(date, isArtistNameProminent) {
  return isArtistNameProminent ? date.category : date.evenement
}

function displaySecondaryInfo(date, isArtistNameProminent) {
  return isArtistNameProminent ? date.evenement : date.category
}

const EventListing = ({ data, isArtistNameProminent }) => {
  return (
    <div>
      <ul className={style.eventlisting}>
        {data.nodes.map((date, index) => (
          <li key={index} className={style.eventlisting__container}>
            <div className={style.eventlisting__date}>
              <div className={style.eventlisting__date1}>
                {date.eventdate.split("/")[0]}
              </div>
              <div className={style.eventlisting__date2}>
                <span>{date.eventdate.split("/")[1]}</span>
                <span>{date.eventdate.split("/")[2]}</span>
              </div>
            </div>
            <div className={style.eventlisting__information}>
              <p className={style.eventlisting__title}>
                {displayPrimaryInfo(date, isArtistNameProminent)}
              </p>
              <p className={style.eventlisting__subtitle}>
                {displaySecondaryInfo(date, isArtistNameProminent)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventListing
