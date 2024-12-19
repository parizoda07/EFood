import React from 'react'
import './navbar.css'
import logo from './EFood.jpg'
function Navbar() {
  return (
   <div className="container">
     <div className='nav'>
   <img src={logo} alt="" />
        <ul className="list">
            <li><a className='link' href="#"></a>Home</li>
            <li><a className='link' href="#"></a>About</li>
            <li><a className='link' href="#"></a>Services</li>
            <li><a className='link' href="#"></a>Contact Us</li>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <button className="btn">Sign Up</button>
        </ul>
    </div>
   </div>
  )
}

export default Navbar