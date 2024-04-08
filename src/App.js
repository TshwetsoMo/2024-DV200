import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Compare from './pages/compare';
import Timeline from './pages/timeline';
import Movie from './pages/movie';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App () { 
  
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <Footer/>
      </div>
      
    </Router>
  );
};

export default App;