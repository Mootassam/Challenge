import React from "react";
import "./Contact.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
const Contact = () => {
  return (
    <div className='app__contact'>
      <h3>sunnyside</h3>

      <ul className='app__contact-items'>
        {["About", "Services", "Project"].map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
      <div className='app__contact-icons'>
        <span>
          <AiFillFacebook />
        </span>
        <span>
          <AiFillInstagram />
        </span>
        <span>
          <AiFillTwitterCircle />
        </span>
        <span>
          <BsPinterest />
        </span>
      </div>
    </div>
  );
};

export default Contact;
