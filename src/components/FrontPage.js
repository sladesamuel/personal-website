import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import CircularContainer from "./CircularContainer"

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FrontPage = () => (
  <Container>
    <CircularContainer size="xl">
      <StaticImage src="../images/personal.jpeg" alt="" />
    </CircularContainer>
  </Container>
)

export default FrontPage
