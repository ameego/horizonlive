import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import PageIntro from "../components/page-intro/page-intro"
import ImageBanner from "../components/image-banner/image-banner"
import marked from "marked"

function rawMarkup(data) {
  let rawMarkup = marked(data)
  return { __html: rawMarkup }
}

export const Contacts = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
      allContactPageJson {
        nodes {
          subtitle
          text
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <ImageBanner isFixed />
      <Layout>
        <PageIntro
          title={data.allContactPageJson.nodes[0].title}
          subtitle={data.allContactPageJson.nodes[0].subtitle}
        />
        <div className="formatted-content formatted-content-2">
          <div
            dangerouslySetInnerHTML={rawMarkup(
              data.allContactPageJson.nodes[0].text
            )}
          />
        </div>
      </Layout>
    </>
  )
}

export default Contacts
