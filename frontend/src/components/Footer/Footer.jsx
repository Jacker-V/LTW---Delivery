import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Welcome to our food ordering website, where fresh and delicious meals are just a click away. Enjoy fast delivery, affordable prices, and a wide variety of dishes to satisfy every craving!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>JACKER</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+0334210***</li>
                        <li>hoangha182712@gmail.com</li>
                    </ul>
                </div>


            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 @ Tomato.com - All Right Reserved</p>
        </div>
    )
}

export default Footer
