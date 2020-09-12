import React from "react"
import { Link } from "gatsby"
import Title from "../titles/title-1/title-1"
import Subtitle from "../titles/title-2/title-2"
import style from "./page-intro.module.scss"

const PageIntro = ({
  title,
  subtitle,
  isSmaller,
  lessBottomSpace,
  children,
  link,
}) => {
  let pageIntroClass = lessBottomSpace
    ? `${style.container} ${style.less_spacing}`
    : style.container

  pageIntroClass += isSmaller ? ` ${style.smaller}` : " "

  return (
    <div className={pageIntroClass}>
      {children}
      {link ? (
        <Link to={link}>
          <Title isSmaller={isSmaller} text={title} />
        </Link>
      ) : (
        <Title isSmaller={isSmaller} text={title} />
      )}
      {subtitle ? <Subtitle isSmaller={isSmaller} text={subtitle} /> : null}
    </div>
  )
}

export default PageIntro
