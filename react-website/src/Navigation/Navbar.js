import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <body>
    <nav class="navMenu">
      <a href="/">Home</a>
      <a href="movies">Movies</a>
      <a href="about">About</a>
      <div class="dot"></div>
    </nav>
  </body>
  );
};

export default Navbar;