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
`
