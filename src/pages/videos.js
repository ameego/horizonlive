import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
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
          ...VideosFragment
        }
      }
      allVideocategoriesJson {
        nodes {
          categoryname
          categorydescr
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
          title={data.allVideosPageJson.nodes[0].title}
          subtitle={data.allVideosPageJson.nodes[0].subtitle}
        />
        {data.allVideocategoriesJson.nodes.map((cat, index) => (
          <div>
            <PageIntro
              key={cat.categoryname}
              title={cat.categoryname}
              subtitle={cat.categorydescr}
              isSmaller={true}
              lessBottomSpace={true}
            />
            <VideoList
              key={index}
              data={data.allVideosJson.nodes.filter(
                x => x.videocategory === cat.categoryname
              )}
            />
          </div>
        ))}
      </Layout>
    </>
  )
}

export default Videos
