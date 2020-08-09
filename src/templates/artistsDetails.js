import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo/seo"
import Tags from "../components/tags/tags"
import Quote from "../components/quote/quote"
import Layout from "../components/layout/layout"
import PageIntro from "../components/page-intro/page-intro"
import EventListing from "../components/event-listing/event-listing"
import PhotoGallery from "../components/photo-gallery/photo-gallery"
import ImageBanner from "../components/image-banner/image-banner"
import marked from "marked"

function rawMarkup(data) {
  let rawMarkup = marked(data)
  return { __html: rawMarkup }
}

export default function Template({ data }) {
  const { artistData, agendaData } = data

  return (
    <>
      <SEO />
      <ImageBanner data={artistData.edges[0].node.banner} />
      <Layout>
        <PageIntro
          title={artistData.edges[0].node.artistName}
          subtitle={artistData.edges[0].node.introduction}
          children={<Tags data={artistData.edges[0].node.category} />}
        />
        <div className="something">
          <div className="formatted-content">
            <div
              dangerouslySetInnerHTML={rawMarkup(
                artistData.edges[0].node.biography
              )}
            />
            <PhotoGallery
              data={{
                galleryImages: artistData.edges[0].node.galleryImages,
              }}
            />
          </div>
          <div className="sidebar">
            <Quote
              data={{
                quoteImage: artistData.edges[0].node.citation.quoteImage,
                quoteData: artistData.edges[0].node.citation.quote,
              }}
            />
            {agendaData ? <EventListing data={agendaData} /> : null}
          </div>
        </div>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!, $artistName: String!) {
    artistData: allArtistsJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          ...ArtistsFragment
        }
      }
    }
    agendaData: allAgendaJson(filter: { category: { eq: $artistName } }) {
      edges {
        node {
          ...AgendaFragment
        }
      }
    }
  }
`
