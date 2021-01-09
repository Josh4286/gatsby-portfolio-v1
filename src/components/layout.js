import React, {useState} from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import Navbar from "./Navbar"
import MobileNav from "./MobileNav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => (
    setIsOpen(!isOpen)
  )

  return (
    <>
    <GlobalStyle/>
      <MobileNav isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
        <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
