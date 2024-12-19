import React from 'react'
import './section2.css'
import photo1 from './photo1.jpg'
import photo2 from './photo2.jpg'
import photo3 from './photo3.jpg'
import photo4 from './photo4.jpg'
import photo5 from './photo5.jpg'
import photo6 from './photo6.jpg'
import timer from './timer 1.jpg'
import next from './next.jpg'

function Section2() {
    return (
        <div className='container'>
            <div className="kard-wrapper">
                <div className="kard">
                    <img className='sec2-img' src={photo1} alt="" />
                    <h3 className="sec2-title">Blaze Pizza</h3>
                    <span className="sec2-span">
                        <img src={timer} alt="" />
                        <h5 className='sec2-time'>11.00 AM - 10.00 PM</h5>
                        <img src={next} alt="" />
                    </span>
                </div>


                <div className="kard">
                    <img className='sec2-img' src={photo2} alt="" />
                    <h3 className="sec2-title"> Pizza Ranch</h3>
                    <span className="sec2-span">
                        <img src={timer} alt="" />
                        <h5 className='sec2-time'>11.00 AM - 10.00 PM</h5>
                        <img src={next} alt="" />
                    </span>
                </div>


                <div className="kard">
                    <img className='sec2-img' src={photo3} alt="" />
                    <h3 className="sec2-title">Doin's Pizza Hut</h3>
                    <span className="sec2-span">
                        <img src={timer} alt="" />
                        <h5 className='sec2-time'>11.00 AM - 10.00 PM</h5>
                        <img src={next} alt="" />
                    </span>
                </div>


                <div className="kard">
                    <img className='sec2-img' src={photo4} alt="" />
                    <h3 className="sec2-title">Royel Burger</h3>
                    <span className="sec2-span">
                        <img src={timer} alt="" />
                        <h5 className='sec2-time'>11.00 AM - 10.00 PM</h5>
                        <img src={next} alt="" />
                    </span>
                </div>



                <div className="kard">
                    <img className='sec2-img' src={photo5} alt="" />
                    <h3 className="sec2-title">KFC Restaurant</h3>
                    <span className="sec2-span">
                        <img src={timer} alt="" />
                        <h5 className='sec2-time'>11.00 AM - 10.00 PM</h5>
                        <img src={next} alt="" />
                    </span>
                </div>



                <div className="kard">
                    <img className='sec2-img' src={photo6} alt="" />
                    <h3 className="sec2-title">Star Food</h3>
                    <span className="sec2-span">
                        <img src={timer} alt="" />
                        <h5 className='sec2-time'>11.00 AM - 10.00 PM</h5>
                        <img src={next} alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Section2