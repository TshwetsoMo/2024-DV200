import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import LatestMovies from '../components/LatestMovies';
import Movies from '../components/Movies';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/Search';
import icon1 from '../icons/Group 1 (1).png';
import icon2 from '../icons/Group 2 (1).png';
import icon3 from '../icons/Group 3.png';
import './dashboard.css';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchLatestMovies = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=4932ab16`);
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching latest movies:', error);
        setMovies([]);
      }
    };

    fetchLatestMovies();
  }, [searchTerm]);

  return (
    <div className="background">
      <div className="dashboard">
        <header className="dashboard-header">
          <h1 className="h1">Your Passport To Cinematic Adventures</h1>
          <p className="p">Explore, compare, and dive into the world of movies with our Movie Database. Discover detailed information, compare statistics of your favorite movies in the 'Compare' section, or explore timelines of different movies in the 'Timeline' section</p>
        </header><br/><br/>
        <div className="dashboard-navigation">
          <Link to="/search" className="dashboard-navigation-item">
            <img src={icon1} alt="Search" style={{ width: '150px', height: '150px' }} /><br/>
            Search
          </Link>
          <Link to="/compare" className="dashboard-navigation-item">
            <img src={icon2} alt="Compare" style={{ width: '150px', height: '150px' }}/><br/>
            Compare
          </Link>
          <Link to="/timeline" className="dashboard-navigation-item">
            <img src={icon3} alt="Timeline" style={{ width: '150px', height: '150px' }}/><br/>
            Timeline
          </Link>
        </div><br/><br/>
        {/* <h2 className="h2">Search for a Movie</h2>
        <section className="dashboard-search">
          <SearchBar setSearchTerm={setSearchTerm}/>
        </section> */}
        <div className="latest-movies-page">
          <h1 className='h2'>Search for a Movie</h1>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /><br/><br/>
          <div className="movie-list">
            {movies.map((movie, index) => (
              <Link to={`/movie/${movie.imdbID}`} key={index}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;