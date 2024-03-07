import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = async (event) => {
    setQuery(event.target.value);
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${event.target.value}`);
      setResults(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleChange}
      />
      <div className="search-results">
        {results.map((movie, index) => (
          <div key={index} className="search-result">
            {movie.Title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;