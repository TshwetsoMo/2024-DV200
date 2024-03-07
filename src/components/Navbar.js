import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li className="navbar-item">
          <Link to="/compare" className="nav-link">Compare</Link>
          </li>
          <li className="navbar-item">
          <Link to="/timeline" className="nav-link">Timeline</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;