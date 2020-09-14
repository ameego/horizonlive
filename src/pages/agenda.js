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
      futureDates: allAgendaJson(
        sort: { fields: eventdate }
        filter: { isFuture: { eq: true } }
      ) {
        nodes {
          ...AgendaFragment
        }
      }
      passedDates: allAgendaJson(
        sort: { fields: eventdate }
        filter: { isFuture: { eq: false } }
      ) {
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
        <EventListing
          data={data.futureDates}
          isArtistNameHidden
          title="Agenda"
        />
        {data.passedDates.nodes.length > 0 ? (
          <>
            <EventListing
              data={data.passedDates}
              isArtistNameHidden
              title="Dates passées"
            />
          </>
        ) : null}
      </Layout>
    </>
  )
}

export default Agenda
