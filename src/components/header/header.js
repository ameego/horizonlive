import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import Navigation from "../navigation/navigation"
import style from "./header.module.scss"

const Header = ({ siteTitle }) => {
  return (
    <>
      <Headroom disableInlineStyles>
        <header id="nav-container" className={style.header}>
          <div>
            <h1>
              <Link to="/">{siteTitle}</Link>
            </h1>
            <Navigation />
          </div>
        </header>
      </Headroom>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
