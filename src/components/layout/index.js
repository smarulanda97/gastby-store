/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Header } from "./../index"
import { GlobalStyles, Content, Footer, Love } from "./styles"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Header siteTitle={"Geek Store"} />
      <Content>
        <main>{children}</main>
        <Footer>
          Made with <Love>❤</Love> by
          <a href="https://platzi.com/@santiagomarulanda/">smarulanda97</a>
        </Footer>
      </Content>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
