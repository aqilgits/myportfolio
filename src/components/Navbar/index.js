import React, {useState, useEffect} from 'react'
import { Nav, NavbarContainer, NavbarLogo, NavMenu, NavLink, BurgerIcon, NavItem } from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavbarLogo to='home'>Lukman</NavbarLogo>
                    <NavMenu>
                        <NavItem to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-79}
                            >
                            <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem to='education'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-79}>
                            <NavLink>Education</NavLink>
                        </NavItem>
                        <NavItem to='skill'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-79}>
                            <NavLink>Skill</NavLink>
                        </NavItem>
                        <NavItem to='projet'
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-79}
                            >
                            <NavLink>Project</NavLink>
                        </NavItem>
                        <NavItem to='contact'
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-79}
                            >
                            <NavLink>Contact</NavLink>
                        </NavItem>
                        <BurgerIcon onClick={toggle}>
                            <FaBars size={30}/>
                        </BurgerIcon>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
