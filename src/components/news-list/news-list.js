import React from "react"
import style from "./news-list.module.scss"

const NewsList = ({ data }) => {
  return (
    <ul className={style.newlist}>
      {data.map((news, index) => (
        <li className={style.newslist__item} key={index}>
          <h1>{news.node.title}</h1>
          <p>{news.node.artist}</p>
        </li>
      ))}
    </ul>
  )
}

export default NewsList
