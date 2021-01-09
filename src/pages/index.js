import React from "react"
import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import { objectOne, objectTwo} from "../components/InfoSection/Data"
import Layout from "../components/layout"
import SectionOne from "../components/SectionOne"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import styled from "styled-components"
import { useRef } from "react"


const IndexPage = () => {
  const constraintsRef = useRef(null);
  return(
  
  <Layout>
    <Boundary ref={constraintsRef}>
    <SEO title="Home" />
    <Hero />
    <InfoSection {...objectOne}/>
    <InfoSection {...objectTwo}/>
    <SectionOne/>
    <InfoSection {...objectTwo}/>
    </Boundary>
  </Layout>

)
}
export default IndexPage

const Boundary = styled.div`
overflow: hidden;
`