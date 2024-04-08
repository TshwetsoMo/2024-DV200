import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ movieData }) => {
  if (!movieData || !movieData.movie1 || !movieData.movie2) {
    return null;
  }

  const labels = ['Metascore', 'Runtime', 'IMDB Rating'];
  const movie1Data = [parseFloat(movieData.movie1.Metascore), parseInt(movieData.movie1.Runtime), parseFloat(movieData.movie1.imdbRating)];
  const movie2Data = [parseFloat(movieData.movie2.Metascore), parseInt(movieData.movie2.Runtime), parseFloat(movieData.movie2.imdbRating)];

  const data = {
    labels: labels,
    datasets: [
      {
        label: movieData.movie1.Title,
        data: movie1Data,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: movieData.movie2.Title,
        data: movie2Data,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;