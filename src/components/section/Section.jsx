import React from 'react'
import './section.css'
import SectionImg from './section-img.jpg'
import Timer from './Timer icon.jpg'
import Delivery from './Delivery icon.jpg'
import Resturent from './Resturent icon.jpg'

function section() {
  return (
        <div className="container">
           <div className="section">
           <div className="sec-left">
                <img src={SectionImg} alt="" />
            </div>
            <div className="sec-right">
                <h1 className='sec-title'><span>Stay</span>At Home, We Will <br />Provide <span>Good Food</span></h1>
                <p className="sec-text">We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.</p>
                <span className='sec-span'>
                    <img className='secSpan-img' src={Timer} alt="" />
                    <h3 className='secSpan-text'>Fasted Delivery in 30 Minutes</h3>
                </span>
                <span className='sec-span'>
                    <img className='secSpan-img' src={Delivery} alt="" />
                    <h3 className='secSpan-text'>300+ Delivery Mn</h3>
                </span>
                <span className='sec-span'>
                    <img className='secSpan-img' src={Resturent} alt="" />
                    <h3 className='secSpan-text'>500+ Restaurant & Cafe Shop</h3>
                </span>
                <button className='sec-btn'>See More</button>
            </div>
           </div>
        </div>
  )
}

export default section