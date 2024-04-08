import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ chartData }) {
  if (!chartData) {
    return null;
  }

  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets.map(dataset => ({
      label: dataset.label,
      data: dataset.data,
      fill: false,
      backgroundColor: dataset.backgroundColor,
      borderColor: dataset.borderColor,
      borderWidth: 1
    }))
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 900, // Set the minimum year
        max: new Date().getFullYear(), // Set the current year as the maximum
      },
      y: {
        beginAtZero: true,
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default LineChart;