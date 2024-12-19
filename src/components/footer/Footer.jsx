import React from 'react'
import './footer.css'
import logo from './EFood.jpg'
import location from './Location.jpg'
import calling from './Calling.jpg'
import message from './Message.jpg'
import instagram from './instagram.jpg'
import twitter from './twitter.jpg'
import facebook from './facebook.jpg'
import pinterest from './pinterest.jpg'
function Footer() {
    return (
        <div className='container'>
            <div className="footer-list">

                <div className="footer-list1">
                    <img className='footer-logo' src={logo} alt="" />
                    <span className='footer-span'>
                        <img className='location' src={location} alt="" />
                        <h3 className='footer-h3'>Dhaka, Bangladesh</h3>
                    </span>

                    <span className='footer-span'>
                        <img className='location' src={calling} alt="" />
                        <h3 className='footer-h3'>Dhaka, Bangladesh</h3>
                    </span>

                    <span className='footer-span'>
                        <img className='location' src={message} alt="" />
                        <h3 className='footer-h3'>Dhaka, Bangladesh</h3>
                    </span>
                    <span className='footer-icon'>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={pinterest} alt="" />
                    </span>
                </div>


                <div className="footer-list2">
                    <div>
                        <h3 className='footer-words'>Service</h3>
                        <h4 className="footer-link">How it works</h4>
                        <h4 className="footer-link">Home delivery</h4>
                        <h4 className="footer-link">Products</h4>
                        <h4 className="footer-link">Menu</h4>
                    </div>

                    <div>
                        <h3 className='footer-words'>Company</h3>
                        <h4 className="footer-link">About Us</h4>
                        <h4 className="footer-link">News</h4>
                        <h4 className="footer-link">Our trusted partner</h4>
                        <h4 className="footer-link">New users FAQ</h4>
                    </div>

                    <div>
                        <h3 className='footer-words'>Supports</h3>
                        <h4 className="footer-link">Help center</h4>
                        <h4 className="footer-link">Feedback</h4>
                        <h4 className="footer-link">Contact Us</h4>
                        <h4 className="footer-link">Terms conditins</h4>
                    </div>

                    <div>
                        <h3 className='footer-words'>Resources</h3>
                        <h4 className="footer-link">Download app</h4>
                        <h4 className="footer-link">Blog</h4>
                        <h4 className="footer-link">What’s new</h4>
                        <h4 className="footer-link">Sitemap</h4>
                    </div>
                </div>
            </div>

<hr />
<div className='footer-div'>
    <h4 className='footer-teg'>© 2021 EFood - All rights reserved.</h4>
    <span className='footer-span2'>
        <h4 className="footer-teg">Privacy</h4>
        <h4 className="footer-teg">Security</h4>
        <h4 className="footer-teg">Terms</h4>
    </span>
</div>


        </div>
    )
}

export default Footer