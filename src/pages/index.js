import React from "react"
import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import { objectOne, objectTwo } from "../components/InfoSection/Data"
import Layout from "../components/layout"
import Animation from "../components/Animation"
import SEO from "../components/seo"
import styled from "styled-components"
import Resume from "../components/Resume"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    
      <Layout>
        <Boundary>
        <SEO title="Home" />
        <Hero />
        <InfoSection {...objectOne} />
        <InfoSection {...objectTwo} />
        <Animation />
        <Resume/>
        <Contact/>
        </Boundary>
      </Layout>
    
  )
}
export default IndexPage

const Boundary = styled.div`
overflow: hidden;
`