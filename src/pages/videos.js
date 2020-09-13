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
      allVideosJson(
        sort: { fields: displayOrder, order: ASC }
        filter: { isLimitedToArtistPage: { ne: true } }
      ) {
        nodes {
          ...VideosFragment
        }
      }
      allVideocategoriesJson(sort: { fields: displayOrder }) {
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
        {data.allVideocategoriesJson.nodes.map((cat, index) => {
          var videoData = data.allVideosJson.nodes.filter(
            x => x.videocategory === cat.categoryname
          )
          return (
            <>
              {videoData.length ? (
                <div>
                  <PageIntro
                    key={cat.categoryname}
                    title={cat.categoryname}
                    subtitle={cat.categorydescr}
                    isSmaller={true}
                    lessBottomSpace={true}
                  />
                  <VideoList key={index} data={videoData} hideCategory />
                </div>
              ) : null}
            </>
          )
        })}
      </Layout>
    </>
  )
}

export default Videos
