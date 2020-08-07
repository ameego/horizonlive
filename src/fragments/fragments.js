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
    eventdate
  }

  fragment ArtistFluid on ImageSharp {
    fluid(maxWidth: 500, maxHeight: 300, quality: 40) {
      originalName
      ...GatsbyImageSharpFluid_withWebp
    }
  }

  fragment ArtistFixed on ImageSharp {
    fixed(width: 500, height: 300) {
      originalName
      ...GatsbyImageSharpFixed_withWebp
    }
  }
`
