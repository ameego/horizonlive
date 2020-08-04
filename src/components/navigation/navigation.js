import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import style from "./navigation.module.scss"

function isNavActive() {
  // let path = window.location.pathname
  // return (
  //   path === "/live" ||
  //   path === "/label" ||
  //   path === "/publishing" ||
  //   path === "/management"
  // )
}

const flatNavigation = (link, index) => (
  <li
    key={link.name}
    style={{
      listStyleType: `none`,
      padding: `1rem`,
    }}
  >
    <Link
      className={style.navigation__item}
      style={{ color: `white` }}
      to={link.link}
      partiallyActive={index !== 0 ? true : false}
      activeStyle={{ color: "tomato" }}
    >
      {link.name}
    </Link>
  </li>
)

const nestedNavigation = (link, index) => (
  <li
    key={link.name}
    style={{
      listStyleType: `none`,
      padding: `1rem`,
    }}
  >
    <div>
      <div
        className={
          isNavActive()
            ? `${style.navigation__item} active`
            : style.navigation__item
        }
      >
        {link.name}
        <div className={style.subnavigation}>
          {link.submenu.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  style={{ color: `white` }}
                  to={item.link}
                  partiallyActive={index !== 0 ? true : false}
                  activeStyle={{ color: "tomato" }}
                >
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </li>
)

const Navigation = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
              submenu {
                name
                link
              }
            }
          }
        }
      }
    `}
    render={data => (
      <nav>
        <ul style={{ display: "flex", flex: 1 }}>
          {data.site.siteMetadata.menuLinks.map((link, index) => {
            const containsSubMenu = !!link.submenu

            return !containsSubMenu
              ? flatNavigation(link, index)
              : nestedNavigation(link, index)
          })}
        </ul>
      </nav>
    )}
  />
)

export default Navigation
