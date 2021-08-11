import React from "react"
import { graphql } from "gatsby"
import Page from "src/components/Page"
import FrontPage from "src/components/FrontPage"

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
      <FrontPage title={title} subtitle={subtitle} />
    </Page>
  )
}

export default IndexPage
