import React from "react";
import { Cherry, Orange, P1, P2, P3 } from "../../assets";
import "./Services.scss";
import { AppWrap } from "../../wrapper";
const Services = () => {
  return (
    <>
      <div className='app__about-cherry'>
        <div className='app-about-cherry-blog'>
          <div className='blog-text-cherry'>
            <h3>Graphic Design</h3>
            <span>
              Great design makes you memorable . we Deliver artwork that
              underscores your brand message and captures potential clients
              attention .
            </span>
          </div>
          <div className='blog-image-cherry'>
            <img src={Cherry} alt='photo_cherry' />
          </div>
        </div>
        <div className='app-about-orange-blog'>
          <div className='blog-text-orange'>
            <h3>Photography</h3>
            <span>
              Increase your credibility by getting the most stunning ,
              high-quality photos that improve your business image .
            </span>
          </div>
          <div className='blog-image-orange'>
            <img src={Orange} alt='photo_orange' />
          </div>
        </div>
      </div>
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
    </>
  );
};

export default AppWrap(Services, "Services");
