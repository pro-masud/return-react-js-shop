import React from 'react';
import './home.scss';
import logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <>
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
      <header>
        <div className="container">
        <div className="header-left">
            <div className="logo">
              <a href="/"><img src={logo} alt="" /></a>
            </div>
          </div>
          <div className="header-right">
            <ul className='menu'>
              <li><a className="" href="/">Home</a></li>
              <li><a className="" href="/admin">Admin</a></li>
              <li><a className="" href="/about">About</a></li>
              <li><a className="" href="/blog">Blog</a></li>
              <li><a className="" href="/team">Team</a></li>
              <li><a className="" href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home
