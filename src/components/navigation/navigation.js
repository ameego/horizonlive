import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import style from "./navigation.module.scss"

const flatNavigation = (link, index) => (
  <li key={link.name} className={style.navigation__item}>
    <Link
      className={style.navigation__item}
      to={link.link}
      partiallyActive={index !== 0 ? true : false}
      activeClassName={style.active}
    >
      {link.name}
    </Link>
  </li>
)

const nestedNavigation = (link, index) => (
  <li key={link.name} className={style.navigation__item}>
    <div className={style.navigation__item}>
      <Link
        className={(style.navigation__item, style.navigation__disabled)}
        to={link.link}
        partiallyActive={index !== 0 ? true : false}
        activeClassName={style.active}
      >
        {link.name}
      </Link>
      <div className={style.subnavigation}>
        {link.submenu.map((item, index) => {
          return (
            <div key={index}>
              <Link
                to={item.link}
                partiallyActive={index !== 0 ? true : false}
                activeClassName={style.active}
              >
                {item.name}
              </Link>
            </div>
          )
        })}
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
