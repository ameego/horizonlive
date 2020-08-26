import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import Spreader from "../components/spreader/spreader"
import PageIntro from "../components/page-intro/page-intro"
import ImageBanner from "../components/image-banner/image-banner"
import VideoList from "../components/video-list/video-list"

export const Videos = () => {
  const data = useStaticQuery(graphql`
    query VideosQuery {
      allCommonJson {
        nodes {
          banner
        }
      }
      allVideosPageJson {
        nodes {
          title
          subtitle
        }
      }
      allVideosJson {
        nodes {
          title
          url
          artist
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <ImageBanner />
      <Layout>
        <Spreader>
          <PageIntro
            title={data.allVideosPageJson.nodes[0].title}
            subtitle={data.allVideosPageJson.nodes[0].subtitle}
          />
          <VideoList data={data.allVideosJson.nodes} />
        </Spreader>
      </Layout>
    </>
  )
}

export default Videos
