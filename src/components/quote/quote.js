import React from "react"
import FluidImg from "../fluid-img/fluid-img"
import style from "./quote.module.scss"

const Quote = ({ quote, src }) => (
  <div>
    <div className={style.quote}>
      <div>
        <div className={style.quote__char}>
          <FluidImg src={src} />
        </div>
        <p>{quote}</p>
      </div>
    </div>
  </div>
)

export default Quote
