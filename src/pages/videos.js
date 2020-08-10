import React from "react"
import { useStaticQuery } from "gatsby"
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
        edges {
          node {
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
      <SEO />
      <ImageBanner data={data.allHomeJson.edges[0].node.banner} />
      <Layout>
        <Spreader>
          <PageIntro
            title="Horizon produit ses propres contenus vidéos"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis elit vel mi molestie, et vehicula ligula luctus. Vestibulum aliquam dui eget dui elementum."
          />
          <VideoList data={data.allVideosJson.edges} />
        </Spreader>
      </Layout>
    </>
  )
}

export default Videos
