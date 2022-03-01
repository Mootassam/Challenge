import React from "react";
import "./About.scss";
import { Cherry, Cup, Eagle, Orange } from "../../assets";
const About = () => {
  return (
    <div className='app__about'>
      <div className='app__about-eagle'>
        <div className='app__about eagle-text'>
          <h1> Transform your brand</h1>
          <p>
            We are full service creative agency specializing in helping brands
            grow fast .Engage your clients throw compiling visuals that do most
            of the marketing of you
          </p>
        </div>
        <img src={Eagle} alt='photo_eagle' />
      </div>

      <div className='app__about-eagle'>
        <img src={Cup} alt='photo_eagle' />
        <div className='app__about eagle-text'>
          <h1> Stand out to the right audience </h1>
          <p>
            Using a collaborative formula of designers , researchers ,
            photographers , videographs, and copywrites , we'll build and extend
            your brand in digital places .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
