import React from "react"
import style from "./event-listing.module.scss"
import moment from "moment"

function splitDate(date) {
  return moment(date, "MMMM-DD-YYYY").format("DD/MMM/YY").split("/")
}

function displayPrimaryInfo(date, isArtistNameProminent) {
  return isArtistNameProminent ? date.node.category : date.node.evenement
}

function displaySecondaryInfo(date, isArtistNameProminent) {
  return isArtistNameProminent ? date.node.evenement : date.node.category
}

const EventListing = ({ data, isArtistNameProminent }) => {
  return (
    <div>
      <ul className={style.eventlisting}>
        {data.edges.map((date, index) => (
          <li key={index} className={style.eventlisting__container}>
            <div className={style.eventlisting__date}>
              <div className={style.eventlisting__date1}>
                {splitDate(date.node.eventdate)[0]}
              </div>
              <div className={style.eventlisting__date2}>
                {splitDate(date.node.eventdate)[1]}{" "}
                {splitDate(date.node.eventdate)[2]}
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
