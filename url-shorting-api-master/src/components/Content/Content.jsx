import React from "react";
import "./Content.scss";
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
          <h1>content-statistics</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
