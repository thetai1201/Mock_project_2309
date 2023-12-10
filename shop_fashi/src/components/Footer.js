import React from 'react'
import Logo from "../assets/logo.png";
import Logo_Partner1 from "../assets/logo-carousel/logo-1.png"
import Logo_Partner2 from "../assets/logo-carousel/logo-2.png"
import Logo_Partner3 from "../assets/logo-carousel/logo-3.png"
import Logo_Partner4 from "../assets/logo-carousel/logo-4.png"
import Logo_Partner5 from "../assets/logo-carousel/logo-5.png"
import LogoPay from "../assets/logo-carousel/payment-method.png";
import {Image} from 'antd';
import {FacebookFilled,InstagramFilled,TwitterCircleFilled} from '@ant-design/icons'
const Footer = () => {
  return (
    <>
     {/* Partner Logo Section Begin */}
     <div className="partner-logo">
        <div className="container">
          <div className="logo-carousel owl-carousel flex gap-20">
            <div className="logo-item">
              <div className="tablecell-inner">
                <Image src={Logo_Partner1}/>
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
              <Image src={Logo_Partner2}/>
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
              <Image src={Logo_Partner3}/>
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
              <Image src={Logo_Partner4}/>
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
              <Image src={Logo_Partner5}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partner Logo Section End */}


    <footer className="footer-section">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-3">
              <div className="footer-left">
                <div className="footer-logo">
                  <Image className='text-white' src={Logo}/>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello.colorlib@gmail.com</li>
                </ul>
                <div className="footer-social">
                  <a href="#"><FacebookFilled /></a>
                  <a href="#"><InstagramFilled /></a>
                  <a href="#"><TwitterCircleFilled /></a>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1">
              <div className="footer-widget">
                <h5>Information</h5>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Serivius</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-widget">
                <h5>My Account</h5>
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Shopping Cart</a></li>
                  <li><a href="#">Shop</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="newslatter-item">
                <h5>Join Our Newsletter Now</h5>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <form action="#" className="subscribe-form">
                  <input type="text" placeholder="Enter Your Mail" />
                  <button type="button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-reserved">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 flex justify-between">
                  <p className='text-white text-center'>Copyright © All rights reserved | This template is made with Nhom2 Colorlib </p>
                    <Image src={LogoPay}></Image>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer