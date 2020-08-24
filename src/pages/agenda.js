import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import PageIntro from "../components/page-intro/page-intro"
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
      allAgendaPageJson {
        nodes {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <ImageBanner />
      <Layout>
        <PageIntro
          title={data.allAgendaPageJson.nodes[0].title}
          subtitle={data.allAgendaPageJson.nodes[0].subtitle}
        />
        <EventListing data={data.allAgendaJson} isArtistNameProminent />
      </Layout>
    </>
  )
}

export default Agenda
