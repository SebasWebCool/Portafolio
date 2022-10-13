import React from 'react'
import '../styles/AboutMe.css'
import '../styles/animations/floating.css'

const AboutMe = () => {
  return (
    <div className='cont' id='aboutme'>
      <div className="subtitle">
        <h2 className='h2'>About Me</h2>
      </div>
      <div className="about_cont_inf trans_bg_color">
        <div className="about_inf">
          <div className="about_text float">
            <h3>Know Me</h3>
            <p>Active, dynamic, with very good analytical skills. I'm a front-end developer ready to use my skills and knowledge to add value to the projects and objectives of the company. <br /> <br />
              I have done several projects using React in a
              Academlo Bootcamp on Full Stack Web Development,
              in which I'm still in training. <br /><br />
              Passionate about technology, I'm excited to be a part of an organization where I can gain more experience and allow me to contribute my skills with commitment, effort, and dedication to satisfying the needs of the company.
            </p>
          </div>
          <div className='about_img float'>
            <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737598/Portafolio%20Img/yo_mmwevb.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe