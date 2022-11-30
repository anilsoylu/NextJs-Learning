import Image from "next/image"
import React from "react"
import Meta from "../components/Meta"

function About() {
  return (
    <div className="container">
      <Meta title="About" description="Burası hakkımızda sayfasıdır.." />
      About
      <figure className="position-relative">
        <Image src="/images/image1.jpg" alt="About" width={300} height={300} />
      </figure>
    </div>
  )
}

export default About
