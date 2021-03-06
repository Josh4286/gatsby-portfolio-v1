import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
//import Video from "../assets/videos/video.mp4"

const Missing = () => {
    return (
        <MissingContainer>
            <Herobg>
                {/*<VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>*/}
            </Herobg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>404</HeroH1>
                    <HeroP>Looks like this link doesn't exist</HeroP>
                    <Button primary="true" big="true" round="true" to="/">Home Page</Button>
                </HeroItems>
            </HeroContent>
        </MissingContainer>
    )
}

export default Missing

const MissingContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;

    :before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
                180deg,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0.2) 100%
            ),
            linear-gradient(
                180deg,
                rgba(0,0,0,0) 0%,
                transparent 100%
            );
    }
`

const Herobg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

// const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
// `

const HeroContent = styled.div`
    z-index: 3;
    height: 100vh;
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    height: 100vh;
    max-height: 100%
    padding: 0;
    color: #fff;
    line-height: 1.1;
    line-weight: bold;
`

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`

const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    font-weight: 400;
    margin-bottom: 2rem;
`