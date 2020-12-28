import React from 'react'
import styled from 'styled-components'
//import ImageOne from "../assets/ImageOne.svg"

const SectionOne = () => {
    return (
        <Container id='animation'>
            <Wrapper>
                <ColumnLeft>
                    <h1>Animation</h1>
                    <p>Click and drag the images</p>
                </ColumnLeft>
                <ColumnRight>
                    {/*<Image src={ImageOne} alt='image'/>*/}
                </ColumnRight>

            </Wrapper>
        </Container>
    )
}

export default SectionOne

const Container = styled.div`
    height: 100vh;
    background: #15151a;
    color: #fff;
    position: relative;
    z-index: 3;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) / 2);

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1 {
        margin-bottom: 0.5rem;
        font-size: clamp(3rem, 6vw, 4rem);
    }

    p {
        margin: 2rem 0;
        font-size: clamp(1.25rem, 2vw, 3rem);
    }

    line-height: 1.1;
`

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2 rem;
    position: relative;
`

//const Image = styled.img``