import React from "react"
import style from "./news-list.module.scss"

const NewsList = ({ data }) => {
  return (
    <ul className={style.newlist}>
      {data.map((news, index) => (
        <li className={style.newslist__item} key={index}>
          <p>{news.node.title}</p>
          <p>{news.node.text}</p>
        </li>
      ))}
    </ul>
  )
}

export default NewsList
