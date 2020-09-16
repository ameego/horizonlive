import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import style from "./navigation.module.scss"

const flatNavigation = (link, index) => (
  <li
    key={link.name}
    className={style.navigation__item}
    data-testid={link.data_testid}
  >
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
            <div key={index} data-testid={item.data_testid}>
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

export default function Navigation() {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              menuLinks {
                name
                link
                data_testid
                submenu {
                  name
                  link
                  data_testid
                }
              }
            }
          }
        }
      `}
      render={data => (
        <nav className={style.nav}>
          <ul className={style.ul}>
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
}
