import React from "react";
import logo from "../img/logo.svg";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrapper">
          <img src={logo} alt="logo" />
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
