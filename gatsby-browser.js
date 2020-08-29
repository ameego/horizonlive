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

  var playlistFromStorage = sessionStorage.getItem("playlist")

  return (
    <>
      {element}
      <Player
        artistName={
          props.data &&
          props.data.artistData &&
          props.data.artistData.nodes.length > 0
            ? props.data.artistData.nodes[0].artistName
            : ""
        }
        isArtistPage={isArtistPage}
        canBeDismissed={!hasPlaystListFromArtistPage}
        data={
          hasPlaystListFromArtistPage
            ? props.data.artistPlaylist.nodes
            : JSON.parse(playlistFromStorage)
        }
      />
    </>
  )
}
