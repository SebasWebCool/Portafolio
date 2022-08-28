import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Contacts from './components/Contacts'
import Form from './components/Form'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'

function App() {

  return (
    <div className="App">
      {/* <Sidebar/> */}
      <Navbar />
      <Header/>
      <main className='main_cont'>
        <AboutMe />
        <Skills />
        <Projects />
        <Form />
        <Contacts />
      </main>
    </div>
  )
}

export default App
