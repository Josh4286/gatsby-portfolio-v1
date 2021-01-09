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
                            <SocialLink>
                                <FaLinkedin />
                            </SocialLink>
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
                        <FooterLinkS to="one" smooth={true} duration={500} spy={true} exact='true'>
                            Resume
                </FooterLinkS>
                        <FooterLinkS to="one" smooth={true} duration={500} spy={true} exact='true'>
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
    background: #15151a;
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
    margin: 16px;
    align-items: center;
    //border: 3px solid green;
    @media screen and (max-width:768px) {
        flex-direction: column;
    }

`
const Logo = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
    //border: 3px solid green;
    min-width: 170px;
    &:hover{
        color: #f26A2E;
        transition: 0.3s ease-in;
    }
    @media screen and (max-width:768px) {
        justify-content: center;
        min-width: auto;
    }
`

const SocialWrapper = styled.div`
display: flex;
flex-direction: row;
//border: 3px solid green;
justify-content: center;
width: 100%;
`
const SocialLink = styled(LinkR)`
    font-size: 2.5rem;
    color: #fff;
    cursor: pointer;
    &:hover{
        color: #f26A2E;
        transition: 0.3s ease-in;
    }
    margin-left: 100px;
    margin-right: 100px;

    @media screen and (max-width:768px) {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
    }
`
const RightColumn = styled.div`
    //border: 3px solid red;
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


