import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import Navigation from "../navigation/navigation"
import style from "./header.module.scss"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Headroom disableInlineStyles>
        <header
          id="nav-container"
          className={
            isMenuOpen
              ? `${style.header} openMenu`
              : `${style.header} closeMenu`
          }
        >
          <div>
            <h1>
              <Link to="/">{siteTitle}</Link>
            </h1>
            <div className={style.container}>
              <button onClick={toggleMenu}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  data-tags="menu"
                  className={style.openMenuIcon}
                >
                  <g transform="scale(0.01953125 0.01953125)">
                    <path d="M0 153.6h1024v102.4h-1024v-102.4zM0 460.8h1024v102.4h-1024v-102.4zM0 768h1024v102.4h-1024v-102.4z" />
                  </g>
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  data-tags="close"
                  className={style.closeMenuIcon}
                >
                  <g transform="scale(0.01953125 0.01953125)">
                    <path d="M512 439.603l-362.035-362.035-72.397 72.397 362.035 362.035-362.035 362.035 72.397 72.397 362.035-362.035 362.035 362.035 72.397-72.397-362.035-362.035 362.035-362.035-72.397-72.397-362.035 362.035z" />
                  </g>
                </svg>
              </button>
              <Navigation />
            </div>
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
