import React from "react"
import style from "./subtitle.module.scss"

const Title = ({ text }) => {
  return <h3 className={style.subtitle}>{text}</h3>
}

export default Title
