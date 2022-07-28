import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { SideBar,SidebarContainer,CloseBtn, SidebarMenu, SidebarItem, SidebarLink, SidebarWrapper } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SideBar isOpen={isOpen}>
            <SidebarContainer>
                <CloseBtn onClick={toggle}>
                    <FaTimes size={40}/>
                </CloseBtn>
                <SidebarMenu>
                    <SidebarWrapper>
                        <SidebarItem>
                            <SidebarLink to='home' onClick={toggle}>
                                Home
                            </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to='education' onClick={toggle}>
                                Education
                            </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to='skill' onClick={toggle}>
                                Skill
                            </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to='project' onClick={toggle}>
                                Project
                            </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to='contact' onClick={toggle}>
                                Contact
                            </SidebarLink>
                        </SidebarItem>
                    </SidebarWrapper>
                </SidebarMenu>
            </SidebarContainer>
        </SideBar>
    )
}

export default Sidebar
