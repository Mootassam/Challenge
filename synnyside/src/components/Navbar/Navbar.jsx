import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='app__navbar'>
      <div className='app__navbar-log'>
        <h1>sunnyside </h1>
      </div>
      <ul className='app_navbar-items'>
        {["About", "Services", "Projects", "Contact"].map((item) => (
          <span key={item + `item`}>
            <li>{item}</li>
          </span>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
        <div className='app__navbar-items'>
          {toggle && (
            <ul>
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <span key={item + `item`}>
                  <li>{item}</li>
                </span>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
