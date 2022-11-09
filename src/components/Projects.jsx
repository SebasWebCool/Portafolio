import React from 'react'
import '../styles/Projects.css'
const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className='subtitle'>
                <h2 className=" h2">Projects</h2>
            </div>
            <div className="pro-cont trans_bg_color">
                {/* <a className="a-cont" href="https://darkside-commerce.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1663913050/Portafolio%20Img/Dark_Side_e-comers_zszi9o.png" alt="Project 4" />
                    </div>
                </a> */}
                <a className="a-cont" href="https://sebascool-search.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <div className="pro-cont-description">
                            <p>
                                It's a searching application similar to google, you can find
                                images, videos, link and news about whatever you want
                            </p>
                            <span>Description</span>
                        </div>
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1667972145/Portafolio%20Img/Wobble-search_xgkofm.png" alt="Project 5" />
                    </div>
                </a>
                <a className="a-cont" href="htt4ps://pokedex-sd.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <div className="pro-cont-description">
                            <p>
                            App about Pokemon you can find all the pokemons of series,
                            searching by the type or the name
                            , also you can see the statistics of each pokemon.
                            </p>
                            <span>Description</span>
                        </div>
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1663912837/Portafolio%20Img/pokedex_ganwij.png" alt="Project 5" />
                    </div>
                </a>
                <a className="a-cont" href="https://mellow-donut-27d12e.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <div className="pro-cont-description">
                            <p>
                            You can see all the planets that exist in Rick and Morty series, put a number on the searching and see all the characters that appear in that planet.
                            </p>
                            <span>Description</span>
                        </div>
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Rick_And_Morty_t29jc3.png" alt="Project 1" />
                    </div>
                </a>
                <a className="a-cont" href="https://enchanting-gelato-c05688.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <div className="pro-cont-description">
                            <p>
                            It's a CRUD app about users what means, you can create a user putting information like email and birthday, then you can edit it and delete it if you want
                            </p>
                            <span>Description</span>
                        </div>
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1664155148/Portafolio%20Img/Users_CRUD_bbwp1d.png" alt="Project 4" />
                    </div>
                </a>
                <a className="a-cont" href="https://heroic-gnome-d4ece6.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <div className="pro-cont-description">
                            <p>
                            Appears quotas of some important person, every time you click the button or reloads the page change the quota and the color.
                            </p>
                            <span>Description</span>
                        </div>
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Quote_Box_hewref.png" alt="Project 2" />
                    </div>
                </a>
                <a className="a-cont" href="https://harmonious-torte-484966.netlify.app/" target="_blank" >
                    <div className="pro-cont-img">
                        <div className="pro-cont-description">
                            <p>
                            It's an App about the weather of your current location, you can see the temperature in degrees or kelvins.
                            </p>
                            <span>Description</span>
                        </div>
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Weather_App_ziqgsr.png" alt="Project 3" />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Projects