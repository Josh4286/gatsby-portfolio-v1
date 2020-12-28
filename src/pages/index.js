import React from "react"
import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import { objectOne, objectTwo} from "../components/InfoSection/Data"
import Layout from "../components/layout"
import SectionOne from "../components/SectionOne"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <InfoSection {...objectOne}/>
    <InfoSection {...objectTwo}/>
    <SectionOne/>
  </Layout>
)

export default IndexPage
