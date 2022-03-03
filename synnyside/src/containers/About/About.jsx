import React from "react";
import "./About.scss";
import { Cherry, Cup, Eagle, Orange } from "../../assets";
const About = () => {
  return (
    <div className='app__about'>
      <div className='app__about-eagle'>
        <div className='app__about eagle-text'>
          <h1>
            Transform your <br /> brand
          </h1>
          <p>
            We are full service creative agency specializing in helping brands
            grow fast .Engage your clients throw compiling visuals that do most
            of the marketing of you
          </p>
        </div>
        <div className='app__about-photo'>
          <img src={Eagle} alt='photo_eagle' />
        </div>
      </div>

      <div className='app__about-eagle'>
        <div className='app__about-photo'>
          <img src={Cup} alt='photo_eagle' />
        </div>
        <div className='app__about eagle-text'>
          <h1> Stand out to the right audience </h1>
          <p>
            Using a collaborative formula of designers,researchers,
            photographers,videographs,and copywrites , we'll build and extend
            your brand in digital places .
          </p>
        </div>
      </div>

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
    </div>
  );
};

export default About;
