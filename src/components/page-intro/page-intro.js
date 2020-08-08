import React from "react"
import Title from "../title/title"
import Subtitle from "../subtitle/subtitle"
import style from "./page-intro.module.scss"

const PageIntro = ({ title, subtitle, children }) => (
  <div className={style.container} style={{ width: "60%" }}>
    <Title text={title} />
    {children}
    <Subtitle text={subtitle} />
  </div>
)

export default PageIntro
