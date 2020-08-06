import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ImageBanner from "../components/image-banner/image-banner"
import Tags from "../components/tags/tags"
import EventListing from "../components/event-listing/event-listing"
import PhotoGallery from "../components/photo-gallery/photo-gallery"
import Quote from "../components/quote/quote"
import marked from "marked"

function rawMarkup(data) {
  let rawMarkup = marked(data)
  return { __html: rawMarkup }
}

export default function Template({ data }) {
  const { artistData, agendaData } = data

  return (
    <>
      <ImageBanner data={artistData.edges[0].node.banner} />
      <Layout>
        <div>
          <div className="formatted-content" style={{ width: "60%" }}>
            <div className="formatted-content__introduction">
              <h2 className="title-1">{artistData.edges[0].node.artistName}</h2>
              <Tags data={artistData.edges[0].node.category} />
              <h3>{artistData.edges[0].node.introduction}</h3>
            </div>
          </div>
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
              <EventListing data={agendaData} />
            </div>
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
