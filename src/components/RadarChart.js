import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = ({ movieData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!movieData || !movieData.movie1 || !movieData.movie2) {
      return;
    }

    const labels = ['Rating', 'Metascore', 'Value'];
    const movie1Data = [parseFloat(movieData.movie1.imdbRating), parseInt(movieData.movie1.Metascore), parseFloat(movieData.movie1.Value)];
    const movie2Data = [parseFloat(movieData.movie2.imdbRating), parseInt(movieData.movie2.Metascore), parseFloat(movieData.movie2.Value)];

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

    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'radar',
        data: data,
        options: options,
      });
    }
  }, [movieData]);

  return <canvas ref={chartRef} />;
};

export default RadarChart;