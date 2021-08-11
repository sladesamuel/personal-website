import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import CircularContainer from "./CircularContainer"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  font-size: 2rem;
  padding: 1rem 0.25rem 0.25rem 0.25rem;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
`

const FrontPage = ({ title, subtitle }) => (
  <Container>
    <CircularContainer size="lg">
      <StaticImage src="../images/personal.jpeg" alt="" />
    </CircularContainer>

    <Title>{title}</Title>

    <Subtitle>{subtitle}</Subtitle>
  </Container>
)

FrontPage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default FrontPage
