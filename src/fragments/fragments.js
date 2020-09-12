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
    playlist {
      musicname
      music
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
    fluid(maxWidth: 1280, maxHeight: 700, quality: 60) {
      originalName
      ...GatsbyImageSharpFluid_withWebp
    }
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
    fluid(maxWidth: 500, maxHeight: 300, quality: 40) {
      originalName
      ...GatsbyImageSharpFluid_withWebp
    }
  }

  fragment ArtistQuoteImage on ImageSharp {
    fluid(maxWidth: 500, maxHeight: 300, quality: 40) {
      originalName
      ...GatsbyImageSharpFluid_withWebp
    }
  }

  fragment ArtistGalleryFluid on ImageSharp {
    full: fluid(maxWidth: 1280, quality: 60) {
      originalName
      ...GatsbyImageSharpFluid_withWebp
    }
    thumb: fluid(maxWidth: 500, maxHeight: 300, quality: 45) {
      originalName
      ...GatsbyImageSharpFluid_withWebp
    }
  }
`
