import React from 'react'
import '../styles/Navbar.css'
import { useState } from 'react'
const Navbar = () => {

    const [btnNav, setBtnNav] = useState(false)

    const handleNav = () => {
        if (btnNav === true) {
            setBtnNav(false)
        } else {
            setBtnNav(true)
        }
    }

    let scrollY = window.scrollY
    window.onscroll = function () {
        let actualScroll = window.scrollY
        if (scrollY >= actualScroll) {
            document.getElementById('nav').style.top = '-100px'
        } else {
            document.getElementById('nav').style.top = '0'
        }
        scrollY = actualScroll
    }

    return (
        <nav className='nav_cont' id='nav'>
            <div className='nav_cont_btnlogo'>
                {/* <div className='nav_logo'>
                    {/* <img src="#" alt="Sebastian`s Logo" /> 
                </div> */}
                <div className='nav_donwnload'>
                    <a href="CV_Sebastian_Diaz_Full-Stack(1).pdf" download><button className='nav_donwnload_btn'><p>Download CV</p> </button></a>
                </div>
            </div>
            <ul className={btnNav ? 'nav_list_btn' : `nav_list `}>
                <li className='nav_item'>
                    <a href="#home">Home</a>
                </li>
                <li className='nav_item'>
                    <a href="#aboutme">About me</a>
                </li>
                {/* <li className='nav_item'>
                <a href="#studies">Studies</a>
            </li> */}
                <li className='nav_item'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='nav_item'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='nav_item'>
                    <a href="#cont-form">Contact</a>
                </li>
            </ul>
            <button onClick={handleNav} className='nav_btn '><span className="material-symbols-outlined">
                filter_list
            </span></button>
        </nav>
    )
}

export default Navbar