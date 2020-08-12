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
  const { artistData, agendaData, artistImages, galleryImages } = data

  return (
    <>
      <SEO />
      <ImageBanner
        imageToDisplay={artistData.nodes[0].banner}
        imageSources={artistImages.nodes}
      />
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
          <div className="sidebar">
            <Quote
              quote={artistData.nodes[0].citation.quote}
              imageSources={artistImages.nodes}
              imageToDisplay={artistData.nodes[0].citation.quoteImage}
            />
            {agendaData ? <EventListing data={agendaData} /> : null}
          </div>
        </div>
      </Layout>
      {/* <Layout>
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
            <PhotoGallery />
          </div>
          <div className="sidebar">
            <Quote
              data={{
                quoteImage: artistData.nodes[0].citation.quoteImage,
                quoteData: artistData.nodes[0].citation.quote,
              }}
            />
            {agendaData ? <EventListing data={agendaData} /> : null}
          </div>
        </div>
      </Layout> */}
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!, $artistName: String!, $galleryPath: String!) {
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
    artistImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: $slug }
        sourceInstanceName: { ne: "img" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300, quality: 40) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    galleryImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: $galleryPath }
        sourceInstanceName: { ne: "img" }
      }
    ) {
      nodes {
        childImageSharp {
          thumb: fluid(maxWidth: 250, maxHeight: 150, quality: 40) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
          full: fluid(maxWidth: 1280, maxHeight: 700, quality: 60) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
