import React from 'react';
import './movies.css';
import Navbar from '../components/Navigation/Navbar';
import Button from '../components/Button/Button';
import Autocomplete from '../components/Search/Autocomplete.js';
import { autoCompleteData } from "../components/Search/data.js";

  
const Movies = () => {
  return (
    <div>
      <Navbar />
      <h1>Find your movie here!</h1>

      {/* <Autocomplete data={autoCompleteData} /> */}

      <div className="container">
        <div className="inner-container">
          <Button name="Blue" function="random_bad_movie" />
        </div>
      </div>

      <div class='movie-results'>
        <h2>bad movie is </h2>
      </div>

    </div>
    
  );
};
  
export default Movies;