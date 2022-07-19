import React from 'react';
import './movies.css';
import Navbar from '../components/Navigation/Navbar';
import Button from '../components/Button/Button';

  
const Movies = () => {
  return (
    <div>
      <Navbar />
      <h1>Find your movie here!</h1>

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