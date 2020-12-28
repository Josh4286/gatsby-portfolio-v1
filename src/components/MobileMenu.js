import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

const MobileMenu = () => {
    return (
        <Container>
            <Icon>
                <CloseIcon/>
            </Icon>
        </Container>
    )
}

export default MobileMenu

const Container = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;

`

const CloseIcon = styled(FaTimes)`
    color: #fff
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`