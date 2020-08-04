import { graphql } from "gatsby"

export const query = graphql`
  fragment ArtistsFragment on ArtistsJson {
    artistName
    biography
    introduction
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
    eventdate
  }

  fragment ArtistFluid on ImageSharp {
    fixed(width: 500, height: 300) {
      originalName
      ...GatsbyImageSharpFixed
    }
  }

  fragment ArtistFixed on ImageSharp {
    fluid(maxWidth: 750, quality: 40) {
      originalName
      ...GatsbyImageSharpFluid
    }
  }
`
