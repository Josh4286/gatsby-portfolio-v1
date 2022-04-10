import React, {useState, useEffect} from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavBtn } from './NavbarElements'
import { menuData } from './MenuData'
import { FaBars } from 'react-icons/fa'
import {Button} from "../Button"
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Joshua Wong</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavLinks  scrollNav={scrollNav} to={item.link} key={index} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            {item.title}
                        </NavLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button href="mailto:joshuawongcy@outlook.com" scrollNav={scrollNav} to='contact' smooth='true' duration={500} spy='true' exact='true' offset={-80} primary="true" round="true">Contact Me</Button>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
