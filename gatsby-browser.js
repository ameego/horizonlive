import React from "react"
import "./src/styles/reset.scss"
import "./src/styles/main.scss"

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
    </>
  )
}
