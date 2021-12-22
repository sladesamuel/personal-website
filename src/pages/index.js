import React from "react"
import { graphql } from "gatsby"
import Page from "src/components/Page"
import Home from "src/components/Home"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata

  return (
    <Page>
      <Home title={title} subtitle={subtitle} />
    </Page>
  )
}

export default IndexPage
