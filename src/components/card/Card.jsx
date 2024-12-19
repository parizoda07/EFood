import React from 'react'
import './card.css'
import SetMenu from './SetMenu.jpg'
import AsianFood from './asianFood.jpg'
import Sandwich from './sandwich.jpg'
import Pizza from './pizza .jpg'
// import Burger from './burger.jpg'
function Card() {
  return (
  <div className="container">
      <div className='card-wrapper'>
        <div className="cart">
      {/* <img className='cart-img' src={Burger} alt="" /> */}
      <i class="burger fa-solid fa-burger"></i>
        <h4 className='cart-title'>Burger</h4>
      </div>

      <div className="card">
        <img src={Pizza} alt="" />
        <h4 className='card-title'>Pizza</h4>
      </div>

      <div className="card">
      <img  src={Sandwich} alt="" />

        <h4 className='card-title'>Sandwich</h4>
      </div>


      <div className="card">
      <img src={AsianFood} alt="" />
        <h4 className='card-title'>Asiain Food</h4>
      </div>


      <div className="card">
        <img src={SetMenu} alt="" />
        <h4 className='card-title'>Set Menu</h4>
      </div>

    </div>
  </div>
  )
}

export default Card