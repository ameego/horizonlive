import { graphql } from "gatsby"

export const query = graphql`
  fragment ArtistsFragment on ArtistsJson {
    artistName
    biography
    introduction
    citation {
      quote
      quoteImage
    }
    category
    slug
    banner
    galleryImages {
      image
      altText
    }
  }

  fragment AgendaFragment on AgendaJson {
    evenement
    category
    eventdate(formatString: "Do/MMM/YYYY", locale: "fr")
  }

  fragment HomeFragment on HomePageJson {
    title
    subtitle
    videos
    vidtitle
    vidsubtitle
  }

  fragment CommonFragment on ImageSharp {
    gatsbyImageData(width: 1280, height: 700, quality: 60)
  }

  fragment NewsFragment on NewsJson {
    title
    artist
    text
    date(formatString: "Do MMM YY", locale: "fr")
  }

  fragment VideosFragment on VideosJson {
    artist
    videocategory
    title
    url
    displayOrder
  }

  fragment ArtistBannerImage on ImageSharp {
    gatsbyImageData(width: 500, height: 300, quality: 40)
  }

  fragment ArtistQuoteImage on ImageSharp {
    gatsbyImageData(width: 500, quality: 40)
  }

  fragment ArtistGalleryFluid on ImageSharp {
    full: gatsbyImageData(width: 1280, quality: 60)
    thumb: gatsbyImageData(width: 500, height: 300, quality: 45)
  }
`
