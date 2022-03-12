import React from "react";
import "./Content.scss";
import { recognition, detailed, customizable } from "../../assets";
const Content = () => {
  return (
    <div className='app__content'>
      <div className='app__content-content'>
        <div className='content-form'>
          <div className='form'>
            <div className='form-input'>
              <input type='text' placeholder='shorten a link here' />
            </div>
            <div className='form-button'>Shorten it!</div>
          </div>

          <div className='form-link'>
            {[
              {
                link: "https://kerminek.github.io/frontendmentor-url-shortening/",
                shorten: "shrtco.de/Lp2EKv",
              },
              {
                link: "https://kerminek.github.io/frontendmentor-url-shortening/",
                shorten: "shrtco.de/SatoXd",
              },
              {
                link: "https://kerminek.github.io/frontendmentor-url-shortening/",
                shorten: "shrtco.de/oig9I",
              },
            ].map((item, index) => (
              <div className='link-short' key={index}>
                <a className='link'>{item.link}</a>
                <div className='link-copy'>
                  <a>{item.shorten}</a>
                  <span className='copy'>Copy</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='content-statistics'>
          <div className='content-statistics-title'>
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with our
              advanced statiscs dahsboard.
            </p>
          </div>
          <div className='content-statistics-dashboard'>
            {[
              {
                logo: recognition,
                title: "Brand Recofnition",
                description:
                  " Boost your brand recognition with each click. Generic link dont mean a thing  Banded links help instill confidence in your content",
              },
              {
                logo: detailed,
                title: "Detailed Records",
                description:
                  "Gain insights into who is clicking your links. knowing when and where people engage with your content helps inform better decisions",
              },
              {
                logo: customizable,
                title: "Fully customizable",
                description:
                  "improve brand awareness and content discoverability through customizable links . supercharging audience engagement",
              },
            ].map((item, index) => (
              <>
                <div className='dashboard' key={index}>
                  <div className='dashboard-content'>
                    <div className='content-logo'>
                      <img src={item.logo} alt='' />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className='dashboard-bar'></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
