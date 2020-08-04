import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "../navigation/navigation"
import style from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
