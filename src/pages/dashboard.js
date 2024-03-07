import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import SearchBar from '../components/Search';
import icon1 from '../icons/Group 1 (1).png';
import icon2 from '../icons/Group 2 (1).png';
import icon3 from '../icons/Group 3.png';

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
                <img src={icon1} alt="Search" style={{ width: '150px', height: '150px' }} /><br/>
                Search
            </Link>
            <Link to="/compare" className="dashboard-navigation-item">
                <img src={icon2} alt="Compare" style={{ width: '150px', height: '150px' }}/><br/>
                Compare
            </Link>
            <Link to="/timeline" className="dashboard-navigation-item">
                <img src={icon3} alt="Timeline" style={{ width: '150px', height: '150px' }}/><br/>
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