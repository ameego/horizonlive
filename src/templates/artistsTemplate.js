import React from "react"
import { graphql } from "gatsby"
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <div>
      <h1>{frontmatter.artistName}</h1>
      <ul>
        {frontmatter.focus.map((focus, index) => (
          <li key={index}>{focus}</li>
        ))}
      </ul>
      <p>{frontmatter.biography}</p>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        artistName
        focus
        biography
      }
    }
  }
`
