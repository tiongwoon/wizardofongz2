/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Menu from "./menu"

const Layout = ({ children }) => {

  return (
    <div className="background-blue">
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Menu />
      <div className="main-container" >
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
