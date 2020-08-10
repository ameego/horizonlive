import React from "react"
import style from "./news-list.module.scss"

const NewsList = ({ data }) => {
  return (
    <ul className={style.newslist}>
      {data.map((news, index) => (
        <li className={style.newslist__item} key={index}>
          <h1>{news.title}</h1>
          <p>{news.artist}</p>
          <p>{news.date}</p>
        </li>
      ))}
    </ul>
  )
}

export default NewsList
