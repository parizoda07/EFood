import React from 'react'
import './cards.css'
import Burger1 from './item_01-480x480 1 (4).jpg'
import Burger2 from './Burger.jpg'
import Burger3 from './item_01-480x480 1 (1).jpg'
import Burger4 from './item_01-480x480 1 (2).jpg'
import Burger5 from './item_01-480x480 1 (3).jpg'
import Satrs from './Stars.jpg'
import Image from './Content.jpg'
function cards() {
  return (
   <div className="container">
     <div>
        <div className="cards-wrapper">
            <div className="cards">
                <img className='cards-img' src={Burger1} alt="" />
                <img className='cards-img2' src={Satrs} alt="" />
                <h3 className="cards-title">Cheesebuger with Salad</h3>
                <h5 className="cards-price">$18.00</h5>
                <button className='cards-btn'>Add to Card</button>
            </div>

            <div className="cards2">
                <img className='cards-img1' src={Burger2} alt="" />
                <img className='cards-img3' src={Satrs} alt="" />
                <h3 className="cards-title2">Beef Burger</h3>
                <h5 className="cards-price2">$15.00</h5>
                <button className='cards-btn2'>Add to Card</button>
            </div>


            <div className="cards">
                <img className='cards-img' src={Burger3} alt="" />
                <img className='cards-img2' src={Satrs} alt="" />
                <h3 className="cards-title">Royel Cheesebuger</h3>
                <h5 className="cards-price">$16.00</h5>
                <button className='cards-btn'>Add to Card</button>
            </div>

            <div className="cards">
                <img className='cards-img' src={Burger4} alt="" />
                <img className='cards-img2' src={Satrs} alt="" />
                <h3 className="cards-title">Black Gamburger</h3>
                <h5 className="cards-price">$14.00</h5>
                <button className='cards-btn'>Add to Card</button>
            </div>

            <div className="cards">
                <img className='cards-img' src={Burger5} alt="" />
                <img className='cards-img2' src={Satrs} alt="" />
                <h3 className="cards-title">Chicken Burger</h3>
                <h5 className="cards-price">$15.00</h5>
                <button className='cards-btn'>Add to Card</button>
            </div>

            
        </div>
    </div>
    <img className='cards-Image' src={Image} alt="" />
   </div>
  )
}

export default cards