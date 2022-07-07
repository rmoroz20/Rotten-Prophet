import React from 'react';
import Card from '../components/Card/Card.js';
import './index.css'
import Navbar from '../components/Navigation/Navbar.js';
import prophet from '../images/prophet.png'

  
const Home = () => {
  return (

    <div>
      <Navbar />
      <Card contents='Welcome to the Rotten Prophet!'/>
      <img src={prophet} class='center' alt=''></img>
    </div>
  );
};
  
export default Home;