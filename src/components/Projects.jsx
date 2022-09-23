import React from 'react'
import '../styles/Projects.css'
const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className='subtitle'>
                <h2 className=" h2">Projects</h2>
            </div>
            <div className="pro-cont">
                <a className="a-cont" href="https://mellow-donut-27d12e.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Rick_And_Morty_t29jc3.png" alt="Project 1" />
                    </div>
                </a>
                <a className="a-cont" href="https://heroic-gnome-d4ece6.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Quote_Box_hewref.png" alt="Project 2" />
                    </div>
                </a>
                <a className="a-cont" href="https://harmonious-torte-484966.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Weather_App_ziqgsr.png" alt="Project 3" />
                    </div>
                </a>
                <a className="a-cont" href="https://enchanting-gelato-c05688.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Users_CRUD_ggjgs1.png" alt="Project 4" />
                    </div>
                </a>
                <a className="a-cont" href="https://pokedex-sd.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1663912837/Portafolio%20Img/pokedex_ganwij.png" alt="Project 5" />
                    </div>
                </a>
                <a className="a-cont" href="https://darkside-commerce.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1663913050/Portafolio%20Img/Dark_Side_e-comers_zszi9o.png" alt="Project 4" />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Projects