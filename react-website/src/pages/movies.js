import React, { useState, useEffect } from 'react';
import './movies.css';
import Navbar from '../components/Navigation/Navbar';
import Button from '../components/Button/Button';
import Autocomplete from '../components/Search/Autocomplete.js';
import { autoCompleteData } from "../components/Search/data.js";

  
const Movies = () => {

  const[randActorMovies, setRandActorMovies] = useState("no movies");
  const[givenActorMovies, setGivenActorMovies] = useState("no movies");

  useEffect(() => {
    fetch('/movies/${givenActor}').then(res => res.json()).then(data => {
      setGivenActorMovies(data[0]);
    });
  }, [])

  useEffect(() => {
    fetch('/movies/randomActor').then(res => res.json()).then(data => {
      setRandActorMovies(data[0]);
    });
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div>
      <Navbar />
      <h1>Find your movie here!</h1>

      <div class = 'searchbar-cont'>
        <Autocomplete data={autoCompleteData} />
      </div>
      
      <div className="container">
        <div className="inner-container">
          <button onClick={refreshPage}>Movie </button>
        </div>
      </div>
      
      <div class='movie-results'>
        <p> Your movie is... {randActorMovies}.</p>
      </div>

    </div>
    
  );
};
  
export default Movies;