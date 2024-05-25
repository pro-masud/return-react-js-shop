import React from 'react'
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import "./topbar.scss";

const Topbar = () => {
  return (
    <section className='header-top'>
    <div className="container">
      <div className="header-top-wrap">
        <div className="header-left">
          <a href=""><FaPhone />+8801889972995</a>
          <a href=""><FaPhoneAlt />+8801889972999</a>
          <a href=""><IoMdMail />info@sorobindu.com</a>
        </div>
        <div className="header-to-right">
          <form className="header-top-form">
            <a href="">Log In</a>
            <a href="">Register</a>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Topbar;
