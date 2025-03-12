import React, { useState } from 'react';
import 'chart.js/auto';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../scss/Tracks.scss'
import CorporalWeight from './subPages/CorporalWeight';
import BasicExercises from './subPages/BasicExercises';
import SubTracks from './subPages/SubTracks';

const Tracks = () => {
  const [section, setSection] = useState(2);

  return (
    <div id="tracks" className="main-content">
      <Header />
      <div id="tracks-header">
        <div id="slider">
          <p className={section === 1 ? 'active' : ''} onClick={() => setSection(1)}>Básicos</p>
          <p className={section === 2 ? 'active' : ''} onClick={() => setSection(2)}>Peso corporal</p>
          <p className={section === 3 ? 'active' : ''} onClick={() => setSection(3)}>Tracks</p>
        </div>
      </div>

      {section === 2 && <CorporalWeight />}
      {section === 1 && <BasicExercises />}
      {section === 3 && <SubTracks />}
      <Footer tracks />
    </div>
  );
};

export default Tracks;
