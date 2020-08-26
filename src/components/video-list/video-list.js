import React from "react"
import style from "./video-list.module.scss"
import Title3 from "../titles/title-3/title-3"

const VideoList = ({ data, isArtistNameHidden }) => (
  <ul className={style.videogallery}>
    {data.map((video, index) => {
      var youtubeURL = `https://www.youtube.com/embed/${video.url}`
      var videoStr = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img{display: none;}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height: 100%; display: flex; justify-content: center; align-items: center; text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${youtubeURL}?autoplay=1><img src=https://img.youtube.com/vi/${video.url}/hqdefault.jpg alt='${video.title}'><span>▶</span></a>`
      var artistNameStr = isArtistNameHidden ? "" : `${video.artist} –`
      return (
        <li key={index} className={style.videogallery__item}>
          <div
            className={style.iframecontainer}
            style={{
              backgroundImage:
                "url(" +
                "https://img.youtube.com/vi/" +
                video.url +
                "/hqdefault.jpg" +
                ")",
            }}
          >
            <iframe
              width="560"
              height="315"
              src={youtubeURL}
              srcDoc={videoStr}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
          <div className={style.videogallery__information}>
            <Title3 isSmaller={true} text={`${artistNameStr} ${video.title}`} />
          </div>
        </li>
      )
    })}
  </ul>
)

export default VideoList
