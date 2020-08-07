import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import EventListing from "../components/event-listing/event-listing"

export const Agenda = () => {
  const data = useStaticQuery(graphql`
    query Agenda {
      allAgendaJson(sort: { fields: eventdate }) {
        edges {
          node {
            ...AgendaFragment
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <EventListing data={data.allAgendaJson} isArtistNameProminent={true} />
    </Layout>
  )
}

export default Agenda
