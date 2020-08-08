import React from "react"
import style from "./title.module.scss"

const Title = ({ text }) => {
  return <h2 className={style.title}>{text}</h2>
}

export default Title
