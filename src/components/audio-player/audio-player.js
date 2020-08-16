import React, { useState, createRef } from "react"
import AudioPlayer from "react-h5-audio-player"
import style from "./audio-player.module.scss"
import "react-h5-audio-player/lib/styles.css"

const Player = ({ data, canBeDismissed, isArtistPage }) => {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(true)

  var playlist = data

  const handleClickPrevious = () => {
    setCurrentMusicIndex(
      currentMusicIndex === 0 ? playlist.length - 1 : currentMusicIndex - 1
    )
  }

  const handleClickNext = () => {
    setCurrentMusicIndex(
      currentMusicIndex < playlist.length - 1 ? currentMusicIndex + 1 : 0
    )
  }

  const onPlay = () => {
    setIsPlayerExpanded(true)
    localStorage.setItem("playlist", [JSON.stringify(playlist)])
  }

  const closePlayer = () => {
    localStorage.removeItem("playlist")
    if (isPlayerExpanded) player.current.audio.current.pause()
    setIsPlayerExpanded(false)
  }

  var player = createRef()

  return (
    <div
      className={
        isArtistPage || isPlayerExpanded
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
        src={playlist[currentMusicIndex].publicURL}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onPlay={onPlay}
      />
    </div>
  )
}

export default Player
