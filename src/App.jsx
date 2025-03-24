import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import Blocks from './pages/Blocks';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/blocks" element={<Blocks />} />
      </Routes>
    </Router>
  );
};

export default App;
