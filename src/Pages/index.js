import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'
import Info from '../components/Info'
import { Contact, Education, Skill } from '../components/Info/Data'

const Page = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggle =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle}/>
            <Home />
            <Info {...Education}/>
            <Info {...Skill}/>
            <Info {...Contact}/>
        </>
    )
}

export default Page
