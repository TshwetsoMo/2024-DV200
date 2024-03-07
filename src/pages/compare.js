import React, { useState } from 'react';
import axios from 'axios';
import { Bar, Pie, Radar } from 'react-chartjs-2';
import './Compare.css';

function Compare() {
  const [movie1, setMovie1] = useState('');
  const [movie2, setMovie2] = useState('');
  const [movieData1, setMovieData1] = useState(null);
  const [movieData2, setMovieData2] = useState(null);

  const handleSearch = async (event, setMovieData) => {
    const searchTerm = event.target.value;
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&t=${searchTerm}`);
      setMovieData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const data = {
    labels: ['Rating', 'Votes', 'Year'],
    datasets: [
      {
        label: movie1.Title,
        data: [movie1.imdbRating, movie1.imdbVotes, movie1.Year],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: movie2.Title,
        data: [movie2.imdbRating, movie2.imdbVotes, movie2.Year],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="compare">
      <header className="compare-header">
        <h1>Compare Movies</h1>
        <p>Select two movies to compare their statistics.</p>
      </header>
      <div className="search-bars">
        <input
          type="text"
          placeholder="Enter first movie title"
          onChange={(e) => handleSearch(e, setMovieData1)}
        />
        <input
          type="text"
          placeholder="Enter second movie title"
          onChange={(e) => handleSearch(e, setMovieData2)}
        />
      </div>
      <div className="charts">
        {movieData1 && movieData2 && (
          <>
            <div className="chart">
              <h2>Bar Chart</h2>
              <Bar data={data} />
            </div>
            <div className="chart">
              <h2>Pie Chart</h2>
              <Pie data={data} />
            </div>
            <div className="chart">
              <h2>Radar Chart</h2>
              <Radar data={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Compare;