import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "../navigation/navigation"
import style from "./header.module.scss"

const Header = ({ siteTitle }) => {
  return (
    <>
      <header id="nav-container" className={style.header}>
        <div>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <Navigation />
        </div>
      </header>
      <div id="nav-container-top"></div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
