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
            <h3 className='about_text__title'>Know Me</h3>
            <p>Active, dynamic, with very good analytical skills. I'm a Full Stack developer ready to use my skills and knowledge to add value to the projects and objectives of the company. <br /> <br />
              I have done projects using: <br />
              <div className='about_text__tec'>
                <div>
                  <h4>Front</h4>
                  <ul>
                    <li>React</li>
                    <li>Next</li>
                    <li>React-Redux</li>
                    <li>React-Router</li>
                    <li>Tailwind</li>
                  </ul>
                </div>
                <div>
                  <h4>Back</h4>
                  <ul>
                    <li>Express</li>
                    <li>Postgress</li>
                    <li>Django</li>
                    <li>Sanity</li>
                  </ul>
                </div>
              </div>
              
               <br />
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