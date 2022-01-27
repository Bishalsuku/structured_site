import React from "react";
import logo from "../img/logo.svg";
import location_outline from "../img/location_outline.svg";
import mail from "../img/mail.svg";
import phone from "../img/phone.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="first-footer">
          <img src={logo} alt="logo" />
          <div className="contact-info">
            <img src={location_outline} alt="location_outline" />
            <p>Bhaktapur,Nepal</p>
          </div>
          <div className="contact-info">
            <img src={mail} alt="mail" />
            <p>zprofs.company@gmail.com</p>
          </div>
          <div className="contact-info">
            <img src={phone} alt="phone" />
            <p>+977-9876543210</p>
          </div>
        </div>
        <div className="sec-footer">
          <h2>Quick Links</h2>
          <ul>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Portfolios</li>
          </ul>
        </div>
        <div className="third-footer">
          <h2>Resources</h2>
        </div>
        <div className="fourth-footer">
          <h2>Get In Touch</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
