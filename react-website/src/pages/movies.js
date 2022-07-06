import React from 'react';
import './movies.css';
import Navbar from '../components/Navigation/Navbar';
import Button from '../components/Button/Button';

import TextField from '@mui/material/TextField';
  
const Movies = () => {
  return (
    <div>
      <Navbar />
      <h1>Find your movie here!</h1>

      <div className="container">
        <div className="inner-container">
          <Button color="orange" name="Blue" />
        </div>
      </div>

      {/* <TextField id="outlined-basic" label="" variant="outlined" /> */}
    </div>
    
  );
};
  
export default Movies;