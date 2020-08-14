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

function getHomeVideos(allVideosJson, allHomeJson) {
  let filteredVideos = []
  allVideosJson.forEach(video => {
    allHomeJson[0].videos.forEach(vid => {
      if (vid === video.title) filteredVideos.push(video)
    })
  })

  return filteredVideos
}

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
      homeBanner: allFile(
        filter: { sourceInstanceName: { eq: "commonBanner" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1280, maxHeight: 700, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
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
    }
  `)

  const { allVideosJson, allHomeJson, allArtistsJson, homeBanner } = data

  return (
    <>
      <SEO />
      <ImageBanner src={homeBanner.nodes[0].childImageSharp.fluid} />
      <Layout>
        <PageIntro
          title={allHomeJson.nodes[0].title}
          subtitle={allHomeJson.nodes[0].subtitle}
        />
        <ArtistList data={allArtistsJson.nodes} />
        <Spreader>
          <PageIntro
            title="Vidéothèque"
            subtitle="Vestibulum mollis nulla sed quam sagittis lobortis. Aliquam posuere consequat tortor, sed consectetur erat."
            isSmaller={true}
            lessBottomSpace={true}
          />
          <VideoList
            data={getHomeVideos(allVideosJson.nodes, allHomeJson.nodes)}
          />
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
