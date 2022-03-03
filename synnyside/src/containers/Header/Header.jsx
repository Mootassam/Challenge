import React from "react";
import "./Header.scss";
import { HeaderImg, ArrowDown } from "../../assets";
const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-img'>
        <img src={HeaderImg} className='' alt='photo_header' />
      </div>

      <div className='app__header-text'>
        <h3>We are Creatives</h3>
        <div className='app__header img-text'>
          <img src={ArrowDown} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
