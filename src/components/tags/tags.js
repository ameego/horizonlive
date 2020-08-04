import React from "react"
import style from "./tags.module.scss"

const Tags = ({ data }) => (
  <ul className={style.tags}>
    {data.map((category, index) => (
      <li key={index}>{category}</li>
    ))}
  </ul>
)

export default Tags
