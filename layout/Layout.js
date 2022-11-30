import React from "react"
import Header from "../components/Header"
import Meta from "../components/Meta"

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  )
}

export default Layout
