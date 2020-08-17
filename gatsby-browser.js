import React from "react"
import Player from "./src/components/audio-player/audio-player"
import "./src/styles/reset.scss"
import "./src/styles/main.scss"

export const wrapPageElement = ({ element, props }) => {
  var hasPlaystListFromArtistPage =
    props.data &&
    props.data.artistPlaylist &&
    props.data.artistPlaylist.nodes.length > 0

  var isArtistPage =
    props.path.split("/")[1] === "artists" && props.path.split("/")[2] !== ""

  var playlistFromStorage = localStorage.getItem("playlist")

  return (
    <>
      <Player
        isArtistPage={isArtistPage}
        canBeDismissed={!hasPlaystListFromArtistPage}
        data={
          hasPlaystListFromArtistPage
            ? props.data.artistPlaylist.nodes
            : JSON.parse(playlistFromStorage)
        }
      />
      {element}
    </>
  )
}
