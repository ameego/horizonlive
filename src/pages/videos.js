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
      allHomeJson {
        nodes {
          banner
        }
      }
      allVideosJson {
        nodes {
          title
          url
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
            title="Horizon produit ses propres contenus vidéos"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis elit vel mi molestie, et vehicula ligula luctus. Vestibulum aliquam dui eget dui elementum."
          />
          <VideoList data={data.allVideosJson.nodes} />
        </Spreader>
      </Layout>
    </>
  )
}

export default Videos
