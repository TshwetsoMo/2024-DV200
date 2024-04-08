import React from 'react';
import backgroundImage from '../icons/Black Typography Error T-Shirt.png'; // Import your background image
import './movie.css';

function Movie() {
  const styles = {
    container: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100% 100%', // Cover the entire container
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh', // Set a minimum height to fill the viewport
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '2rem',
    },
  };

  return (
    <div>
      <div className='mcontainer'></div>
    </div>
  );
}

export default Movie;