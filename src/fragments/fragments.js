import { graphql } from "gatsby"

export const query = graphql`
  fragment ArtistsFragment on ArtistsJson {
    artistName
    biography
    category
    slug
    galleryImages
  }

  fragment AgendaFragment on AgendaJson {
    evenement
    category
    eventdate
  }
`
