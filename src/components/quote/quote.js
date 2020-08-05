import React from "react"
import Img from "gatsby-image"
import style from "./quote.module.scss"

const Quote = ({ data }) => (
  <div>
    <div className={style.quote}>
      <div>
        <div className={style.quote__char}>
          <Img fluid={data.quoteImage.node.fluid} />
        </div>
        <p>{data.quoteData}</p>
      </div>
    </div>
  </div>
)

export default Quote
