import React from "react";
import { Facebook, Instgram, Logo, Printest, Twitter } from "../../assets";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-logo'>
        <img src={Logo} alt='' />
      </div>
      <div className='app__footer-feautures'>
        <p>Features</p>
        <ul>
          {["Link Shortening", "Branded Links", "Analytics"].map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>
      <div className='app__footer-resources'>
        <p>Resources</p>
        <ul>
          {["Link Shortening", "Branded Links", "Analytics"].map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>
      <div className='app__footer-company'>
        <p>Company</p>
        <ul>
          {["Blog", "Developers", "Support"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='app__footer-media'>
        <ul>
          {[Facebook, Twitter, Printest, Instgram].map((image, index) => (
            <li key={index}>
              <img src={image} alt='photo_socialmedia' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
