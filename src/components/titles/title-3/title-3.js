import React from "react"
import style from "./title.module.scss"

const Title = ({ text }) => {
  return <h4 className={style.title}>{text}</h4>
}

export default Title
