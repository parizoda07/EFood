import React from 'react'
import './form.css'
function Form() {
  return (
    <div className='container'>
      <div className="form">
        <h1 className="form-title">Subscribe to get the Latest Offer</h1>
        <h3 className="form-text">Get our daily updates by subscribing to our newspaper, please drop your email below</h3>
        <form>
          <input type="text" name="" className="input" placeholder='Enter your email addres' />
          <i class="fa-brands fa-telegram"></i>
          <button className='footer-btn'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Form