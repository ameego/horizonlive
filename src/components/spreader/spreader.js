import React from "react"
import style from "./spreader.module.scss"

const Spreader = ({ children }) => (
  <div className={style.spreader}>{children}</div>
)

export default Spreader
