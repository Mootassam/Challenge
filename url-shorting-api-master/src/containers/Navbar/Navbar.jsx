/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Logo } from "../../assets";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-menu'>
        <div className='app__navbar-logo'>
          <div className='navbar-log'>
            <img src={Logo} alt='logo_photo' />
          </div>
          <div className='navbar-items'>
            <ul>
              {["Features", "Pricing", "Resources"].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='app__navbar-button'>
          <div>
            <a href='#'>Login</a>
          </div>
          <div>
            <a href='#'>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
