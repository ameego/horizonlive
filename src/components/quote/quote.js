import React from "react"
import FluidImg from "../fluid-img/fluid-img"
import style from "./quote.module.scss"

const Quote = ({ quote, imageSources, imageToDisplay }) => (
  <div>
    <div className={style.quote}>
      <div>
        <div className={style.quote__char}>
          <FluidImg
            imageSources={imageSources}
            imageToDisplay={imageToDisplay}
          />
        </div>
        <p>{quote}</p>
      </div>
    </div>
  </div>
)

export default Quote
