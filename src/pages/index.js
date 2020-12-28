import React from "react"
import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import { objectOne } from "../components/InfoSection/Data"
import Layout from "../components/layout"
import SectionOne from "../components/SectionOne"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <InfoSection {...objectOne}/>
    <SectionOne/>
  </Layout>
)

export default IndexPage
