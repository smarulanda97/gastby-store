import React, { Fragment } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const SecondPage = () => (
  <Fragment>
    <SEO title="Page two" />
    <h1>Page 2</h1>
    <Link to="/">Go back to the homepage</Link>
  </Fragment>
)

export default SecondPage
