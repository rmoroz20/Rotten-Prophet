import React from "react";
import Navbar from "../components/Navigation/Navbar";
import './about.css';
  
const About = () => {
  return (
    <div>
      <Navbar />

      <div class='about-info'>
        <h2>Sometimes a movie is so bad it's almost good...</h2>
        <h2>This is a site just for that!</h2>
        <div class='about-card'>
          <p>Search using your favorite actor and get the perfect box office flop to complete your movie night with friends</p>
        </div>
        
      </div>
      

    </div>
  );
};
  
export default About;