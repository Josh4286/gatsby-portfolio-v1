import React from "react"
import Missing from "../components/Missing"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Missing/>
  </Layout>
)

export default NotFoundPage
