import React from "react"
import FluidImg from "../fluid-img/fluid-img"
import style from "./quote.module.scss"

const Quote = ({ data }) => (
  <div>
    <div className={style.quote}>
      <div>
        <div className={style.quote__char}>
          <FluidImg data={data.quoteImage} />
        </div>
        <p>{data.quoteData}</p>
      </div>
    </div>
  </div>
)

export default Quote
