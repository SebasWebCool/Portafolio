import React from 'react'
import '../styles/animations/scrollingText.css'
import '../styles/animations/machine.css'
import '../styles/animations/laserTag.css'
const Header = () => {
    return (
        <header className='cont bg_black' id='home'>
            <div className='header_bg'>
                <div className="header_cont">
                    <div class="animation-container">
                        <div class="lightning-container">
                            <div class="lightning white"></div>
                            <div class="lightning red"></div>
                        </div>
                        <div class="boom-container">
                            <div class="shape circle big white"></div>
                            <div class="shape circle white"></div>
                            <div class="shape triangle big yellow"></div>
                            <div class="shape disc white"></div>
                            <div class="shape triangle blue"></div>
                        </div>
                        <div class="boom-container second">
                            <div class="shape circle big white"></div>
                            <div class="shape circle white"></div>
                            <div class="shape disc white"></div>
                            <div class="shape triangle blue"></div>
                        </div>
                    </div>

                    <div class="content">
                        <div class="content__container">
                            <p class="content__container__text">
                                Hello, I am
                            </p>
                            <ul class="content__container__list">
                                <li class="content__container__list__item">a Front-end Developer</li>
                                <li class="content__container__list__item">Sebastian Diaz</li>
                            </ul>
                        </div>
                    </div>
                    <div className="header_text">
                        <p className='header_text_p machine_a'>Allways looking for improvement and knowledge in the world of programming<span >|</span></p>
                    </div>

                    <div className="header__btns">
                        <a href="#cont-form"><button className='header_btn btn'><p>Contact Me</p> </button></a>
                        <a href="https://www.linkedin.com/in/sebasti%C3%A1n-e-d%C3%ADaz-ram%C3%ADrez-3a4960244/"><i className='bx bxl-linkedin-square' ></i></a>
                        {/* <a download="Sebastian_Diaz_CV" href="./public/CVSebastianDiaz.pdf" target="_blank"><button className='header_btn btn'><p>Download CV</p> </button></a> */}
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header