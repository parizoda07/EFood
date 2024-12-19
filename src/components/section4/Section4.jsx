import React from 'react'
import './section4.css'
import Photo from './Mask Group.jpg'
import left from './ArrowLeft.jpg'
import right from './Group 27.jpg'
function Section4() {
  return (
    <div className='container'>
        <h1 className="sec4-title">What Our Client Are <span>Saying</span></h1>
        <div className="section4">
            <div className="sec4-left">
                <img className='sec4-img' src={Photo} alt="" />
            </div>
            <div className="sec4-right">
                <h4 className="sec4-text">
                EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; 
                </h4>
              <div className='sec4-bottom'>
              <span>
                    <p>Anglina Jole</p>
                    <h6 className='sec4Span-text'>Food lover</h6>
                </span>
                <span >
                    <img  src={left} alt="" />
                    <img  src={right} alt="" />
                </span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Section4