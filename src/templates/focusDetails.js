import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import PageIntro from "../components/page-intro/page-intro"
import ImageBanner from "../components/image-banner/image-banner"
import ArtistList from "../components/artist-list/artist-list"

export default function Template({ data, pageContext }) {
  var activityNode = data.allActivityPageJson.nodes[0]
  var currentData = activityNode && pageContext.url ? activityNode[pageContext.url] : null
  return (
    <>
      <SEO />
      <ImageBanner isFixed />
      <Layout>
        <PageIntro
          title={currentData ? currentData.title : null}
          subtitle={currentData ? currentData.subtitle : null}
        />
        <ArtistList data={data.artistData.nodes} />
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    artistData: allArtistsJson(filter: { category: { eq: $slug } }) {
      nodes {
        ...ArtistsFragment
      }
    }
    allActivityPageJson {
      nodes {
        label {
          subtitle
          title
        }
        live {
          subtitle
          title
        }
        management {
          title
          subtitle
        }
        publishing {
          subtitle
          title
        }
      }
    }
  }
`
