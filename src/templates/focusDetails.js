import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import PageIntro from "../components/page-intro/page-intro"
import ImageBanner from "../components/image-banner/image-banner"
import ArtistList from "../components/artist-list/artist-list"

export default function Template({ data, pageContext }) {
  const currentData = data.allActivityPageJson.nodes[0][pageContext.url]
  return (
    <>
      <SEO />
      <ImageBanner isFixed />
      <Layout>
        <PageIntro title={currentData.title} subtitle={currentData.subtitle} />
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
