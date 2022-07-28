import React from 'react';
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


      <footer>Rotten Prophet | 2022</footer>
    </div>
  );
};
  
export default Home;