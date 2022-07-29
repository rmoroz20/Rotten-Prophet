import React, { useState, useEffect } from 'react';
import './index.css'
import Navbar from '../components/Navigation/Navbar.js';
import prophet from '../images/prophet.png'
  
const Home = () => {

  const [currentTime, setCurrentTime] = useState(0);
  const[randActorMovies, setRandActorMovies] = useState(1);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });

    fetch('/movies/randomActor').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

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

      <p>The current time is {currentTime}.</p>
      <footer>Rotten Prophet | 2022</footer>
    </div>
  );
};
  
export default Home;