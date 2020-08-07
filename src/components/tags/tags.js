import React from "react"
import style from "./tags.module.scss"

const Tags = ({ data, isCentered }) => {
  var classNames = isCentered
    ? `${style.tags} justify-content--centered`
    : style.tags
  return (
    <ul className={classNames}>
      {data.map((category, index) => (
        <li className={category} key={index}>
          {category}
        </li>
      ))}
    </ul>
  )
}

export default Tags
