import React, { useState, useEffect, createRef } from "react"
import AudioPlayer from "react-h5-audio-player"
import style from "./audio-player.module.scss"
import "react-h5-audio-player/lib/styles.css"

const Player = ({ data, canBeDismissed, isArtistPage }) => {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(true)
  const [musicSrc, setMusicSrc] = useState(data)
  var player = createRef()

  useEffect(() => {
    setMusicSrc(data)
    if (JSON.stringify(data) !== localStorage.getItem("playlist")) {
      player.current.audio.current.pause()
      localStorage.removeItem("playlist")
    }
  }, [data, player])

  const handleClickPrevious = () => {
    setCurrentMusicIndex(
      currentMusicIndex === 0 ? musicSrc.length - 1 : currentMusicIndex - 1
    )
  }

  const handleClickNext = () => {
    setCurrentMusicIndex(
      currentMusicIndex < musicSrc.length - 1 ? currentMusicIndex + 1 : 0
    )
  }

  const onPlay = () => {
    setIsPlayerExpanded(true)
    localStorage.setItem("playlist", [JSON.stringify(musicSrc)])
  }

  const closePlayer = () => {
    setIsPlayerExpanded(false)
    localStorage.removeItem("playlist")
    if (isPlayerExpanded) player.current.audio.current.pause()
  }

  return (
    <div
      className={
        (isArtistPage && musicSrc) || (isPlayerExpanded && musicSrc)
          ? `${style.player} active`
          : style.player
      }
    >
      {!isArtistPage && canBeDismissed ? (
        <div className={style.close}>
          <button onClick={closePlayer}>Close</button>
        </div>
      ) : null}
      <AudioPlayer
        ref={player}
        layout="horizontal-reverse"
        customAdditionalControls={[]}
        autoPlay={false}
        showSkipControls={true}
        showJumpControls={false}
        volume={0.75}
        autoPlayAfterSrcChange={false}
        src={musicSrc ? musicSrc[currentMusicIndex].publicURL : ""}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onPlay={onPlay}
      />
    </div>
  )
}

export default Player
