import React from "react";
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  TimeScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import dayjs from "dayjs";

ChartJS.register(LineElement, LinearScale, TimeScale, PointElement, Tooltip, Legend);

const SubTracks = () => {
  const recoveryData = [
    { date: "2024-10-01", value: 3.2 },
    { date: "2024-10-02", value: 3.25 },
    { date: "2024-10-03", value: 3.3 },
    { date: "2024-10-04", value: 3.4 },
    { date: "2024-10-05", value: 3.5 },
    { date: "2024-10-06", value: 3.55 },
    { date: "2024-10-07", value: 3.6 },
    { date: "2024-10-08", value: 3.65 },
    { date: "2024-10-09", value: 3.7 },
    { date: "2024-10-10", value: 3.75 },
    { date: "2024-10-11", value: 3.8 },
    { date: "2024-10-12", value: 3.85 },
    { date: "2024-10-13", value: 3.9 },
    { date: "2024-10-15", value: 3.95 },
    { date: "2024-10-16", value: 4.0 },
    { date: "2024-10-17", value: 4.1 },
    { date: "2024-10-18", value: 4.2 },
    { date: "2024-10-19", value: 4.3 },
    { date: "2024-10-20", value: 4.35 },
    { date: "2024-10-21", value: 4.4 },
    { date: "2024-10-22", value: 4.5 },
    { date: "2024-10-23", value: 4.6 },
    { date: "2024-10-24", value: 4.7 },
    { date: "2024-10-26", value: 4.8 },
    { date: "2024-10-27", value: 4.9 },
    { date: "2024-10-28", value: 5.0 },
    { date: "2024-10-29", value: 5.0 }
  ];

  const completeFatigueData = [
    { date: "2024-10-01", empujes: 3.2, traccion: 2.8, piernas: 3.5, total: 9.5 },
    { date: "2024-10-02", empujes: 3.21, traccion: 2.82, piernas: 3.52, total: 9.55 },
    { date: "2024-10-03", empujes: 3.23, traccion: 2.83, piernas: 3.54, total: 9.6 },
    { date: "2024-10-04", empujes: 3.24, traccion: 2.85, piernas: 3.55, total: 9.64 },
    { date: "2024-10-05", empujes: 3.26, traccion: 2.87, piernas: 3.57, total: 9.7 },
    { date: "2024-10-06", empujes: 3.27, traccion: 2.89, piernas: 3.58, total: 9.74 },
    { date: "2024-10-07", empujes: 3.29, traccion: 2.9, piernas: 3.6, total: 9.79 },
    { date: "2024-10-08", empujes: 3.3, traccion: 2.92, piernas: 3.61, total: 9.83 },
    { date: "2024-10-09", empujes: 3.32, traccion: 2.94, piernas: 3.63, total: 9.89 },
    { date: "2024-10-10", empujes: 3.33, traccion: 2.95, piernas: 3.65, total: 9.93 },
    { date: "2024-10-11", empujes: 3.35, traccion: 2.97, piernas: 3.66, total: 9.98 },
    { date: "2024-10-12", empujes: 3.36, traccion: 2.99, piernas: 3.68, total: 10.03 },
    { date: "2024-10-13", empujes: 3.38, traccion: 3.0, piernas: 3.69, total: 10.07 },
    { date: "2024-10-14", empujes: 3.39, traccion: 3.02, piernas: 3.71, total: 10.12 },
    { date: "2024-10-15", empujes: 3.41, traccion: 3.04, piernas: 3.73, total: 10.18 },
    { date: "2024-10-17", empujes: 3.44, traccion: 3.07, piernas: 3.76, total: 10.27 },
    { date: "2024-10-18", empujes: 3.45, traccion: 3.08, piernas: 3.78, total: 10.31 },
    { date: "2024-10-19", empujes: 3.47, traccion: 3.1, piernas: 3.79, total: 10.36 },
    { date: "2024-10-20", empujes: 3.48, traccion: 3.12, piernas: 3.81, total: 10.41 },
    { date: "2024-10-21", empujes: 3.5, traccion: 3.13, piernas: 3.83, total: 10.46 },
    { date: "2024-10-22", empujes: 3.51, traccion: 3.15, piernas: 3.84, total: 10.5 },
    { date: "2024-10-23", empujes: 3.53, traccion: 3.17, piernas: 3.86, total: 10.56 },
    { date: "2024-10-24", empujes: 3.54, traccion: 3.18, piernas: 3.87, total: 10.59 },
    { date: "2024-10-25", empujes: 3.56, traccion: 3.2, piernas: 3.89, total: 10.65 },
    { date: "2024-10-26", empujes: 3.57, traccion: 3.22, piernas: 3.91, total: 10.7 },
    { date: "2024-10-27", empujes: 3.59, traccion: 3.23, piernas: 3.92, total: 10.74 },
    { date: "2024-10-28", empujes: 3.6, traccion: 3.25, piernas: 3.94, total: 10.79 },
    { date: "2024-10-29", empujes: 3.6, traccion: 3.25, piernas: 3.94, total: 10.79 }
  ];
  

  const getWeeklyAverages = (data, isFatigueData = false) => {
    if (data.length === 0) return [];
  
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  
    let startDate = new Date(sortedData[0].date);
    const endDate = new Date(sortedData[sortedData.length - 1].date);
  
    startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7));
  
    const weeks = [];
  
    while (startDate <= endDate) {
      let weekEnd = new Date(startDate);
      weekEnd.setDate(weekEnd.getDate() + 6);
  
      const weekData = sortedData.filter((d) => {
        const date = new Date(d.date);
        return date >= startDate && date <= weekEnd;
      });
  
      if (weekData.length > 0) {
        let avgValue;
  
        if (isFatigueData) {
          // Calcular los promedios para los datos de fatiga
          const avgEmpujes = weekData.reduce((sum, day) => sum + day.empujes, 0) / weekData.length;
          const avgTraccion = weekData.reduce((sum, day) => sum + day.traccion, 0) / weekData.length;
          const avgPiernas = weekData.reduce((sum, day) => sum + day.piernas, 0) / weekData.length;
          const avgTotal = weekData.reduce((sum, day) => sum + day.total / 3, 0) / weekData.length;
  
          weeks.push({
            startDate: startDate.toISOString().split("T")[0],
            endDate: weekEnd.toISOString().split("T")[0],
            empujes: avgEmpujes.toFixed(2),
            traccion: avgTraccion.toFixed(2),
            piernas: avgPiernas.toFixed(2),
            total: avgTotal.toFixed(2)
          });
        } else {
          // Calcular el promedio para los datos de recuperación
          avgValue = weekData.reduce((sum, day) => sum + day.value, 0) / weekData.length;
  
          weeks.push({
            startDate: startDate.toISOString().split("T")[0],
            endDate: weekEnd.toISOString().split("T")[0],
            value: avgValue.toFixed(2)
          });
        }
      }
  
      startDate.setDate(startDate.getDate() + 7);
    }
  
    return weeks;
  };

  const BarWeeklyAverages = getWeeklyAverages(completeFatigueData, true);
  const weeklyRecoveryAverages = getWeeklyAverages(recoveryData, false);

  const data = {
    labels: BarWeeklyAverages.map((_, index) => `Week ${index + 1}`),
    datasets: [
      {
        label: "Recuperación",
        data: weeklyRecoveryAverages.map((week) => week.value),
        borderColor:"rgb(0, 74, 173)",
        backgroundColor: "rgb(0, 30, 68)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 2,
        pointBorderWidth: 0,
        pointHitRadius: 20
      },
      {
        label: "Fatiga",
        data: BarWeeklyAverages.map((week) => week.total),
        borderColor: "rgb(255, 48, 48)",
        backgroundColor: "rgb(158, 5, 0)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 2,
        pointBorderWidth: 0,
        pointHitRadius: 20
      },
    ],
  };

  const barData = {
    labels: BarWeeklyAverages.map((_, index) => `Week ${index + 1}`),
    datasets: [
      {
        label: "Piernas",
        data: BarWeeklyAverages.map((week) => week.piernas),
        backgroundColor: "rgb(168, 0, 0)",
      },
      {
        label: "Empujes",
        data: BarWeeklyAverages.map((week) => week.empujes),
        backgroundColor: "rgb(0, 191, 99)",
      },
      {
        label: "Tracción",
        data: BarWeeklyAverages.map((week) => week.traccion),
        backgroundColor: "rgb(0, 74, 173)",
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    spanGaps: true,
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
        suggestedMin: 1,
        suggestedMax: 5,
        ticks: {
          color: '#222222',
          font: {
            family: "'Rubik', sans-serif",
            size: 12,
            weight: 'bold',
          },
          maxTicksLimit: 5,
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
          label: function (context) {
            const label = context.dataset.label
            return `${label}: ${context.raw}`;
          }
        }
      },
      legend: {
        display: false,
      },
    },
  };

  const barOptions = {
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
          maxTicksLimit: BarWeeklyAverages.length,
        },
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 0.5)',
        },
      },
      y: {
        suggestedMin: 1,
        suggestedMax: 2,
        ticks: {
          color: '#222222',
          font: {
            family: "'Rubik', sans-serif",
            size: 12,
            weight: 'bold',
          },
          maxTicksLimit: 5,
        },
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 0.5)',
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#222222',
        bodyColor: '#222222',
        callbacks: {
          label: function (context) {
            return `Valor: ${context.raw}`;
          },
        },
      },
      legend: {
        display: true, // Asegura que la leyenda esté visible
        labels: {
          boxWidth: 15,
          boxHeight: 12,
          font: {
            family: "'Rubik', sans-serif",
            size: 12,
            weight: 'bold',
          },
        },
      },
    },
  };


  return (
    <div id="exercises">
      <div className="exercise">
        <div id="header">
          <h3>Fatiga - Recovery</h3>
          <div id="block">
            <p>Actual block</p>
          </div>
        </div>
        <div id="grafic">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="exercise">
        <div id="header">
          <h3>Fatiga</h3>
          <div id="block">
            <p>Actual block</p>
          </div>
        </div>
        <div id="grafic">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default SubTracks;
