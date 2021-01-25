import styled from 'styled-components'
import {Link as LinkR} from 'gatsby'
import {Link as LinkS} from 'react-scroll'

//must be export because its in another file
export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#101010' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 500;
    padding: 0.5rem calc((100vw - 1900px) / 2);
    width: 100%;
    transition: 0.3s all ease;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    padding: 0 1rem;
`

export const MobileIcon = styled.div`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    height: 80px;
    &:hover{
        background: ${({scrollNav}) => (scrollNav ? '#272727' : 'transparent')};
        transition: 0.3s ease-in;
    }
    &.active {
        border-bottom: 3px solid #f26A2E;
    }
`

export const NavBtn = styled(LinkS)`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
  display: none;
}
`
