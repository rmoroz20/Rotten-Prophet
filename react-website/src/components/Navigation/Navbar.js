import React from "react";
import './Navbar.css';
import logo from './images/rp-logo-small.png'


const Navbar = () => {
  return (
    <div>
    
    <nav class="navMenu">
    <a href="/" class="logo">
      <img src={logo} alt=''></img>
    </a>
      <a href="/">Home</a>
      <a href="movies">Movies</a>
      <a href="about">About</a>
      <a href="contact">Contact</a>
      <div class="dot"></div>
    </nav>
    
    </div>
  );
};

export default Navbar;