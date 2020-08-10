import React from "react"
import { useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import Spreader from "../components/spreader/spreader"
import PageIntro from "../components/page-intro/page-intro"
import NewsList from "../components/news-list/news-list"
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
      allNewsJson {
        edges {
          node {
            text
            title
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
      <SEO />
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
            subtitle="Vestibulum mollis nulla sed quam sagittis lobortis. Aliquam posuere consequat tortor, sed consectetur erat."
            isSmaller={true}
            lessBottomSpace={true}
          />
          <VideoList data={filteredVideos} />
        </Spreader>
        <Spreader>
          <PageIntro
            title="Actualités"
            subtitle="Vestibulum mollis nulla sed quam sagittis lobortis. Aliquam posuere consequat tortor, sed consectetur erat."
            isSmaller={true}
            lessBottomSpace={true}
          />
          <NewsList data={data.allNewsJson.edges} />
        </Spreader>
      </Layout>
    </>
  )
}

export default Home
