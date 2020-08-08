import React from "react"

const PageIntro = ({ title, subtitle, children }) => (
  <div className="formatted-content" style={{ width: "60%" }}>
    <div className="formatted-content__introduction">
      <h2 className="title-1">{title}</h2>
      {children}
      <h3>{subtitle}</h3>
    </div>
  </div>
)

export default PageIntro
