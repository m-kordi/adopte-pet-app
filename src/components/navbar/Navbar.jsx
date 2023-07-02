import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import { FcHome,FcDecision, FcAssistant } from "react-icons/fc";
import {motion} from "framer-motion"

function Navbar() {
    return (
    <div className='nav-con'>
        <div className='nav-imp'>
            <ul className='nav-ul'>
                <motion.li className="box" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01]}}>
                    <NavLink to="/"><FcHome className='icon'/><div className='text'>المركز</div></NavLink>
                </motion.li>
                <motion.li className="box" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.4, ease: [0, 0.71, 0.2, 1.01]}}>
                    <NavLink to="/adopte"><FcAssistant className='icon'/><div className='text'>طلب تبني</div></NavLink>
                </motion.li>
                <motion.li className="box" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.6, delay: 0.2, ease: [0, 0.71, 0.2, 1.01]}}>
                    <NavLink to="/advertis"><FcDecision className='icon'/><div className='text'>من نحن</div></NavLink>
                </motion.li>
            </ul>
        </div>
    </div>
)
}

export default Navbar