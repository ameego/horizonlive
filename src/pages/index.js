import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import Spreader from "../components/spreader/spreader"
import PageIntro from "../components/page-intro/page-intro"
import ArtistList from "../components/artist-list/artist-list"
import ImageBanner from "../components/image-banner/image-banner"
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
            videos
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

  let filteredVideos = []
  var videoData = data.allHomeJson.edges[0].node.videos
  data.allVideosJson.edges.forEach(video => {
    for (let i = 0; i < videoData.length; i++) {
      if (videoData[i] === video.node.title) {
        filteredVideos.push(video)
      }
    }
  })

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
          <VideoList data={filteredVideos} />
        </Spreader>
      </Layout>
    </>
  )
}

export default Home
