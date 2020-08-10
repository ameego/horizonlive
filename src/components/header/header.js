import React, { useEffect } from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "../navigation/navigation"
import style from "./header.module.scss"

const Header = ({ siteTitle }) => {
  // useEffect(() => {
  //   var observer = new IntersectionObserver(
  //     function (entries) {
  //       // no intersection with screen
  //       if (entries[0].intersectionRatio === 0)
  //         document
  //           .querySelector("#nav-container")
  //           .classList.add("nav-container-sticky")
  //       // fully intersects with screen
  //       else if (entries[0].intersectionRatio === 1)
  //         document
  //           .querySelector("#nav-container")
  //           .classList.remove("nav-container-sticky")
  //     },
  //     { threshold: [0, 1] }
  //   )

  //   observer.observe(document.querySelector("#nav-container-top"))
  // })

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
