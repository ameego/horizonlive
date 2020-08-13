import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Header from "../header/header"
import style from "./layout.module.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMeta {
        site {
          siteMetadata {
            title
            menuLinks {
              link
              name
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <div className={style.layout}>{children}</div>
      </>
    )}
  />
)

export default Layout
