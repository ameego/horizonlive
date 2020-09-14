import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import Spreader from "../components/spreader/spreader"
import PageIntro from "../components/page-intro/page-intro"
import ArtistList from "../components/artist-list/artist-list"
import ImageBanner from "../components/image-banner/image-banner"
import VideoList from "../components/video-list/video-list"

function getHomeVideos(allVideosJson, allHomePageJson) {
  let filteredVideos = []
  allVideosJson.forEach(video => {
    allHomePageJson[0].videos.forEach(vid => {
      if (vid === video.title) filteredVideos.push(video)
    })
  })

  return filteredVideos
}

export const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      allArtistsJson(sort: { fields: displayOrder }) {
        nodes {
          ...ArtistsFragment
        }
      }
      allHomePageJson {
        nodes {
          ...HomeFragment
        }
      }
      allVideosJson(sort: { fields: displayOrder, order: ASC }) {
        nodes {
          ...VideosFragment
        }
      }
      allNewsJson {
        nodes {
          ...NewsFragment
        }
      }
    }
  `)

  const { allVideosJson, allHomePageJson, allArtistsJson } = data

  return (
    <>
      <SEO />
      <ImageBanner isFixed />
      <Layout>
        <PageIntro
          title={allHomePageJson.nodes[0].title}
          subtitle={allHomePageJson.nodes[0].subtitle}
        />
        <ArtistList data={allArtistsJson.nodes} />
        <Spreader>
          <PageIntro
            title={allHomePageJson.nodes[0].vidtitle}
            subtitle={allHomePageJson.nodes[0].vidsubtitle}
            isSmaller={true}
            lessBottomSpace={true}
            link={"/videos"}
          />
          <VideoList
            data={getHomeVideos(allVideosJson.nodes, allHomePageJson.nodes)}
          />
        </Spreader>
        {/* <Spreader>
          <PageIntro
            title="Actualités"
            subtitle="Vestibulum mollis nulla sed quam sagittis lobortis. Aliquam posuere consequat tortor, sed consectetur erat."
            isSmaller={true}
            lessBottomSpace={true}
          />
          <NewsList data={data.allNewsJson.nodes} />
        </Spreader> */}
      </Layout>
    </>
  )
}

export default Home
