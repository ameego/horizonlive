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
  const { artistData, agendaData, bannerImage, galleryImages } = data

  return (
    <>
      <SEO />
      <ImageBanner src={bannerImage.nodes[0].childImageSharp.fluid} />
      <Layout>
        <PageIntro
          title={artistData.nodes[0].artistName}
          subtitle={artistData.nodes[0].introduction}
          children={<Tags data={artistData.nodes[0].category} />}
        />

        <div className="something">
          <div className="formatted-content">
            <div
              dangerouslySetInnerHTML={rawMarkup(artistData.nodes[0].biography)}
            />
            <PhotoGallery data={galleryImages.nodes} />
          </div>
        </div>
        {/* 
          <div className="sidebar">
            <Quote
              quote={artistData.nodes[0].citation.quote}
              imageSources={artistImages.nodes}
              imageToDisplay={artistData.nodes[0].citation.quoteImage}
            />
            {agendaData ? <EventListing data={agendaData} /> : null}
          </div>
        </div> */}
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query(
    $slug: String!
    $artistName: String!
    $galleryImagePath: String!
    # $quoteImagePath: String!
    $bannerImagePath: String!
  ) {
    artistData: allArtistsJson(filter: { slug: { eq: $slug } }) {
      nodes {
        ...ArtistsFragment
      }
    }
    agendaData: allAgendaJson(filter: { category: { eq: $artistName } }) {
      nodes {
        ...AgendaFragment
      }
    }
    bannerImage: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: $bannerImagePath }
      }
    ) {
      nodes {
        childImageSharp {
          ...ArtistBannerImage
        }
      }
    }
    # quoteImage: allFile(
    #   filter: {
    #     extension: { regex: "/(jpg)|(jpeg)|(png)/" }
    #     relativeDirectory: { eq: $quoteImagePath }
    #   }
    # ) {
    #   nodes {
    #     childImageSharp {
    #       ...ArtistImages
    #     }
    #   }
    # }
    galleryImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: $galleryImagePath }
      }
    ) {
      nodes {
        childImageSharp {
          ...ArtistGalleryFluid
        }
      }
    }
  }
`
