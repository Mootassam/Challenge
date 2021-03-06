import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Icon, Logo } from "../../assets";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className='app__navbar'>
        <div className='app__navbar-log'>
          <img src={Logo} alt='photo_logo' />
        </div>
        <ul className='app_navbar-items'>
          {["About", "Services", "Projects", "Contact"].map((item) => (
            <span key={item + `item`}>
              <li>
                <a href={`#${item}`}>{item}</a>
              </li>
            </span>
          ))}
        </ul>

        <div className='app__navbar-menu'>
          <div className='app__navbar-icon'>
            <img
              src={Icon}
              alt='photo_menu_mobile'
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      </div>
      {toggle && (
        <div className='navbar-item'>
          <div className='app__navbar-item'>
            <ul>
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <span>
                  <li key={item + `item`}>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                </span>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
