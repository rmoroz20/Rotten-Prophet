import React, { useState, useEffect } from 'react';
import './index.css'
import Navbar from '../components/Navigation/Navbar.js';
import prophet from '../images/prophet.png'
  
const Home = () => {
  return (

    <div>
      <Navbar />
      <div class="top">
        <h1>Welcome to</h1>
      </div>

      <div class="bottom">
        <h1>the Rotten Prophet.</h1>
      </div>
      
      <img src={prophet} class='center' alt=''></img>

      {/* <p>The current time is {currentTime}.</p> */}
      <p>movie list is {randActorMovies}.</p>
      <footer>Rotten Prophet | 2022</footer>
    </div>
  );
};
  
export default Home;