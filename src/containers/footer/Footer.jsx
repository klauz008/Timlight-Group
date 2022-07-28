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
            <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
          </div>
          <div className="__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="__footer-links_div">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
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