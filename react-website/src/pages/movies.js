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
      setGivenActorMovies(data.movies);
    });
  }, [])

  useEffect(() => {
    fetch('/movies/randomActor').then(res => res.json()).then(data => {
      setRandActorMovies(data.movies);
    });
  }, []);


  return (
    <div>
      <Navbar />
      <h1>Find your movie here!</h1>

      <div class = 'searchbar-cont'>
        <Autocomplete data={autoCompleteData} />
      </div>
      
      <div className="container">
        <div className="inner-container">
          <Button name="Blue" function="random_bad_movie" />
        </div>
      </div>

      <div class='movie-results'>
        <p>movie list is {randActorMovies}.</p>
      </div>

    </div>
    
  );
};
  
export default Movies;