import React from "react"
import styled from "styled-components"
import "@fontsource/fira-sans/300.css"

const Container = styled.div`
  padding: 1rem;
`

const Page = ({ children }) => <Container>{children}</Container>

export default Page
