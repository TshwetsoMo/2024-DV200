import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './compare.css';

function Compare() {
  const [movie1, setMovie1] = useState({ Title: 'Movie 1', Rating: 7.5, Votes: 50000, Year: 2000 });
  const [movie2, setMovie2] = useState({ Title: 'Movie 2', Rating: 8.0, Votes: 60000, Year: 2010 });
  const [charts, setCharts] = useState([]);
  const chartRefs = useRef([]);

  useEffect(() => {
    const createChart = (type, index) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const chartContainer = chartRefs.current[index];
      chartContainer.innerHTML = '';
      chartContainer.appendChild(canvas);

      const data = {
        labels: ['Rating', 'Votes', 'Year'],
        datasets: [
          {
            label: movie1.Title,
            data: [movie1.Rating, movie1.Votes, movie1.Year],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: movie2.Title,
            data: [movie2.Rating, movie2.Votes, movie2.Year],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return new Chart(ctx, {
        type: type,
        data: data,
        options: options,
      });
    };

    setCharts([
      createChart('bar', 0),
      createChart('pie', 1),
      createChart('radar', 2),
      createChart('line', 3),
      createChart('doughnut', 4),
    ]);

    // Clean up function to remove charts when component unmounts
    return () => {
      charts.forEach(chart => {
        chart.destroy();
      });
    };
  }, [movie1, movie2]);

  const handleMovie1Change = (event) => {
    const { name, value } = event.target;
    setMovie1({ ...movie1, [name]: parseFloat(value) || 0 });
  };

  const handleMovie2Change = (event) => {
    const { name, value } = event.target;
    setMovie2({ ...movie2, [name]: parseFloat(value) || 0 });
  };

  const updateCharts = () => {
    charts.forEach((chart, index) => {
      const data = {
        labels: ['Rating', 'Votes', 'Year'],
        datasets: [
          {
            label: movie1.Title,
            data: [movie1.Rating, movie1.Votes, movie1.Year],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: movie2.Title,
            data: [movie2.Rating, movie2.Votes, movie2.Year],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      };

      chart.data = data;
      chart.update();
    });
  };

  return (
    <div className="compare">
      <header className="compare-header">
        <h1>Compare Movies</h1>
        <p>Change the statistical variables below to visually compare any movies you like.</p><br />
      </header>
      <div className="charts">
        <div ref={ref => chartRefs.current[0] = ref} className="chart"></div>
        <div ref={ref => chartRefs.current[1] = ref} className="chart"></div>
        <div ref={ref => chartRefs.current[2] = ref} className="chart"></div>
        <div ref={ref => chartRefs.current[3] = ref} className="chart"></div>
        <div ref={ref => chartRefs.current[4] = ref} className="chart"></div>
      </div>
      <div className="stats">
        <h2>Movie 1 Stats</h2>
        <label>
          Title:
          <input type="text" name="Title" value={movie1.Title} onChange={handleMovie1Change} />
        </label>
        <label>
          Rating:
          <input type="number" name="Rating" value={movie1.Rating} onChange={handleMovie1Change} />
        </label>
        <label>
          Votes:
          <input type="number" name="Votes" value={movie1.Votes} onChange={handleMovie1Change} />
        </label>
        <label>
          Year:
          <input type="number" name="Year" value={movie1.Year} onChange={handleMovie1Change} />
        </label>
      </div>
      <div className="stats">
        <h2>Movie 2 Stats</h2>
        <label>
          Title:
          <input type="text" name="Title" value={movie2.Title} onChange={handleMovie2Change} />
        </label>
        <label>
          Rating:
          <input type="number" name="Rating" value={movie2.Rating} onChange={handleMovie2Change} />
        </label>
        <label>
          Votes:
          <input type="number" name="Votes" value={movie2.Votes} onChange={handleMovie2Change} />
        </label>
        <label>
          Year:
          <input type="number" name="Year" value={movie2.Year} onChange={handleMovie2Change} />
        </label>
      </div>
      <button className='button' onClick={updateCharts}>Update Charts</button>
    </div>
  );
}

export default Compare;

