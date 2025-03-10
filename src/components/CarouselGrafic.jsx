import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../scss/Home.scss';

// Configurar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CarouselGrafic = ({ data, name }) => {
  const minWeight = Math.min(...data.map(d => d.weight));
  const maxWeight = Math.max(...data.map(d => d.weight));

  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: '',
        data: data.map(d => d.weight),
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.2)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#fff',
          font: {
            family: "'Rubik', sans-serif",
            size: 12,
            weight: 'bold',
          },
          maxTicksLimit: 4,
        },
        grid: {
          display: false,
        }
      },
      y: {
        min: minWeight - 5,
        max: maxWeight + 5,
        ticks: {
          color: '#fff',
          font: {
            family: "'Rubik', sans-serif",
            size: 12,
            weight: 'bold',
          },
          maxTicksLimit: 4,
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#000',
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="carousel-box weight-box">
      <h3 className="chart-title">{name}</h3>
      <div className="weight-chart" style={{ width: '100%', height: '120px' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CarouselGrafic;
