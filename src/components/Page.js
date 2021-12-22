import React from "react"
import GlobalStyles from "src/components/GlobalStyles"

const Page = ({ children }) => (
  <>
    <GlobalStyles />

    {children}
  </>
)

export default Page
