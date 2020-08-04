import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"
import Header from "../header/header.js"
import style from "./layout.module.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMeta {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={"title"}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&amp;display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <div className={style.layout}>{children}</div>
      </React.Fragment>
    )}
  />
)

export default Layout
