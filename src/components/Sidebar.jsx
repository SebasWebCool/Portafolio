import React from 'react'
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <ul className='list_sidebar'>
            <li className='list_item_sidebar'>
                <a href="https://www.linkedin.com/in/sebasti%C3%A1n-e-d%C3%ADaz-ram%C3%ADrez-3a4960244/" target='_blank'>
                    <i className='bx bxl-linkedin-square' ></i>
                </a>
            </li>
            <li className='list_item_sidebar'>
                <a href="https://www.instagram.com/sebasdiazram/" target='_blank'>
                    <i className='bx bxl-instagram'></i>
                </a>
            </li>
            <li className='list_item_sidebar'>
                <a href="https://www.facebook.com/sebasdiazram" target='_blank'>
                    <i className='bx bxl-facebook-circle' ></i>
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar