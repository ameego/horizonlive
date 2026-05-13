import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname }) => {
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: pathname ? `${siteUrl}${pathname}` : siteUrl,
  }

  const fullTitle = titleTemplate
    ? titleTemplate.replace("%s", seo.title)
    : seo.title

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
        rel="stylesheet"
      />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`
