import React from "react"

const If = ({ condition, children }) => <>{condition() && children}</>

export default If
