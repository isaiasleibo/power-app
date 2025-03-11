import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../scss/Tracks.scss'

const Tracks = () => {
  const [filter, setFilter] = useState(3);

  const weightData = [
    { date: '2024-08-01', weight: 82 },
    { date: '2024-08-15', weight: 81 },
    { date: '2024-09-01', weight: 80 },
    { date: '2024-09-15', weight: 79 },
    { date: '2024-10-01', weight: 78 },
    { date: '2024-10-15', weight: 77 },
    { date: '2024-11-01', weight: 76 },
    { date: '2024-11-15', weight: 75 },
    { date: '2024-12-01', weight: 76 },
    { date: '2024-12-15', weight: 75.2 },
    { date: '2025-01-01', weight: 74 },
    { date: '2025-01-15', weight: 73 },
    { date: '2025-02-01', weight: 72 },
    { date: '2025-02-15', weight: 71 },
    { date: '2025-03-01', weight: 70 },
    { date: '2025-03-08', weight: 69 },
  ];

  const getFilteredData = (months) => {
    const cutoffDate = new Date();
    cutoffDate.setMonth(cutoffDate.getMonth() - months);
    return weightData.filter(entry => {
      const [year, month, day] = entry.date.split('-').map(Number);
      const entryDate = new Date(year, month - 1, day);
      return entryDate >= cutoffDate;
    });
  };

  const filteredData = getFilteredData(filter);
  const weightDataReverse = [...weightData].reverse();

  const chartData = {
    labels: filteredData.map(entry => entry.date.substring(5)),
    datasets: [
      {
        label: '',
        data: filteredData.map(entry => entry.weight),
        borderColor: '#00c3ff',
        backgroundColor: '#00c3ff',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#222222',
          font: {
            family: "'Rubik', sans-serif",
            size: 12,
            weight: 'bold',
          },
          maxTicksLimit: 4,
        },
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 0.5)',
        }
      },
      y: {
        ticks: {
          color: '#2222222',
          font: {
            family: "'Rubik', sans-serif",
            size: 12,
            weight: 'bold',
          },
          maxTicksLimit: 4,
        },
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 0.5)',
        }
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#222222',
        bodyColor: '#222222',
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div id="tracks" className="main-content">
      <Header />
      <div id="tracks-header">
        <div id="slider">
          <p>Básicos</p>
          <p className='active'>Peso corporal</p>
          <p>Tracks</p>
        </div>
      </div>

      <div className="chart-container">
        <div id="header">
          <h3>Último peso: {weightData[weightData.length - 1].weight}kg</h3>
          <div id='buttons'>
            <button onClick={() => setFilter(1)} className={filter === 1 ? 'active' : ''}><p>1m</p></button>
            <button onClick={() => setFilter(3)} className={filter === 3 ? 'active' : ''}><p>3m</p></button>
            <button onClick={() => setFilter(6)} className={filter === 6 ? 'active' : ''}><p>6m</p></button>
          </div>
        </div>
        <div id="grafic">
          <Line data={chartData} options={options} />
        </div>
      </div>

      <div id="weight-data">
        <div className="data">
          <p className="title">Inicial</p>
          <p className="description">{weightData[0].weight}kg</p> 
        </div>
        <div className="data">
          <p className="title">Último</p>
          <p className="description">{weightData[weightData.length - 1].weight}kg</p> 
        </div>
        <div className="data">
          <p className="title">Más alto</p>
          <p className="description">{Math.max(...weightData.map(entry => entry.weight))}kg</p> 
        </div>
      </div>

      <div id="history">
        <p id="title">Historial:</p>
        {weightDataReverse.map((entry, index) => {
          const diff = index === weightDataReverse.length - 1 ? 0 : entry.weight - weightDataReverse[index + 1].weight;
          return (
            <div className="history-item" key={entry.date}>
              <div id="main-data">
                <div className={`upgrade ${diff < 0 ? 'less' : (diff === 0 ? 'neutral' : 'more')}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                    <path d="M120-240q-33 0-56.5-23.5T40-320q0-33 23.5-56.5T120-400h10.5q4.5 0 9.5 2l182-182q-2-5-2-9.5V-600q0-33 23.5-56.5T400-680q33 0 56.5 23.5T480-600q0 2-2 20l102 102q5-2 9.5-2h21q4.5 0 9.5 2l142-142q-2-5-2-9.5V-640q0-33 23.5-56.5T840-720q33 0 56.5 23.5T920-640q0 33-23.5 56.5T840-560h-10.5q-4.5 0-9.5-2L678-420q2 5 2 9.5v10.5q0 33-23.5 56.5T600-320q-33 0-56.5-23.5T520-400v-10.5q0-4.5 2-9.5L420-522q-5 2-9.5 2H400q-2 0-20-2L198-340q2 5 2 9.5v10.5q0 33-23.5 56.5T120-240Z" />
                  </svg>
                  <p>{parseFloat(diff).toFixed(2).replace(/\.00$/, '')}kg</p>

                </div>
                <p>{entry.weight}kg</p>
              </div>
              <div id="date">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" /></svg>
                <p>{entry.date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer tracks />
    </div>
  );
};

export default Tracks;
