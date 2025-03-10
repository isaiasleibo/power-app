import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import Diary from './pages/Diary';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </Router>
  );
};

export default App;
