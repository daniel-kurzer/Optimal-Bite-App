import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, pariatur modi. Et totam, excepturi culpa, magnam iste similique quos illum quo id maiores ea, rerum nobis molestias. Repudiandae doloribus ipsam ipsum temporibus facere laboriosam veniam, pariatur magnam illum unde repellat vel alias necessitatibus tempore! Sint corporis soluta quaerat est nisi.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@optimal-bite.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; Optimal Bite.com - All Rights Reserved
        </p>
    </div>
  )
}

export default Footer