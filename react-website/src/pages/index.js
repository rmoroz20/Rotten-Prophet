import React from 'react';
import './index.css'
import Navbar from '../components/Navigation/Navbar.js';
import prophet from '../images/prophet.png'
import Autocomplete from '../components/SearchbarV2/Autocomplete.js';
import { autoCompleteData } from "../components/SearchbarV2/data.js";
  
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

      <Autocomplete data={autoCompleteData} />

      <footer>Rotten Prophet | 2022</footer>
    </div>
  );
};
  
export default Home;