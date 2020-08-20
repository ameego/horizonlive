import React, { useState, useEffect, createRef } from "react"
import AudioPlayer from "react-h5-audio-player"
import style from "./audio-player.module.scss"
import "react-h5-audio-player/lib/styles.css"

const Player = ({ data, canBeDismissed, isArtistPage, artistName }) => {
  var name = artistName ? artistName : sessionStorage.getItem("artistName")
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
  const [isPlayerExpanded, setIsPlayerExpanded] = useState()
  const [musicSrc, setMusicSrc] = useState(data)
  const [artistTitle, setArtistTitle] = useState(`Playlist de ${name}`)

  let player = createRef()
  let storedPlaylist = sessionStorage.getItem("playlist")

  const resetStorage = () => {
    sessionStorage.removeItem("playlist")
    sessionStorage.removeItem("artistName")
  }

  const pausePlayer = () => {
    player.current.audio.current.pause()
  }

  useEffect(() => {
    setMusicSrc(data)

    // reset music when current playlist differs from current artist page
    if (JSON.stringify(data) !== storedPlaylist) {
      resetStorage()
      pausePlayer()
      setIsPlayerExpanded(false)
      setArtistTitle(`Playlist de ${artistName}`)
    }
  }, [data, player, artistName, storedPlaylist, pausePlayer])

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
    if (JSON.stringify(data) === storedPlaylist || !storedPlaylist) {
      setIsPlayerExpanded(true)
      setArtistTitle(`Vous écoutez\n${sessionStorage.getItem("artistName")}`)
    }

    if (!canBeDismissed) sessionStorage.setItem("artistName", [artistName])

    sessionStorage.setItem("playlist", [JSON.stringify(musicSrc)])
  }

  const closePlayer = () => {
    setIsPlayerExpanded(false)
    resetStorage()
    setArtistTitle("")
    if (isPlayerExpanded) pausePlayer()
  }

  return (
    <div
      className={
        (isArtistPage && musicSrc && !canBeDismissed) ||
        (isPlayerExpanded && musicSrc)
          ? `${style.player} active`
          : style.player
      }
    >
      <div className={style.information}>{artistTitle}</div>
      <div className={style.playercontainer}>
        <AudioPlayer
          ref={player}
          layout="horizontal-reverse"
          customAdditionalControls={[]}
          autoPlay={false}
          showSkipControls={true}
          showJumpControls={false}
          volume={0.75}
          src={musicSrc ? musicSrc[currentMusicIndex].publicURL : ""}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onPlay={onPlay}
        />

        <div
          className={
            canBeDismissed || (!isArtistPage && canBeDismissed)
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
    </div>
  )
}

export default Player
