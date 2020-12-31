import React from 'react'
import { useRef } from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import EllipseOne from './../images/Ellipse 1.svg'
import EllipseTwo from './../images/Ellipse 2.svg'
import EllipseThree from './../images/Ellipse 3.svg'
import EllipseFour from './../images/Ellipse 4.svg'
//import { useInView } from "react-intersection-observer";

const SectionOne = () => {
    const constraintsRef = useRef(null);

    return (
        <Container id='animation'>
            <Wrapper>
                <ColumnLeft>
                    <Content>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >Animation</motion.h1>
                        <p>Click and drag the images</p>
                    </Content>
                    <motion.div className="container" ref={constraintsRef}>
                        <Image src={EllipseOne} alt='ellipse'
                            id='PictureOne'
                            whileTap={{ scale: 0.9 }}
                            drag={true}
                            dragConstraints={
                                constraintsRef
                            }
                            dragElastic={0.1} />
                        <Image src={EllipseTwo} alt='ellipse'
                            whileTap={{ scale: 0.9 }}
                            drag={true}
                            dragConstraints={constraintsRef}
                            dragElastic={0.1} />
                        <Image src={EllipseThree} alt='ellipse'
                            whileTap={{ scale: 0.9 }}
                            drag={true}
                            dragConstraints={constraintsRef}
                            dragElastic={0.1} />
                        <Image src={EllipseFour} alt='ellipse'
                            whileTap={{ scale: 0.9 }}
                            drag={true}
                            dragConstraints={constraintsRef}
                            dragElastic={1} />
                    </motion.div>
                </ColumnLeft>
            </Wrapper>
        </Container>
    )
}

export default SectionOne

const Container = styled.div`
    height: 100vh;
    min-height: 480px;
    color: #fff;
    position: relative;
    z-index: 100;
    max-width: 100%;
`
const Wrapper = styled(motion.div)`
    display: grid;
    height: 100vh;
    background: #15151a;
`
const Content = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    height: 100%;
    width: 100%;
    max-height: 100%
    padding: 0;
    color: #fff;
    line-height: 1.1;
    line-weight: bold;
    //border:  solid red 5px;
`

const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    margin: 0px;
    padding: 0px;
    @media screen and (max-width: 768px) {
        max-width: 170px;
        max-height: 170px;
    }
    @media screen and (max-width: 420px) {
        max-width: 100px;
        max-height: 100px;
    }
`

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
        margin-bottom: 0.5rem;
        font-size: clamp(2.25rem, 6vw, 4rem);
    }

    p {
        margin: 2rem 0;
        font-size: clamp(1rem, 2vw, 3rem);
    }

    line-height: 1.1;

    .container {
        top:  calc(-100vh - 860px - 860px);
        width: 100%;
        height: calc(100vh + 860px + 860px + 100vh + 860px);
        display: flex;
        place-content: center;
        place-items: center;
        overflow: hidden;
        background: transparent;
        border-radius: 30px;
        position: absolute;
        //border:  solid red 5px;
        @media screen and (max-width: 768px) {
            top:  calc(-100vh - 860px - 860px - 400px);
            height: calc(100vh + 860px + 860px + 100vh + 860px + 600px);
        }
    }


    ${Image}:nth-child(1){
        top: calc(100vh + 860px + 860px + 10vh);
        left: calc(10vw);
        @media screen and (max-width: 768px) {
            top: calc(100vh + 860px + 860px + 400px + 10vh);
            left: 10px;
        }
    }

    ${Image}:nth-child(2){
        top: calc(100vh + 860px + 860px + 40vh);
        right: 10px;
        @media screen and (max-width: 768px) {
            top: calc(100vh + 860px + 860px + 400px + 20vh);
            right: 10vw;
        }
    }

    ${Image}:nth-child(3){
        top: calc(100vh + 860px + 860px + 60vh);
        left: 50px;
        @media screen and (max-width: 768px) {
            top: calc(100vh + 860px + 860px + 400px + 60vh);
            left: 100px;
        }
    }

    ${Image}:nth-child(4){
        top: calc(100vh + 860px + 860px + 75vh);
        right: 75px;

        @media screen and (max-width: 768px) {
            top: calc(100vh + 860px + 860px + 400px + 75vh);
            right: 0px;
        }
    }
`