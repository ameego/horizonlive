import React from "react"
import style from "./page-intro.module.scss"

const PageIntro = ({ title, subtitle, children }) => (
  <div className={style.container} style={{ width: "60%" }}>
    <h2 className={style.title}>{title}</h2>
    {children}
    <h3 className={style.subtitle}>{subtitle}</h3>
  </div>
)

export default PageIntro
