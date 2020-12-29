import React from 'react'
import { useRef } from "react"
import styled from 'styled-components'
import {motion} from 'framer-motion'
import EllipseOne from './../images/Ellipse 1.svg'
import EllipseTwo from './../images/Ellipse 2.svg'
import EllipseThree from './../images/Ellipse 3.svg'
import EllipseFour from './../images/Ellipse 4.svg'

const SectionOne = () => {
    const constraintsRef = useRef(null);
    return (
        <Container id='animation' >
            <Wrapper>
                <ColumnLeft>
                    <motion.h1
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                    >Animation</motion.h1>
                    <p>Click and drag the images</p>

                </ColumnLeft>
                <ColumnRight>
                    <Image src={EllipseOne} alt='ellipse'
                    whileTap={{scale:0.9}}
                    drag={true}
                    dragConstraints={{left: -10, right: 150, bottom: 75}}
                    dragElastic={0.1}/>
                    <Image src={EllipseTwo} alt='ellipse'
                                        whileTap={{scale:0.9}}
                                        drag={true}
                                        dragConstraints={{left: -200, right: -10, bottom: 10}}
                                        dragElastic={0.1}/>
                    <Image src={EllipseThree} alt='ellipse'
                                        whileTap={{scale:0.9}}
                                        drag={true}
                                        dragConstraints={{left: 0, right: 0, bottom: 10}}
                                        dragElastic={0.1}/>
                    <Image src={EllipseFour} alt='ellipse'
                                        whileTap={{scale:0.9}}
                                        drag={true}
                                        dragConstraints={{left: -200, right: -10, top: -500, bottom: 100}}
                                        dragElastic={1}/>
                </ColumnRight>
            </Wrapper>
        </Container>
    )
}

export default SectionOne

const Container = styled.div`
    height: 100vh;
    min-height: 480px;
    background: #15151a;
    color: #fff;
    position: relative;
    z-index: 10;
    max-width: 100vw;
`
const Wrapper = styled(motion.div)`
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
        font-size: clamp(2.25rem, 6vw, 4rem);
    }

    p {
        margin: 2rem 0;
        font-size: clamp(1rem, 2vw, 3rem);
    }

    line-height: 1.1;
`
const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 768px) {
        max-width: 100px;
        max-height: 100px;
    }

`

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2 rem;
    position: relative;
    min-height: 50px;
    ${Image}:nth-child(1){
        top: 10px;
        left: 10px;
        @media screen and (max-width: 420px) {
            top: 0px;
            left: 10px;
        }
    }

    ${Image}:nth-child(2){
        bottom: 170px;
        right: 10px;
        @media screen and (max-width: 420px) {
            bottom: -30px;
            right: 0px;
        }
    }

    ${Image}:nth-child(3){
        top: 350px;
        left: 50px;
        @media screen and (max-width: 420px) {
            top: 10px;
            left: 100px;
        }
    }

    ${Image}:nth-child(4){
        bottom: 100px;
        right: 75px;

        @media screen and (max-width: 420px) {
            bottom: 75px;
            right: 0px;
        }
    }
`

