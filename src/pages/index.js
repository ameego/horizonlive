import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import Spreader from "../components/spreader/spreader"
import PageIntro from "../components/page-intro/page-intro"
import ArtistList from "../components/artist-list/artist-list"
import ImageBanner from "../components/image-banner/image-banner"
import Subtitle from "../components/titles/title-2/title-2"
import VideoList from "../components/video-list/video-list"

export const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      allArtistsJson {
        edges {
          node {
            ...ArtistsFragment
          }
        }
      }
      allHomeJson {
        edges {
          node {
            title
            subtitle
            banner
          }
        }
      }
      allVideosJson {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)
  return (
    <>
      <ImageBanner data={data.allHomeJson.edges[0].node.banner} />
      <Layout>
        <PageIntro
          title={data.allHomeJson.edges[0].node.title}
          subtitle={data.allHomeJson.edges[0].node.subtitle}
        />
        <ArtistList data={data} />
        <Spreader>
          <PageIntro
            title="Vidéothèque"
            isSmaller={true}
            lessBottomSpace={true}
          />
          <VideoList data={data} />
        </Spreader>
      </Layout>
    </>
  )
}

export default Home
