import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { Poster, Title, Released, Genre, Plot } = movie;
  

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
      <img src={Poster} alt={`${Title} Poster`} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{Title}</h2>
        <p><strong>Release Date:</strong> {Released}</p>
        <p><strong>Genre:</strong> {Genre}</p>
        <p><strong>Plot:</strong> {Plot}</p>
      </div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Released: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;