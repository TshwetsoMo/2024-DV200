import React from 'react';
import { useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ movieData }) => {
  if (!movieData || !movieData.movie1 || !movieData.movie2) {
    return null;
  }

  const labels = ['Rating', 'Metascore', 'Value'];
  const movie1Data = [movieData.movie1.imdbRating, movieData.movie1.Metascore, movieData.movie1.Value];
  const movie2Data = [movieData.movie2.imdbRating, movieData.movie2.Metascore, movieData.movie2.Value];

  const data = {
    labels: labels,
    datasets: [
      {
        label: movieData.movie1.Title,
        data: movie1Data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: movieData.movie2.Title,
        data: movie2Data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;