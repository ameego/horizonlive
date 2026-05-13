import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import SEO from "../components/seo/seo"
import Tags from "../components/tags/tags"
import Quote from "../components/quote/quote"
import Layout from "../components/layout/layout"
import PageIntro from "../components/page-intro/page-intro"
import EventListing from "../components/event-listing/event-listing"
import PhotoGallery from "../components/photo-gallery/photo-gallery"
import ImageBanner from "../components/image-banner/image-banner"
import VideoList from "../components/video-list/video-list"
import { marked } from "marked"

function rawMarkup(data) {
  if (!data) return { __html: "" }
  let rawMarkup = marked.parse(data)
  return { __html: rawMarkup }
}

export const Head = ({ data, location }) => {
  const artistNode = data.artistData.nodes[0]
  return (
    <SEO
      title={artistNode ? artistNode.artistName : null}
      description={artistNode ? artistNode.introduction : null}
      pathname={location.pathname}
    />
  )
}

export default function Template({ data }) {
  const {
    artistData,
    agendaData,
    bannerImage,
    galleryImages,
    quoteImage,
    artistVideos,
  } = data

  const bannerImageData = bannerImage && bannerImage.nodes.length > 0
    ? getImage(bannerImage.nodes[0].childImageSharp.gatsbyImageData)
    : null

  const quoteImageData = artistData.nodes[0].citation &&
    artistData.nodes[0].citation.quoteImage &&
    quoteImage.nodes.length > 0
    ? getImage(quoteImage.nodes[0].childImageSharp.gatsbyImageData)
    : null

  return (
    <>
      {bannerImageData ? (
        <ImageBanner src={bannerImageData} />
      ) : null}
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
            {galleryImages.nodes && galleryImages.nodes.length > 0 ? (
              <div>
                <PhotoGallery
                  data={galleryImages.nodes}
                  artistData={artistData}
                />
              </div>
            ) : null}
            <div>
              {artistVideos && artistVideos.nodes.length > 0 ? (
                <>
                  <PageIntro
                    title="Videos"
                    isSmaller={true}
                    lessBottomSpace={true}
                  />
                  <VideoList
                    data={artistVideos.nodes}
                    isArtistNameHidden
                    isNarrow
                  />
                </>
              ) : null}
            </div>
          </div>
          <div className="sidebar">
            {artistData.nodes[0].citation && (
              <Quote
                quote={artistData.nodes[0].citation.quote}
                src={quoteImageData}
              />
            )}
            {agendaData.nodes.length ? (
              <EventListing data={agendaData} title="Agenda" />
            ) : null}
          </div>
        </div>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!, $artistName: String!) {
    artistData: allArtistsJson(filter: { slug: { eq: $slug } }) {
      nodes {
        ...ArtistsFragment
      }
    }
    agendaData: allAgendaJson(
      sort: { eventdate: ASC }
      filter: { isFuture: { eq: true }, category: { eq: $artistName } }
    ) {
      nodes {
        ...AgendaFragment
      }
    }
    bannerImage: allFile(
      filter: {
        sourceInstanceName: { eq: "artistsBanner" }
        relativeDirectory: { eq: $slug }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 1280, height: 700, quality: 60)
        }
      }
    }
    quoteImage: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        sourceInstanceName: { eq: "artistsQuote" }
        relativeDirectory: { eq: $slug }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 500, quality: 40)
        }
      }
    }
    galleryImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        sourceInstanceName: { eq: "artistsGallery" }
        relativeDirectory: { eq: $slug }
      }
    ) {
      nodes {
        base
        childImageSharp {
          full: gatsbyImageData(width: 1280, quality: 60)
          thumb: gatsbyImageData(width: 500, height: 300, quality: 45)
        }
      }
    }
    artistVideos: allVideosJson(
      filter: { artist: { eq: $artistName } }
      sort: { displayOrder: ASC }
    ) {
      nodes {
        ...VideosFragment
      }
    }
  }
`
