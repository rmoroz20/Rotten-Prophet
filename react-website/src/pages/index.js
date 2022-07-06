import React from 'react';
import Card from '../components/Card/Card.js';
import './index.css'
import Navbar from '../components/Navigation/Navbar.js';
import prophet from '../images/prophet.png'

  
const Home = () => {
  return (

    <div>
      <Navbar />
      <Card />
      <img src={prophet} class='center'></img>
    </div>
  );
};
  
export default Home;