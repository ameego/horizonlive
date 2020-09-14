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
import VideoList from "../components/video-list/video-list"
import marked from "marked"

function rawMarkup(data) {
  let rawMarkup = marked(data)
  return { __html: rawMarkup }
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

  return (
    <>
      <SEO
        title={artistData.nodes[0].artistName}
        description={artistData.nodes[0].introduction}
      />
      {bannerImage && bannerImage.nodes.length > 0 ? (
        <ImageBanner src={bannerImage.nodes[0].childImageSharp.fluid} />
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
            <div>
              <PhotoGallery
                data={galleryImages.nodes}
                artistData={artistData}
              />
            </div>
            <div>
              {artistVideos.nodes.length > 0 ? (
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
            <Quote
              quote={artistData.nodes[0].citation.quote}
              src={
                artistData.nodes[0].citation.quoteImage &&
                quoteImage.nodes.length > 0
                  ? quoteImage.nodes[0].childImageSharp.fluid
                  : ""
              }
            />
            {agendaData.nodes.length ? (
              <EventListing data={agendaData} />
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
      sort: { fields: eventdate }
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
          ...ArtistBannerImage
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
          ...ArtistQuoteImage
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
        childImageSharp {
          ...ArtistGalleryFluid
        }
      }
    }
    artistPlaylist: allFile(
      filter: {
        sourceInstanceName: { eq: "artistMusic" }
        relativeDirectory: { eq: $slug }
      }
    ) {
      nodes {
        publicURL
      }
    }
    artistVideos: allVideosJson(
      filter: { artist: { eq: $artistName } }
      sort: { fields: displayOrder, order: ASC }
    ) {
      nodes {
        ...VideosFragment
      }
    }
  }
`
