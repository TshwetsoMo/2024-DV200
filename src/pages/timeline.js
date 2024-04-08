import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import './timeline.css';

const Timeline = () => {
  const [searchTerm1, setSearchTerm1] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const [movieData1, setMovieData1] = useState([]); // Initialize as an empty array
  const [movieData2, setMovieData2] = useState([]); // Initialize as an empty array

  const fetchData = async (searchTerm, setMovieData) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=4932ab16`);
      if (response.data.Search) {
        setMovieData(response.data.Search);
      } else {
        setMovieData([]);
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const generateChartData = (movieData) => {
    if (!movieData) return null;

    const years = [];
    const posters = [];
    movieData.forEach((movie) => {
      if (movie.Year && movie.Poster) {
        years.push(movie.Year);
        posters.push(movie.Poster);
      }
    });

    return {
      labels: years,
      datasets: [
        {
          label: 'Movie 1',
          data: years.map((year, index) => ({
            x: year,
            y: index + 1,
            poster: posters[index],
          })),
          pointRadius: 8,
          pointHoverRadius: 12,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    };
  };

const generateChartData2 = (movieData) => {
  if (!movieData) return null;

  const years = [];
  const posters = [];
  movieData.forEach((movie) => {
    if (movie.Year && movie.Poster) {
      years.push(movie.Year);
      posters.push(movie.Poster);
    }
  });

  return {
    labels: years,
    datasets: [
      {
        label: 'Movie 2',
        data: years.map((year, index) => ({
          x: year,
          y: index + 1,
          poster: posters[index],
        })),
        pointRadius: 8,
        pointHoverRadius: 12,
        backgroundColor: 'rgba(192, 75, 192, 0.6)',
        borderColor: 'rgba(192, 75, 192, 1)',
        borderWidth: 2,
      },
    ],
  };
};

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 1990, // Set the minimum year
        max: new Date().getFullYear(), // Set the current year as the maximum
      },
      y: {
        beginAtZero: true,
        display: false,
      },
    },
  };

  return (
    <div className="timeline-page">
      <h1>Timeline</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm1}
          onChange={(e) => setSearchTerm1(e.target.value)}
        />
        <button onClick={() => fetchData(searchTerm1, setMovieData1)}>Search</button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for another movie..."
          value={searchTerm2}
          onChange={(e) => setSearchTerm2(e.target.value)}
        />
        <button onClick={() => fetchData(searchTerm2, setMovieData2)}>Search</button>
      </div>
      <div className="timeline-chart">
        <Line data={generateChartData(movieData1)} options={options} />
      </div>
      <div className="timeline-chart">
        <Line data={generateChartData2(movieData2)} options={options} />
      </div>
    </div>
  );
};

export default Timeline;