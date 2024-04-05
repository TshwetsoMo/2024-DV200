import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ movieData }) => {
  if (!movieData || !movieData.movie1 || !movieData.movie2) {
    return null;
  }

  const data = {
    labels: ['Rating'],
    datasets: [
      {
        data: [
          movieData.movie2.imdbRating,
          movieData.movie1.imdbRating,
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;