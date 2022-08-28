import React from 'react'
import '../styles/form.css'
const Form = () => {

  const form = document.getElementById('form')
  
/* Formulario */
form?.addEventListener('submit', async (e) => {
    e.preventDefault()
  
    const email = 'sebasweb2000@gmail.com'
    const URL_BASE = `https://formsubmit.co/${email}`
  
    const input = e.currentTarget.elements
    const formData = {
      name: input.name.value,
      email: input.email.value,
      message: input.message.value
    }
  
    const options = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    }
  
    /* con then y catch */
    fetch(URL_BASE, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  
    /* Con async / await */
    try {
      const res = await fetch(URL_BASE, options)
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <section id="cont-form" className="cont_form">
      <div className="subtitle">
                <h2 className='h2'> Contacts</h2>
            </div>
            
            <div className="seccion__contenido">
                <form id="form" className="form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Enter your name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter your email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="form-control" placeholder="Tell me about your great idea" rows="10"></textarea>
                  </div>
                  <input type="submit" className="btn-form" value="Submit" />
                </form>
            </div>
           
          </section>
  )
}

export default Form