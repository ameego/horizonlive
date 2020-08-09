import React from "react"
import style from "./title.module.scss"

const Title = ({ text, isSmaller }) => {
  let titleClass = isSmaller ? `${style.title} ${style.smaller}` : style.title
  return <h4 className={titleClass}>{text}</h4>
}

export default Title
