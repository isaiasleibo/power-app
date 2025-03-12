import React from 'react'
import { Line } from 'react-chartjs-2'

const BasicExerciseGrafic = ({ data, filter, color }) => {

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

  const getFilteredData = (months) => {
    const cutoffDate = new Date();
    cutoffDate.setMonth(cutoffDate.getMonth() - months);

    const filtered = data.filter(entry => {
        const [year, month, day] = entry.date.split('-').map(Number);
        const entryDate = new Date(year, month - 1, day);
        return entryDate >= cutoffDate;
    });

    const maxPoints = 30;
    if (filtered.length <= maxPoints) return filtered;

    const step = Math.ceil(filtered.length / maxPoints);
    let reducedData = filtered.filter((_, index) => index % step === 0);

    const lastPoint = filtered[filtered.length - 1];
    if (!reducedData.includes(lastPoint)) {
        reducedData.push(lastPoint);
    }

    return reducedData;
};

  const filteredData = getFilteredData(filter);

  const chartData = {
    labels: filteredData.map(entry => entry.date.substring(5)),
    datasets: [
      {
        label: '',
        data: filteredData.map(entry => entry.weight),
        borderColor: color || '#00c3ff',
        backgroundColor: '#000000',
        borderWidth: 2,
        pointRadius: 2,
        pointBorderWidth: 0,
        tension: 0,
      },
    ],
  };

  return (
    <Line data={chartData} options={options} />
  )
}

export default BasicExerciseGrafic