import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import { SEO, Jumbo } from "../components"

export const query = graphql`
  query getSiteMetaData {
    allSite {
      edges {
        node {
          siteMetadata {
            author
            title
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data = {} }) => {
  const { siteMetadata } = data.allSite.edges[0].node
  return (
    <Fragment>
      <SEO title={siteMetadata.title} />
      <Jumbo description={siteMetadata.description} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 15px 120px 15px",
        }}
      >
        <h1>Page 1</h1>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Fragment>
  )
}

export default IndexPage
