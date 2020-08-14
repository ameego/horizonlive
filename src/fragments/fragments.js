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

  fragment HomeFragment on HomeJson {
    title
    subtitle
    banner
    videos
  }

  fragment CommonFragment on ImageSharp {
    fluid(maxWidth: 1280, maxHeight: 700, quality: 60) {
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
    title
    url
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
    full: fluid(maxWidth: 1280, maxHeight: 700, quality: 60) {
      ...GatsbyImageSharpFluid_withWebp
    }
    thumb: fluid(maxWidth: 250, maxHeight: 150, quality: 40) {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
`
