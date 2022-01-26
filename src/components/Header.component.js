import React from "react";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrapper">
          <img src={logo} alt="logo" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
