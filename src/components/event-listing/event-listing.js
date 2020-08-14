import React from "react"
import style from "./event-listing.module.scss"
import Title from "../titles/title-1/title-1"

const EventListing = ({ data, isArtistNameProminent }) => {
  return (
    <div>
      <Title text="Agenda" isSmaller />
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
                {isArtistNameProminent ? date.category : date.evenement}
              </p>
              <p className={style.eventlisting__subtitle}>
                {isArtistNameProminent ? date.evenement : date.category}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventListing
