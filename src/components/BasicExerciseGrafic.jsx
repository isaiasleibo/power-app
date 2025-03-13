import React from 'react'
import { Line } from 'react-chartjs-2'

const BasicExerciseGrafic = ({ data, filter, color, dotColor }) => {
  
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

  // Calcular valores mínimo y máximo con margen de 20 unidades
  const minValue = Math.ceil((Math.min(...filteredData.map(entry => entry.weight)) - 10) / 10) * 10;
  const maxValue = Math.floor((Math.max(...filteredData.map(entry => entry.weight)) + 10)/ 10) * 10;
  console.log(minValue, maxValue)

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
        suggestedMin: minValue, // Evita valores negativos
        suggestedMax: maxValue,
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
    },
    plugins: {
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#222222',
        bodyColor: '#222222',
        callbacks: {
          label: function(context) {
            return `${context.raw} kg`;
          }
        }
      },
      legend: {
        display: false,
      },
    },
  };

  const chartData = {
    labels: filteredData.map(entry => entry.date.substring(5)),
    datasets: [
      {
        label: '',
        data: filteredData.map(entry => entry.weight),
        borderColor: color || '#00c3ff',
        backgroundColor: dotColor || '#000000',
        borderWidth: 2,
        pointRadius: 2,
        pointBorderWidth: 0,
        tension: 0,
        pointHitRadius: 20
      },
    ],
  };

  return (
    <Line data={chartData} options={options} />
  )
}

export default BasicExerciseGrafic;
