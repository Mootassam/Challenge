import React from "react";
import { P1, P2, P3 } from "../../assets";
import "./Services.scss";
const Services = () => {
  return (
    <div className='app__testimonials'>
      <div className='app__testimonials-text'>
        <h3>
          <b> Client Testimonials </b>
        </h3>
      </div>
      <div className='app__testimonials-section'>
        <div className='app__testimonials-items'>
          <div className='app__testimonials-section p'>
            <img src={P1} alt='' />
            <span>
              We put trust Sunnysdie and they delivered, making sure our needs
              were met and dealines were always hit .
            </span>
            <p className='author'>Emily R .</p>
            <p className='post'>marketing Director</p>
          </div>
          <div className='app__testimonials-section p'>
            <img src={P2} alt='' />
            <span>
              We put trust Sunnysdie and they delivered, making sure our needs
              were met and dealines were always hit .
            </span>
            <p className='author'>Emily R .</p>
            <p className='post'>marketing Director</p>
          </div>
          <div className='app__testimonials-section p'>
            <img src={P3} alt='' />
            <span>
              We put trust Sunnysdie and they delivered, making sure our needs
              were met and dealines were always hit .
            </span>
            <h3 className='author'>Emily R .</h3>
            <p className='post'>marketing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
