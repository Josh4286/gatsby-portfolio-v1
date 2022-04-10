import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'gatsby'
import { animateScroll as scroll } from 'react-scroll'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrapper>
                <LeftColumn>
                    <LeftColumnWrapper>
                        <Logo to='/' onClick={toggleHome}>
                            <h1>Joshua Wong</h1>
                        </Logo>
                        <SocialWrapper>
                            <SocialLink to='https://github.com/Josh4286/gatsby-portfolio-v1/'>
                                <FaGithub />
                            </SocialLink>
                            <SocialLink to='https://www.linkedin.com/in/joshuawongcy/'>
                                <FaLinkedin/>
                            </SocialLink >
                        </SocialWrapper>
                    </LeftColumnWrapper>
                </LeftColumn>
                <RightColumn>
                    <RightFooterLinkWrapper>
                        <FooterLinkR to="/" onClick={toggleHome}>Home</FooterLinkR>
                        <FooterLinkS
                            to="one" smooth={true} duration={500} spy={true} exact='true'>
                            About
                        </FooterLinkS>
                        <FooterLinkS to="two" smooth={true} duration={500} spy={true} exact='true'>
                            Skills
                        </FooterLinkS>
                        <FooterLinkS to="animation" smooth={true} duration={500} spy={true} exact='true'>
                            Animation
                        </FooterLinkS>
                        <FooterLinkS to="resume" smooth={true} duration={500} spy={true} exact='true'>
                            Resume
                        </FooterLinkS>
                        <FooterLinkS  href="mailto:joshuawongcy@outlook.com" to="contact" smooth={true} duration={500} spy={true} exact='true'>
                            Contact
                        </FooterLinkS>
                    </RightFooterLinkWrapper>
                </RightColumn>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    background: #101010;
    color: #fff;
    padding: 48px 24px;
`
const FooterWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    max-width: 1100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    //border: 3px solid red;
    @media screen and (max-width:768px) {
        max-width: 60%
    }
    @media screen and (max-width:512px) {
        max-width: 80%
    }
    @media screen and (max-width:275px) {
        flex-direction: column;
    }
`

const LeftColumn = styled.div`
    width: 100%;
    //border: 3px solid red;
`
const LeftColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    //border: 1px solid green;
    @media screen and (max-width:768px) {
        flex-direction: column;
        align-items: start;
    }
    @media screen and (max-width:275px) {
        align-items: center;
    }

`
const Logo = styled(LinkR)`
    display: flex;
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
    //border: 3px solid green;
    min-width: 180px;
    &:hover{
        color: #f26A2E;
        transition: 0.3s ease-in;
    }
    @media screen and (max-width:768px) {
        min-width: 0;
    }
    @media screen and (max-width:275px) {
        text-align: center;
        min-width: auto;
    }
`

const SocialWrapper = styled.div`
display: flex;
flex-direction: row;
//border: 3px solid green;
justify-content: center;
width: 100%;
@media screen and (max-width:768px) {
    justify-content: start;
    width: auto;
}
`
const SocialLink = styled(LinkR)`
    font-size: 2.5rem;
    color: #fff;
    cursor: pointer;
    &:hover{
        color: #f26A2E;
        transition: 0.3s ease-in;
    }
    margin-left: 80px;
    margin-right: 80px;

    @media screen and (max-width:768px) {
        margin-top: 50px;
        margin-left: 10px;
        margin-right: 10px;
    }
`
const RightColumn = styled.div`
    //border: 1px solid red;
    @media screen and (max-width:768px) {
    }
`

const RightFooterLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    text-align: left;
    //border: 3px solid green;
`

const FooterLinkS = styled(LinkS)`
    color: #fff;
    margin-bottom: 0.5rem;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    &:hover{
        color: #f26A2E;
        transition: 0.3s ease-in;
    }
`
const FooterLinkR = styled(LinkR)`
    color: #fff;
    margin-bottom: 0.5rem;
    text-decoration: none;
    font-size: 14px;
    &:hover{
        color: #f26A2E;
        transition: 0.3s ease-in;
    }
`


