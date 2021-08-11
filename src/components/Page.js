import React from "react"
import styled from "styled-components"
import GlobalStyles from "src/components/GlobalStyles"

const Container = styled.div``

const Page = ({ children }) => (
  <Container>
    <GlobalStyles />

    {children}
  </Container>
)

export default Page
