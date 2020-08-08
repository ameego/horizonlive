import React from "react"
import Title from "../title/title"
import style from "./page-intro.module.scss"

const PageIntro = ({ title, subtitle, children }) => (
  <div className={style.container} style={{ width: "60%" }}>
    <Title text={title} />
    {children}
    <h3 className={style.subtitle}>{subtitle}</h3>
  </div>
)

export default PageIntro
