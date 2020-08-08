import React from "react"
import Title from "../titles/title-1/title-1"
import Subtitle from "../titles/title-2/title-2"
import style from "./page-intro.module.scss"

const PageIntro = ({ title, subtitle, children }) => (
  <div className={style.container} style={{ width: "60%" }}>
    <Title text={title} />
    {children}
    <Subtitle text={subtitle} />
  </div>
)

export default PageIntro
