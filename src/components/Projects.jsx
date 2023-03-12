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

                <div className='pro-cont-title'>
                    <h2>Wobble</h2>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description">
                                <p>
                                    Similar to google. Search for web page links. Search and display images, videos and news. You can switch to dark mode. {'(React, React-Redux, RapidApi, JS, Tailwind)'}
                                </p>
                                <span>Description</span>
                            </div>
                            <a href="https://sebascool-search.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1667972145/Portafolio%20Img/Wobble-search_xgkofm.png" alt="Project 5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='pro-cont-title'>
                    <h2>Pokedex</h2>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description">
                                <p>
                                    Show all pokemon. You can search for them by type and by name. It also shows the data of each pokemon. {'(React, React-Redux, React-Router, Res Api, JS, CSS)'}
                                </p>
                                <span>Description</span>
                            </div>
                            <a href="https://pokedex-sd.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1663912837/Portafolio%20Img/pokedex_ganwij.png" alt="Project 5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='pro-cont-title'>
                    <h2>Users CRUD</h2>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description" >
                                <p>
                                    Full Stack app, create multiple users with personal data and display them
                                    in the page. You can also edit data and delete the
                                    user. {'(Express, Jwt, Node, Posgres, Sequelize, CSS, Hook-Forms, Html, React, Rest Api)'}
                                </p>
                                <span>Description</span>
                            </div>
                            <a href="https://enchanting-gelato-c05688.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1664155148/Portafolio%20Img/Users_CRUD_bbwp1d.png" alt="Project 4" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='pro-cont-title'>
                    <h2>Rick and Morty</h2>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description" >
                                <p>
                                    Search the characters of each planet. Show the data
                                    of the characters how many chapters appear and if they are
                                    alive or dead. {'React, React-Redux, Res Api, JS, CSS, Html)'}
                                </p>
                                <span>Description</span>
                            </div>
                            <a href="https://mellow-donut-27d12e.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Rick_And_Morty_t29jc3.png" alt="Project 1" />
                            </a>
                        </div>
                    </div>
                </div>


                <div className='pro-cont-title'>
                    <h2>Quote Box</h2>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description">
                                <p>
                                    Appears quotas of some important person, every time you click the button or reloads the page change the quota and the color.{'(CSS, Html, React, Rest Api)'}
                                </p>
                                <span>Description</span>
                            </div>
                            <a href="https://heroic-gnome-d4ece6.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Quote_Box_hewref.png" alt="Project 2" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='pro-cont-title'>
                    <h2>Weather App</h2>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description" >
                                <p>
                                    Show the weather of your location. Change the temperature from Celsius to Fareheit. {'(CSS, Html, React, Rest Api)'}
                                </p>
                                <span>Description</span>
                            </div>
                            <a href="https://harmonious-torte-484966.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Weather_App_ziqgsr.png" alt="Project 3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects