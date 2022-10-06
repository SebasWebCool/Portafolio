import React from 'react'
import '../styles/contacts.css'
const Contacts = () => {
  return (
    <section className="contact" id="contacts">
            <div className="cont-grid trans_bg_color" >
                <div className="cont-grid-num">
                    <i className='bx bxs-phone' ></i>
                    <h3>Phone Number</h3>
                    <p>+58-412-0169581</p>
                </div>
                <div className="cont-grid-num">
                    <i className='bx bxs-envelope' ></i>
                    <h3>Email</h3>
                    <p>sebasweb2000@gmail.com</p>
                </div>
                <a href="https://www.instagram.com/sebasdiazram/" target="_blank" className="cont-grid-num">
                    <i className='bx bxl-instagram'></i>
                    <h3>Instagram</h3>
                </a>
                <a href="https://www.facebook.com/sebasdiazram" target="_blank" className="cont-grid-num">
                    <i className='bx bxl-facebook-circle' ></i>
                    <h3>Facebook</h3>
                </a>
                <a href="https://www.linkedin.com/in/sebasti%C3%A1n-e-d%C3%ADaz-ram%C3%ADrez-3a4960244/" target="_blank" className="cont-grid-num">
                    <i className='bx bxl-linkedin-square' ></i>
                    <h3>Linkedin</h3>
                </a>
            </div>  
        </section>
  )
}

export default Contacts