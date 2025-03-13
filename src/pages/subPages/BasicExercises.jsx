import React, { useState } from 'react';
import BasicExerciseGrafic from '../../components/BasicExerciseGrafic';

const BasicExercises = () => {

    const squatData = [
        { date: '2024-10-01', weight: 78 },
        { date: '2024-10-15', weight: 79 },
        { date: '2024-11-01', weight: 80 },
        { date: '2024-11-15', weight: 81 },
        { date: '2024-12-01', weight: 82 },
        { date: '2024-12-15', weight: 83 },
        { date: '2025-01-01', weight: 84 },
        { date: '2025-01-15', weight: 85 },
        { date: '2025-02-01', weight: 86 },
        { date: '2025-02-15', weight: 87 },
        { date: '2025-03-01', weight: 88 },
        { date: '2025-03-08', weight: 89 },
        { date: '2025-03-11', weight: 90 },
    ];

    const benchData = [
        { date: '2024-10-01', weight: 66 },
        { date: '2024-10-15', weight: 67 },
        { date: '2024-11-01', weight: 68 },
        { date: '2024-11-15', weight: 69 },
        { date: '2024-12-01', weight: 70 },
        { date: '2024-12-15', weight: 71 },
        { date: '2025-01-01', weight: 72 },
        { date: '2025-01-15', weight: 72.5 },
        { date: '2025-02-01', weight: 73 },
        { date: '2025-02-15', weight: 73.8 },
        { date: '2025-03-01', weight: 74 },
        { date: '2025-03-08', weight: 74.5 },
        { date: '2025-03-11', weight: 75 },
    ];

    const deadliftData = [
        { date: '2024-10-01', weight: 115 },
        { date: '2024-10-15', weight: 118 },
        { date: '2024-11-01', weight: 120 },
        { date: '2024-11-15', weight: 122 },
        { date: '2024-12-01', weight: 124 },
        { date: '2024-12-15', weight: 125 },
        { date: '2025-01-01', weight: 126 },
        { date: '2025-01-15', weight: 127 },
        { date: '2025-02-01', weight: 128 },
        { date: '2025-02-15', weight: 129 },
        { date: '2025-03-01', weight: 130 },
        { date: '2025-03-08', weight: 131 },
        { date: '2025-03-11', weight: 132 },
    ];

    const Exercise = ({ title, data, color, dotColor }) => {
        const [filter, setFilter] = useState(2)

        return (
            <>
                <div className="exercise">
                    <div id="header">
                        <h3>{title}</h3>
                        <div id='buttons'>
                            <button onClick={() => setFilter(2)} className={filter === 2 ? 'active' : ''}><p>2m</p></button>
                            <button onClick={() => setFilter(6)} className={filter === 6 ? 'active' : ''}><p>6m</p></button>
                            <button id="all" onClick={() => setFilter(10000)} className={filter === 10000 ? 'active' : ''}><p>All</p></button>
                        </div>
                    </div>
                    <div id="grafic">
                        <BasicExerciseGrafic data={data} filter={filter} color={color} dotColor={dotColor} />
                    </div>
                </div>

                <div id="weight-data">
                    <div className="data">
                        <p className="title">Inicial</p>
                        <p className="description">{data[0].weight}kg</p>
                    </div>
                    <div className="data">
                        <p className="title">Último</p>
                        <p className="description">{data[data.length - 1].weight}kg</p>
                    </div>
                    <div className="data">
                        <p className="title">Más alto</p>
                        <p className="description">{Math.max(...data.map(entry => entry.weight))}kg</p>
                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            <div id="exercises">
                <Exercise title="Sentadilla" data={squatData} color="#ff3030" dotColor="#9e0500" />
                <Exercise title="Press Banca" data={benchData} color='#139133' dotColor="#004712" />
                <Exercise title="Peso Muerto" data={deadliftData} color="#205bfa" dotColor="#00227d" />
            </div>
        </>
    );
};

export default BasicExercises;
