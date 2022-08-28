import React from 'react'
import '../styles/Navbar.css'
import { useState } from 'react'
const Navbar = () => {

const [btnNav, setBtnNav] = useState(false)

const handleNav = () => {
    if(btnNav === true){
        setBtnNav(false)
    }else{
        setBtnNav(true)
    }
}

let scrollY = window.scrollY
window.onscroll = function() {
    let actualScroll  = window.scrollY
    if(scrollY >= actualScroll){
        document.getElementById('nav').style.top = '-12vh'
    } else{
        document.getElementById('nav').style.top ='0'
    }
    scrollY = actualScroll
}

  return (
    <nav className='nav_cont' id='nav'>
        <div className='nav_logo'>
            {/* <img src="#" alt="Sebastian`s Logo" /> */}
        </div>
        <ul className={btnNav ?'nav_list_btn': `nav_list `}>
            <li className='nav_item'>
                <a href="#home">Home</a>
            </li>
            <li className='nav_item'>
                <a href="#aboutMe">About me</a>
            </li>
            {/* <li className='nav_item'>
                <a href="#studies">Studies</a>
            </li> */}
            <li className='nav_item'>
                <a href="#skills">Skills</a>
            </li>
            <li className='nav_item'>
                <a href="#proyects">Proyects</a>
            </li>
            <li className='nav_item'>
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <button onClick={handleNav} className='nav_btn '><span className="material-symbols-outlined">
filter_list
</span></button>
    </nav>
  )
}

export default Navbar