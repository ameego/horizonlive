import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import ImageBanner from "../components/image-banner/image-banner"
import Utils from "../utils/utils"

export default function Template({ data }) {
  const { aristData, agendaData, allImageContent, allBannerContent } = data
  return (
    <>
      <ImageBanner data={allBannerContent.edges[0].node.fluid} />
      <Layout>
        <div className="formatted-content">
          <h1>{aristData.edges[0].node.artistName}</h1>
          <p>{aristData.edges[0].node.biography}</p>
          <ul>
            {aristData.edges[0].node.category.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
          <h2>Agenda</h2>
          <ul>
            {agendaData.edges.map((date, index) => (
              <li key={index}>
                <p>
                  {date.node.evenement} | {date.node.eventdate}
                </p>
              </li>
            ))}
          </ul>

          <ul>
            {aristData.edges[0].node.galleryImages
              ? aristData.edges[0].node.galleryImages.map((item, index) => {
                  return (
                    <li key={index}>
                      <Img
                        fixed={Utils.getCurrentImage(
                          allImageContent,
                          item.image
                        )}
                      />
                    </li>
                  )
                })
              : null}
          </ul>
        </div>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!, $artistName: String!) {
    aristData: allArtistsJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          ...ArtistsFragment
        }
      }
    }
    agendaData: allAgendaJson(filter: { category: { eq: $artistName } }) {
      edges {
        node {
          ...AgendaFragment
        }
      }
    }
    allImageContent: allImageSharp {
      edges {
        node {
          ...ArtistGallery
        }
      }
    }
    allBannerContent: allImageSharp(
      filter: {
        fluid: {
          originalName: {
            eq: "67234102_10156420124736723_840629476122427392_o.jpg"
          }
        }
      }
    ) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
