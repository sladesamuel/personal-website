import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  height: 100vh;
`

const FrontPage = () => (
  <Container>
    <StaticImage src="../images/personal.jpeg" alt="" />
  </Container>
)

export default FrontPage