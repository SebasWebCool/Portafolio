import React from 'react'
import '../styles/AboutMe.css'
const AboutMe = () => {
  return (
    <div className='cont' id='aboutme'>
      <div className="subtitle">
        <h2 className='h2'>About Me</h2>
      </div>
      <div className="about_cont_inf">
        <div className="about_inf">
          <div className="about_text">
            <h3>How did I Started</h3>
            <p>At university I took a Programming course where I learned C++, doing several programming logic exercises. Then I did some research on my own about programming and web development. Right now I am taking a Web Development course at Academlo and there I have learned a lot about HTML, CSS, JS and React. I continue to work constantly on new projects to improve and  acquire new knowledge and expand what I already have in this programming environment.</p>
          </div>
          <div className='about_img'>
            <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737598/Portafolio%20Img/yo_mmwevb.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe