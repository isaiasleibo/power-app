import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import Planifications from './pages/Planifications';
import Blocks from './pages/Blocks';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/planifications" element={<Planifications />} />
        <Route path="/planifications/blocks/:idBloque" element={<Blocks />} />
      </Routes>
    </Router>
  );
};

export default App;
