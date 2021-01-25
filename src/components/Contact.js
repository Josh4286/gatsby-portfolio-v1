import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Container id='contact'>
            <Start>
            <h1>Contact Me</h1>
            <p>I would love to hear from you. Get in touch with me using the following contact methods.</p>
            </Start>
            <CardContainer>
                <Card></Card>
                <Card></Card>
            </CardContainer>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    margin-top: 120px;
    margin-bottom: 120px;
`

const Start = styled.div`
    
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Card = styled.div`
    height: 500px;
    min-width: 300px;
    margin: 60px 60px 0px 60px;
    background: #fff;
    box-shadow: 0px 10px 20px rgba( 0,0,0,0.2);
    border-radius: 2rem;
    backdrop-filter: blur(2rem);
`
