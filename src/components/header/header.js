import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "../navigation/navigation"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, flex: 1, fontSize: 18 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
