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
                        <img src="src/img/RickAndMorty.png" alt="Project 1" />
                    </div>
                </a>
                <a className="a-cont" href="https://heroic-gnome-d4ece6.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="src/img/QuoteBox.png" alt="Project 2" />
                    </div>
                </a>
                <a className="a-cont" href="https://harmonious-torte-484966.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="src/img/WeatherApp.png" alt="Project 3" />
                    </div>
                </a>
                <a className="a-cont" href="https://enchanting-gelato-c05688.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="src/img/UsersCRUD.png" alt="Project 4" />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Projects