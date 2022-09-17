import React, { useState, useEffect } from 'react';
import './movies.css';
import Navbar from '../components/Navigation/Navbar';
import Autocomplete from '../components/Search/Autocomplete.js';
import { autoCompleteData } from "../components/Search/data.js";

  
const Movies = () => {

  const[randActorMovies, setRandActorMovies] = useState();
  const[CScore, setCScore] = useState();
  const[AScore, setAScore] = useState();
  const[givenActorMovies, setGivenActorMovies] = useState("no movies");

  useEffect(() => {
    fetch('/movies/${givenActor}').then(res => res.json()).then(data => {
      setGivenActorMovies(data[0]);
    });
  }, [])

  useEffect(() => {
    fetch('/movies/randomActor').then(res => res.json()).then(data => {
      setRandActorMovies(data[0],data[1],data[2]);
      setCScore(data[1]);
      setAScore(data[2]);
    });
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div>
      <Navbar />
      <h1>Find your movie here!</h1>

      {/* <div class = 'searchbar-cont'>
        <Autocomplete data={autoCompleteData} />
      </div> */}
      
      <div class='movie-results'>
        <p> Your movie is... {randActorMovies}.</p>
        <center><p>Critic Score: {CScore}</p></center>
        <p>Audience Score: {AScore}</p>
      </div>

      <div className="button-container">
        <div className="button-inner-container">
          <button onClick={refreshPage}>Give me a Movie! <div id="underline"></div></button>
        </div>
      </div>

    </div>
    
  );
};
  
export default Movies;