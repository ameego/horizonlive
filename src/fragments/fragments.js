import { graphql } from "gatsby"

export const query = graphql`
  fragment ArtistsFragment on ArtistsJson {
    artistName
    biography
    category
    slug
    galleryImages {
      image
      altText
    }
  }

  fragment AgendaFragment on AgendaJson {
    evenement
    category
    eventdate
  }

  fragment ArtistGallery on ImageSharp {
    fixed(width: 500, height: 300) {
      originalName
      ...GatsbyImageSharpFixed
    }
  }

  fragment ArtistBanner on ImageSharp {
    fixed(width: 750) {
      ...GatsbyImageSharpFixed
    }
  }
`
