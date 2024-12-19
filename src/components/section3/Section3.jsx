import React from 'react'
import './section3.css'
import phones from './Group 178.jpg'
import AppStore from './Store=App Store, Style=Black.jpg'
import Google from './Store=Google Play, Style=Black.jpg'
function Section3() {
    return (
        <div className='container'>
            <div className="section3">
                <div className="section3-left">
                    <h1 className='sec3-title'>Download Our <span>Mobile App</span></h1>
                    <h5 className="sec3-text">It's all at your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount</h5>
                    <span className="sec3-span">
                        <img src={AppStore} alt="" />
                        <img src={Google} alt="" />
                    </span>
                </div>
                <div className="section3-right">
                    <img src={phones} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section3