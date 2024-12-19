import './hero.css'
import Scooter from "./Scooter Guy.jpg"

import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Super Fast <span>Food <br />
            Delivery</span> Service</h1>
          <p className="hero-text">We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
          <span className='btn-link'>
            <button className='btn'>Explore Food</button>
            <a className='hero-link' href="">Download App</a>
          </span>
        </div>
        <span className="hero-right">
          <img className='hero-img' src={Scooter} alt="" />
          
        </span>
      </div>
    </div>
  )
}

// console.log(Scooter);
export default Hero