import React from "react"
import style from "./video-list.module.scss"
import Title3 from "../titles/title-3/title-3"

const VideoList = ({ data }) => (
  <ul className={style.videogallery}>
    {data.map((video, index) => {
      var youtubeURL = `https://www.youtube.com/embed/${video.url}`
      var videoStr = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${youtubeURL}?autoplay=1><img src=https://img.youtube.com/vi/${video.url}/hqdefault.jpg alt='${video.title}'><span>▶</span></a>`

      return (
        <li key={index} className={style.videogallery__item}>
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
          <div className={style.videogallery__information}>
            <Title3 isSmaller={true} text={video.title} />
          </div>
        </li>
      )
    })}
  </ul>
)

export default VideoList
