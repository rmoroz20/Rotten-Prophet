import React from 'react';
import './index.css'
import Navbar from '../components/Navigation/Navbar.js';
import prophet from '../images/prophet.png'
import {BrowserRouter as Router, Link} from 'react-router-dom';
  
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

      <div className="button-container">
        <div className="button-inner-container">
        <Link to='/movies'>
          <button>Find your movie <div id="underline"></div></button>
        </Link>
        </div>
      </div>
      
      {/* <footer>Rotten Prophet | 2022</footer> */}
    </div>
  );
};
  
export default Home;