import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
        nodes {
          ...ArtistsFragment
        }
      }
      allHomeJson {
        nodes {
          ...HomeFragment
        }
      }
      allVideosJson {
        nodes {
          ...VideosFragment
        }
      }
      allNewsJson {
        nodes {
          ...NewsFragment
        }
      }
      bannerImages: allFile(
        filter: { sourceInstanceName: { eq: "artistsBanner" } }
      ) {
        nodes {
          childImageSharp {
            ...ArtistBannerImage
          }
        }
      }
    }
  `)

  let filteredVideos = []
  var videoData = data.allHomeJson.nodes[0].videos
  data.allVideosJson.nodes.forEach(video => {
    for (let i = 0; i < videoData.length; i++) {
      if (videoData[i] === video.title) {
        filteredVideos.push(video)
      }
    }
  })

  return (
    <>
      <SEO />
      <ImageBanner data={data.allHomeJson.nodes[0].banner} />
      <Layout>
        <PageIntro
          title={data.allHomeJson.nodes[0].title}
          subtitle={data.allHomeJson.nodes[0].subtitle}
        />
        <ArtistList
          data={data.allArtistsJson.nodes}
          banners={data.bannerImages}
        />
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
          <NewsList data={data.allNewsJson.nodes} />
        </Spreader>
      </Layout>
    </>
  )
}

export default Home
