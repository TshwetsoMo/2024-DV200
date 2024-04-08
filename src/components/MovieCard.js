import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { Poster, Title, Released, Genre, Plot } = movie;

  return (
    <div className="movie-card">
      <Link to={'/movie'}>
        <img src={Poster} alt={`${Title} Poster`} className="movie-poster" />
        <div className="movie-details">
          <h2 className="movie-title">{Title}</h2>
          <p><strong>Release Date:</strong> {Released || 'N/A'}</p>
          <p><strong>Genre:</strong> {Genre || 'N/A'}</p>
          <p><strong>Plot:</strong> {Plot || 'In a world where science and mysticism collide, a brilliant scientist invents a device that can manipulate time. Pursued by a mysterious organization seeking to exploit his invention, he joins forces with unlikely allies—a former soldier and a savvy hacker. Together, they must navigate a perilous world of espionage and deceit, where every moment is a battle for survival. Can they outwit their enemies and protect the device, or will their quest lead to their downfall?'}</p>
        </div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Released: PropTypes.string,
    Genre: PropTypes.string,
    Plot: PropTypes.string,
  }).isRequired,
};

export default MovieCard;