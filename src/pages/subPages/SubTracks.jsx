import React from "react";
import { Line } from "react-chartjs-2";
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


  const fatigueData = [
    { date: "2024-10-01", value: 2.8 },
    { date: "2024-10-02", value: 2.81 },
    { date: "2024-10-03", value: 2.81 },
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
    </div>
  );
};

export default SubTracks;
