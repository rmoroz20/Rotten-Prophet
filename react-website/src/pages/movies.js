import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import TextField from '@mui/material/TextField';
  
const Movies = () => {
  return (
    <div>
      <Navbar />
      
      <h1>You can write your blogs!</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
    
  );
};
  
export default Movies;