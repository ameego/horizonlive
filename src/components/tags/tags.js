import React from "react"
import style from "./tags.module.scss"

const Tags = ({ data, isCentered, isPlain }) => {
  var classNames = isCentered
    ? `${style.tags} justify-content--centered`
    : style.tags

  classNames = isPlain ? `${classNames} ${style.plain}` : classNames

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
