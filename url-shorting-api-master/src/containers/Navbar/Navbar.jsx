/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Logo, Toggle } from "../../assets";
import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
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
        <div className='app__navbar-mobile'>
          <div className='mobile-toggle' onClick={() => setToggle(!toggle)}>
            <img src={Toggle} alt='photo_toggle' />
          </div>
        </div>
      </div>

      <div className='mobile_list'>
        {toggle && (
          <div className='mobile-items'>
            <ul>
              {["Features", "Pricing", "Resources"].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <hr />
            <div className='mobile-button'>
              <div className='button-login'>Login</div>
              <div className='button-signup'>Sign Up</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
