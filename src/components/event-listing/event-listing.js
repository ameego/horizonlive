import React from "react"
import style from "./event-listing.module.scss"
import Title from "../titles/title-1/title-1"

function formatDay(day) {
  return day.length > 1 ? day : `0${day}`
}

const EventListing = ({ data, isArtistNameHidden }) => {
  return (
    <div>
      <Title text="Agenda" isSmaller />
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
              {isArtistNameHidden ? (
                <p className={style.eventlisting__title}>{date.evenement}</p>
              ) : (
                <>
                  <p className={style.eventlisting__title}>{date.category}</p>
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
  )
}

export default EventListing
