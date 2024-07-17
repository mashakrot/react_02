import React from 'react'
import './footer.scss'
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="main_footer section_padding">
      <div className="main_footer-heading">
        <h1 className="gradient_text">Do you want to step in to the future before others</h1>
      </div>

      <div className="main_footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="main_footer-links">
        <div className="main_footer-links_logo">
          <img src={gpt3Logo} alt="main_logo" />
          <p>All Rights Reserved</p>
        </div>
        <div className="main_footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="main_footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="main_footer-links_div">
          <h4>Get in touch</h4>
          <p>Self Study Studio</p>
          <p>123-123456</p>
          <p>info@contactus.com</p>
        </div>
      </div>

      <div className="main_footer-copyright">
        <p>@2024 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
