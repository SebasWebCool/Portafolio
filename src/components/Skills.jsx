import React from 'react'
import '../styles/Skill.css'

const Skills = () => {
    return (
        <div className='skills_cont' id='skills'>
            <div className="subtitle">
                <h2 className='h2'>Skills</h2>
            </div>
            <div className="cards trans_bg_color">
                <div className="flip_card">
                    <div className="flip_card_inner">
                        <div className="flip_card_front">
                            <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737600/Portafolio%20Img/html_t9rcrd.png" alt="img html" />
                        </div>
                        <div className="flip_card_back">
                            <div className="circle_cont cc1">
                                <div className="box">
                                    <div className="porcent">
                                        <svg>
                                            <circle cx="70" cy="70" r="70" />
                                            <circle className='c2' cx="70" cy="70" r="70" />
                                        </svg>
                                        <div className="number">
                                            <h2>90<span>%</span></h2>
                                        </div>
                                        <h3 className="text">HTML</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flip_card">
                    <div className="flip_card_inner">
                        <div className="flip_card_front">
                            <img src="https://res.cloudinary.com/marcomadera/image/upload/v1602894559/Blog/7/css_k23ypb.png" alt="img css" />
                        </div>
                        <div className="flip_card_back">

                            <div className="circle_cont cc2">
                                <div className="box">
                                    <div className="porcent">
                                        <svg>
                                            <circle cx="70" cy="70" r="70" />
                                            <circle className='c2' cx="70" cy="70" r="70" />
                                        </svg>
                                        <div className="number">
                                            <h2>80<span>%</span></h2>
                                        </div>
                                        <h3 className="text">CSS</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flip_card">
                    <div className="flip_card_inner">
                        <div className="flip_card_front">
                            <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737596/Portafolio%20Img/javascript_slwiky.png" alt='Javascript img'/>
                        </div>
                        <div className="flip_card_back">
                            <div className="circle_cont cc3">
                                <div className="box">
                                    <div className="porcent">
                                        <svg>
                                            <circle cx="70" cy="70" r="70" />
                                            <circle className='c2' cx="70" cy="70" r="70" />
                                        </svg>
                                        <div className="number">
                                            <h2>85<span>%</span></h2>
                                        </div>
                                        <h3 className="text">Javascript</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flip_card">
                    <div className="flip_card_inner">
                        <div className="flip_card_front">
                            <img src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" alt="img react" />
                        </div>
                        <div className="flip_card_back">
                           <div className="circle_cont cc4">
                                <div className="box">
                                    <div className="porcent">
                                        <svg>
                                            <circle cx="70" cy="70" r="70" />
                                            <circle className='c2' cx="70" cy="70" r="70" />
                                        </svg>
                                        <div className="number">
                                            <h2>95<span>%</span></h2>
                                        </div>
                                        <h3 className="text">React</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills