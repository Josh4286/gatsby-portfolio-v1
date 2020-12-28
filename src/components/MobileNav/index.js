import React from 'react'
import { MobileNavContainer, Icon, CloseIcon, MobileWrapper, MobileMenu, MobileLinks, MobileBtnWrap , Button} from './MobileNavElements'
//import {Button} from "../Button"
import { menuData } from '../Navbar/MenuData'

const MobileNav = ({isOpen, toggle}) => {
    return (
        <MobileNavContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MobileWrapper>
                <MobileMenu>
                    {menuData.map((item, index) => (
                        <MobileLinks onClick={toggle} to={item.link} key={index}>
                            {item.title}
                        </MobileLinks>
                    ))}
                </MobileMenu>
                <MobileBtnWrap>
                    <Button primary="true" round="true" to="resume">View Resume</Button>
                </MobileBtnWrap>
            </MobileWrapper>
        </MobileNavContainer>
    )
}

export default MobileNav
