import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ movieData }) => {
  if (!movieData || !movieData.movie1 || !movieData.movie2) {
    return null;
  }

  const data = {
    labels: [movieData.movie2.Title, movieData.movie1.Title],
    datasets: [
      {
        data: [
          parseFloat(movieData.movie2.imdbRating),
          parseFloat(movieData.movie1.imdbRating),
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      },
    ],
  };

  const options = {
    responsive: true,
    // maintainAspectRatio: false, // Try removing or commenting out this line
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;