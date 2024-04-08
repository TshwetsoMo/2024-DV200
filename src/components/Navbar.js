import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../icons/Modern Beige Black Cinematography Business Logo (1).png'

function Navbar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        <img
          src={logo}
          alt="Logo"
          style={{ width: '200px', height: 'auto' }} // Adjust width as needed
        />
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">Dashboard</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/compare" className="sidebar-link">Compare</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/timeline" className="sidebar-link">Timeline</Link>
        </li>
        <li className="sidebar-item" id='movie'>
          <Link to="/movie" className="sidebar-link">Movie</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;