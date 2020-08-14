import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import ImageBanner from "../components/image-banner/image-banner"
import EventListing from "../components/event-listing/event-listing"

export const Agenda = () => {
  const data = useStaticQuery(graphql`
    query Agenda {
      allAgendaJson(sort: { fields: eventdate }) {
        nodes {
          ...AgendaFragment
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <ImageBanner />
      <Layout>
        <EventListing data={data.allAgendaJson} isArtistNameProminent />
      </Layout>
    </>
  )
}

export default Agenda
