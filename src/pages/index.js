import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SectionOne from "../components/SectionOne"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SectionOne/>
  </Layout>
)

export default IndexPage
