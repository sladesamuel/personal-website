import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  border: ${(props) =>
    props.addBorder ? `1px dashed ${props.theme.colors.secondary}` : `none`};
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
`

function getSize(size) {
  switch (size) {
    case "xs":
      return 24

    case "sm":
      return 48

    case "md":
      return 128

    case "lg":
      return 256

    case "xl":
      return 384

    case "2xl":
      return 512

    default:
      throw new Error(`Invalid size selection: ${size}`)
  }
}

const CircularContainer = ({ addBorder, size, children }) => {
  const value = getSize(size)

  return (
    <Container width={value} height={value} addBorder={addBorder}>
      {children}
    </Container>
  )
}

CircularContainer.defaultProps = {
  size: "md",
  addBorder: false
}

CircularContainer.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  addBorder: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default CircularContainer
