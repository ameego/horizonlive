import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import ImageBanner from "../components/image-banner/image-banner"
import Tags from "../components/tags/tags"
import EventListing from "../components/event-listing/event-listing"
import PhotoGallery from "../components/photo-gallery/photo-gallery"
import marked from "marked"

function rawMarkup(data) {
  let rawMarkup = marked(data)
  return { __html: rawMarkup }
}

export default function Template({ data }) {
  const { artistData, agendaData, allImageContent } = data

  if (data.artistData.edges[0].node.banner) {
    var bannerImage = data.allImageContent.edges.find(
      x =>
        x.node.fluid.originalName ===
        data.artistData.edges[0].node.banner.split("/")[2]
    )
  }

  if (data.artistData.edges[0].node.citation.quoteImage) {
    var quoteImage = data.allImageContent.edges.find(
      x =>
        x.node.fluid.originalName ===
        data.artistData.edges[0].node.citation.quoteImage.split("/")[2]
    )
  }

  return (
    <>
      {bannerImage ? <ImageBanner data={bannerImage.node.fluid} /> : null}
      <Layout>
        <div className="something">
          <div className="formatted-content">
            <div className="formatted-content__introduction">
              <h2>{artistData.edges[0].node.artistName}</h2>
              <Tags data={artistData.edges[0].node.category} />
              <h3>{artistData.edges[0].node.introduction}</h3>
            </div>
            <div
              dangerouslySetInnerHTML={rawMarkup(
                artistData.edges[0].node.biography
              )}
            />
            <PhotoGallery
              data={{
                galleryImages: artistData.edges[0].node.galleryImages,
                allImageContent: allImageContent,
              }}
            />
          </div>
          <div className="sidebar">
            <div className="quote">
              <div>
                <div className="quote__char">
                  <Img fluid={quoteImage.node.fluid} />
                </div>
                <p>{artistData.edges[0].node.citation.quote}</p>
              </div>
            </div>
            <EventListing data={agendaData} />
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
    allImageContent: allImageSharp {
      edges {
        node {
          ...ArtistFixed
          ...ArtistFluid
        }
      }
    }
  }
`
