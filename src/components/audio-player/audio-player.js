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
    if (JSON.stringify(data) !== sessionStorage.getItem("playlist")) {
      player.current.audio.current.pause()
      sessionStorage.removeItem("playlist")
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
    sessionStorage.setItem("playlist", [JSON.stringify(musicSrc)])
  }

  const closePlayer = () => {
    setIsPlayerExpanded(false)
    sessionStorage.removeItem("playlist")
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

      <div
        className={
          !isArtistPage && canBeDismissed
            ? `${style.close} active`
            : style.close
        }
      >
        <button onClick={closePlayer}>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <g transform="scale(0.03125 0.03125)">
              <path d="M512 928c-229.76 0-416-186.24-416-416s186.24-416 416-416 416 186.24 416 416-186.24 416-416 416zM702.752 390.688c7.808-7.808 7.808-20.512 0-28.32l-42.496-42.464c-7.808-7.808-20.512-7.808-28.32 0l-120.352 120.352-120.352-120.352c-7.808-7.808-20.512-7.808-28.32 0l-42.496 42.464c-7.808 7.808-7.808 20.512 0 28.32l120.384 120.384-120.384 120.32c-7.808 7.808-7.808 20.512 0 28.32l42.496 42.496c7.808 7.808 20.512 7.808 28.32 0l120.352-120.384 120.352 120.384c7.808 7.808 20.512 7.808 28.32 0l42.496-42.496c7.808-7.808 7.808-20.512 0-28.32l-120.384-120.32 120.384-120.384z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Player
