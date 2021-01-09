import React from "react"
import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import { objectOne, objectTwo } from "../components/InfoSection/Data"
import Layout from "../components/layout"
import SectionOne from "../components/SectionOne"
import SEO from "../components/seo"
import styled from "styled-components"


const IndexPage = () => {
  return (
    
      <Layout>
        <Boundary>
        <SEO title="Home" />
        <Hero />
        <InfoSection {...objectOne} />
        <InfoSection {...objectTwo} />
        <SectionOne />
        <InfoSection {...objectTwo} />
        </Boundary>
      </Layout>
    
  )
}
export default IndexPage

const Boundary = styled.div`
overflow: hidden;
`