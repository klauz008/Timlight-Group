import React from 'react';
import "./footer.css";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <div>
      <div className="__footer section__padding">
        <div className="__footer-heading">
          <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>

        <div className="__footer-btn">
          <p>Request A Quote</p>
        </div>

        <div className="__footer-links">
          <div className="__footer-links_logo">
            <img src={logo} alt="_logo" />
          </div>
          <div className="__footer-links_div">
            <h4>Links</h4>
            <p>Overview</p>
            <p>Social Media</p>
            <p>Legal</p>
            <p>Contact</p>
          </div>
          <div className="__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Legal</p>
          </div>
          <div className="__footer-links_div">
            <h4>Get in touch</h4>
            <p>Suite 17 De choice Plaza, Zarmaganda</p>
            <p>Jos, Plateau State</p>
            <p>0805-13256789</p>
            <p>info@timlight.ng</p>
          </div>
        </div>

        <div className="__footer-copyright">
          <p>@2022 Timlight group. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer