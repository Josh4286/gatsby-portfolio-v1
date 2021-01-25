import React from 'react'
import styled from 'styled-components'
import resumeImg from '../images/Resume.png'
const Resume = () => {
    return (
        <Container id = 'resume'>
            <ResumeContainer src={resumeImg} alt='resume'>
            </ResumeContainer>
        </Container>
    )
}

export default Resume

const Container = styled.div`
    background: #15151a;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 10px 80px 10px;
`

const ResumeContainer = styled.img`
    max-width: 100%;
    height: auto;
`

