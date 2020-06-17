import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage = () => (
  <div className="background-image">
    <Menu />
    <SEO title="Home" />
    <div className="welcome-description">
      <h1 className="title-font">Hey! I am Tiong</h1>
      <p className="normal-text-red normal-text">
        Here I share my thoughts about tech, personal development and just about life
        in general.<br></br><Link to="/writings">Read my writings </Link>
      </p>
    </div>
  </div>
)

export default IndexPage
