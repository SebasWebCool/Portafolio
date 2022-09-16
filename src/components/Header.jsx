import React from 'react'

const Header = () => {
    return (
        <header className='cont' id='home'>
            <div className='header_bg'>
                <div className="header_cont">
                    <h1>Sebastian Diaz</h1>
                    <h2>Front-end Developer</h2>
                    <p>I am a Frontend Developer allways looking for improvement and knowledge in the worl of programing</p>
                    <div className="header__btns">
                        <a href="#cont-form"><button className='header_btn btn'><p>Contact Me</p> </button></a>
                        <a href="./public/CVSebastianDiaz.pdf" target="_blank"><button className='header_btn btn'><p>Download CV</p> </button></a>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header