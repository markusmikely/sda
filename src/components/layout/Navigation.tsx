import { IconButton } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

import { useState } from "react"

const Navigation = () => {

    const navigate = useNavigate()
    const [toggle, setToggle] = useState<boolean>(false)

    const active = ({ isActive }: any) => {
        return isActive ? "active" : undefined
    }

    const handleClick = () => {
        setToggle(false)
    }
    return (
        <>
            <nav id="navigation" className={(toggle) ? 'show' : 'hide'}>
                <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => setToggle(!toggle)}>
                    <VscChromeClose />
                </IconButton>
                <ul>
                    <li><NavLink onClick={() => handleClick()} className={active} to="/about">About</NavLink></li>
                    <li><NavLink onClick={() => handleClick()} className={active} to="/classes">Classes</NavLink></li>
                    <li><NavLink onClick={() => handleClick()} className={active} to="/teaching">Teaching</NavLink></li>
                    <li><NavLink onClick={() => handleClick()} className={active} to="/timetable">Timetable</NavLink></li>
                    <li><NavLink onClick={() => handleClick()} className={active} to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => setToggle(!toggle)}>
                <GiHamburgerMenu />
            </IconButton>
            
        </>
    )
}

export default Navigation