import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import SearchBar from '../components/Search';

function Dashboard() {
  return (
    <div className='background'>
        <div className="dashboard">
        <header className="dashboard-header">
            <h1 className='h1'>Your Passport To Cinematic Adventures</h1>
            <p className='p'>Explore, compare, and dive into the world of movies with our Movie Database. Discover detailed information, compare statistics of your favorite movies in the 'Compare' section, or explore timelines of different movies in the 'Timeline' section</p>
        </header><br/><br/>
        <div className="dashboard-navigation">
            <Link to="/search" className="dashboard-navigation-item">
            Search
            </Link>
            <Link to="/compare" className="dashboard-navigation-item">
            Compare
            </Link>
            <Link to="/timeline" className="dashboard-navigation-item">
            Timeline
            </Link>
        </div><br/><br/>
        <h2 className='h2'>Search for a Movie</h2>
        <section className="dashboard-search">
            <SearchBar/>
        </section>
        </div>
    </div>
  );
}

export default Dashboard;