import React from "react";
import { Line, Bar } from "react-chartjs-2";
import dayjs from "dayjs";

const SubTracks = () => {
  const recoveryData = [
    { date: "2024-10-01", value: 3.2 },
    { date: "2024-10-02", value: 3.21 },
    { date: "2024-10-03", value: 3.23 },
    { date: "2024-10-04", value: 3.24 },
    { date: "2024-10-05", value: 3.26 },
    { date: "2024-10-06", value: 3.27 },
    { date: "2024-10-07", value: 3.29 },
    { date: "2024-10-08", value: 3.3 },
    { date: "2024-10-09", value: 3.32 },
    { date: "2024-10-10", value: 3.33 },
    { date: "2024-10-11", value: 3.35 },
    { date: "2024-10-12", value: 3.36 },
    { date: "2024-10-13", value: 3.38 },
    { date: "2024-10-14", value: 3.39 },
    { date: "2024-10-15", value: 3.41 },
    { date: "2024-10-16", value: 3.42 },
    { date: "2024-10-17", value: 3.44 },
    { date: "2024-10-18", value: 3.45 },
    { date: "2024-10-19", value: 3.47 },
    { date: "2024-10-20", value: 3.48 },
    { date: "2024-10-21", value: 3.5 },
    { date: "2024-10-22", value: 3.51 },
    { date: "2024-10-23", value: 3.53 },
    { date: "2024-10-24", value: 3.54 },
    { date: "2024-10-25", value: 3.56 },
    { date: "2024-10-26", value: 3.57 },
    { date: "2024-10-27", value: 3.59 },
    { date: "2024-10-28", value: 3.6 }
  ];

  const completeFatigueData = [
    { date: "2024-10-01", empujes: 3.2, traccion: 2.8, piernas: 3.5 },
    { date: "2024-10-02", empujes: 3.21, traccion: 2.82, piernas: 3.52 },
    { date: "2024-10-03", empujes: 3.23, traccion: 2.83, piernas: 3.54 },
    { date: "2024-10-04", empujes: 3.24, traccion: 2.85, piernas: 3.55 },
    { date: "2024-10-05", empujes: 3.26, traccion: 2.87, piernas: 3.57 },
    { date: "2024-10-06", empujes: 3.27, traccion: 2.89, piernas: 3.58 },
    { date: "2024-10-07", empujes: 3.29, traccion: 2.9, piernas: 3.6 },
    { date: "2024-10-08", empujes: 3.3, traccion: 2.92, piernas: 3.61 },
    { date: "2024-10-09", empujes: 3.32, traccion: 2.94, piernas: 3.63 },
    { date: "2024-10-10", empujes: 3.33, traccion: 2.95, piernas: 3.65 },
    { date: "2024-10-11", empujes: 3.35, traccion: 2.97, piernas: 3.66 },
    { date: "2024-10-12", empujes: 3.36, traccion: 2.99, piernas: 3.68 },
    { date: "2024-10-13", empujes: 3.38, traccion: 3.0, piernas: 3.69 },
    { date: "2024-10-14", empujes: 3.39, traccion: 3.02, piernas: 3.71 },
    { date: "2024-10-15", empujes: 3.41, traccion: 3.04, piernas: 3.73 },
    { date: "2024-10-17", empujes: 3.44, traccion: 3.07, piernas: 3.76 },
    { date: "2024-10-18", empujes: 3.45, traccion: 3.08, piernas: 3.78 },
    { date: "2024-10-19", empujes: 3.47, traccion: 3.1, piernas: 3.79 },
    { date: "2024-10-20", empujes: 3.48, traccion: 3.12, piernas: 3.81 },
    { date: "2024-10-21", empujes: 3.5, traccion: 3.13, piernas: 3.83 },
    { date: "2024-10-22", empujes: 3.51, traccion: 3.15, piernas: 3.84 },
    { date: "2024-10-23", empujes: 3.53, traccion: 3.17, piernas: 3.86 },
    { date: "2024-10-24", empujes: 3.54, traccion: 3.18, piernas: 3.87 },
    { date: "2024-10-25", empujes: 3.56, traccion: 3.2, piernas: 3.89 },
    { date: "2024-10-26", empujes: 3.57, traccion: 3.22, piernas: 3.91 },
    { date: "2024-10-27", empujes: 3.59, traccion: 3.23, piernas: 3.92 },
    { date: "2024-10-28", empujes: 3.6, traccion: 3.25, piernas: 3.94 }
];



  const fatigueData = [
    { date: "2024-10-01", value: 2.8 },
    { date: "2024-10-02", value: 2.81 },
    { date: "2024-10-04", value: 2.82 },
    { date: "2024-10-05", value: 2.83 },
    { date: "2024-10-06", value: 2.84 },
    { date: "2024-10-07", value: 2.84 },
    { date: "2024-10-08", value: 2.85 },
    { date: "2024-10-09", value: 2.86 },
    { date: "2024-10-10", value: 2.87 },
    { date: "2024-10-11", value: 2.87 },
    { date: "2024-10-12", value: 2.88 },
    { date: "2024-10-13", value: 2.89 },
    { date: "2024-10-14", value: 2.9 },
    { date: "2024-10-15", value: 2.9 },
    { date: "2024-10-16", value: 2.91 },
    { date: "2024-10-17", value: 2.92 },
    { date: "2024-10-18", value: 2.93 },
    { date: "2024-10-19", value: 2.93 },
    { date: "2024-10-20", value: 2.94 },
    { date: "2024-10-21", value: 2.95 },
    { date: "2024-10-22", value: 2.96 },
    { date: "2024-10-23", value: 2.96 },
    { date: "2024-10-24", value: 2.97 },
    { date: "2024-10-25", value: 2.98 },
    { date: "2024-10-26", value: 2.99 },
    { date: "2024-10-27", value: 2.99 },
    { date: "2024-10-28", value: 3.0 }
  ];

  const getWeeklyAverages = (data) => {
    if (data.length === 0) return [];
  
    // Ordenar datos por fecha (por si no vienen ordenados)
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  
    // Obtener la primera y última fecha
    let startDate = new Date(sortedData[0].date);
    const endDate = new Date(sortedData[sortedData.length - 1].date);
  
    // Ajustar `startDate` al lunes más cercano anterior o igual
    startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7));
  
    const weeks = [];
  
    while (startDate <= endDate) {
      // Calcular el final de la semana (lunes siguiente)
      let weekEnd = new Date(startDate);
      weekEnd.setDate(weekEnd.getDate() + 6);
  
      // Filtrar datos que caen en esta semana
      const weekData = sortedData.filter((d) => {
        const date = new Date(d.date);
        return date >= startDate && date <= weekEnd;
      });
  
      // Si hay datos en la semana, calcular promedios
      if (weekData.length > 0) {
        const avgEmpujes = weekData.reduce((sum, day) => sum + day.empujes, 0) / weekData.length;
        const avgTraccion = weekData.reduce((sum, day) => sum + day.traccion, 0) / weekData.length;
        const avgPiernas = weekData.reduce((sum, day) => sum + day.piernas, 0) / weekData.length;
  
        weeks.push({
          startDate: startDate.toISOString().split("T")[0],
          endDate: weekEnd.toISOString().split("T")[0],
          empujes: avgEmpujes.toFixed(2),
          traccion: avgTraccion.toFixed(2),
          piernas: avgPiernas.toFixed(2),
        });
      }
  
      // Avanzar a la próxima semana (lunes siguiente)
      startDate.setDate(startDate.getDate() + 7);
    }
  
    console.log(weeks);
    return weeks;
  };
  
  

  const weeklyAverages = getWeeklyAverages(completeFatigueData);

  const getFilteredData = (data) => {

    const maxPoints = 30;
    if (data.length <= maxPoints) return data;

    const step = Math.ceil(data.length / maxPoints);
    let reducedData = data.filter((_, index) => index % step === 0);

    const lastPoint = data[data.length - 1];
    if (!reducedData.includes(lastPoint)) {
      reducedData.push(lastPoint);
    }

    return reducedData;
  };


  const filteredRecovery = getFilteredData(recoveryData)
  const filtredFatigue = getFilteredData(fatigueData)
  const labels = filteredRecovery.map((d) => dayjs(d.date).format("DD/MM"));

  const data = {
    labels,
    datasets: [
      {
        label: "Recuperación",
        data: filteredRecovery.map((d) => d.value),
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
        data: filtredFatigue.map((d) => d.value),
        borderColor:"rgb(255, 48, 48)",
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
    labels: weeklyAverages.map((_, index) => `Week ${index + 1}`),
    datasets: [
      {
        label: "Piernas",
        data: weeklyAverages.map((week) => week.piernas),
        backgroundColor: "rgb(168, 0, 0)",
      },
      {
        label: "Empujes",
        data: weeklyAverages.map((week) => week.empujes),
        backgroundColor: "rgb(0, 191, 99)",
      },
      {
        label: "Tracción",
        data: weeklyAverages.map((week) => week.traccion),
        backgroundColor: "rgb(0, 74, 173)",
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
            return `${context.raw}`;
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
          maxTicksLimit: weeklyAverages.length,
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
