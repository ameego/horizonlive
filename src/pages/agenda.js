import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"

export const PureHome = ({
  data: {
    allAgendaJson: { edges },
  },
}) => (
  <>
    {edges.map((date, index) => (
      <p key={index}>
        {date.node.category} | {date.node.evenement} | {date.node.eventdate}
      </p>
    ))}
  </>
)

export const Home = () => {
  const data = useStaticQuery(graphql`
    query Agenda {
      allAgendaJson(sort: { fields: eventdate }) {
        edges {
          node {
            evenement
            category
            eventdate
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <PureHome data={data} />
    </Layout>
  )
}

export default Home
