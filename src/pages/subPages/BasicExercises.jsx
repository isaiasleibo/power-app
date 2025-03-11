import React, { useState } from 'react';
import BasicExerciseGrafic from '../../components/BasicExerciseGrafic';

const BasicExercises = () => {
    const [squatFilter, setSquatFilter] = useState(3);
    const [benchFilter, setBenchFilter] = useState(3);
    const [deadliftFilter, setDeadliftFilter] = useState(3);

    const squatData = [
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

    const benchData = [
        { date: '2024-08-01', weight: 60 },
        { date: '2024-08-15', weight: 62 },
        { date: '2024-09-01', weight: 64 },
        { date: '2024-09-15', weight: 65 },
        { date: '2024-10-01', weight: 66 },
        { date: '2024-10-15', weight: 67 },
        { date: '2024-11-01', weight: 68 },
        { date: '2024-11-15', weight: 69 },
        { date: '2024-12-01', weight: 70 },
    ];

    const deadliftData = [
        { date: '2024-08-01', weight: 100 },
        { date: '2024-08-15', weight: 105 },
        { date: '2024-09-01', weight: 110 },
        { date: '2024-09-15', weight: 112 },
        { date: '2024-10-01', weight: 115 },
        { date: '2024-10-15', weight: 118 },
        { date: '2024-11-01', weight: 120 },
    ];

    return (
        <>
            <div className="exercise">
                <div id="header">
                    <h3>Sentadilla</h3>
                    <div id='buttons'>
                        <button onClick={() => setSquatFilter(1)} className={squatFilter === 1 ? 'active' : ''}><p>1m</p></button>
                        <button onClick={() => setSquatFilter(3)} className={squatFilter === 3 ? 'active' : ''}><p>3m</p></button>
                        <button onClick={() => setSquatFilter(6)} className={squatFilter === 6 ? 'active' : ''}><p>6m</p></button>
                    </div>
                </div>
                <div id="grafic">
                    <BasicExerciseGrafic data={squatData} filter={squatFilter} />
                </div>
            </div>
            <div className="exercise">
                <div id="header">
                    <h3>Press Banca</h3>
                    <div id='buttons'>
                        <button onClick={() => setBenchFilter(1)} className={benchFilter === 1 ? 'active' : ''}><p>1m</p></button>
                        <button onClick={() => setBenchFilter(3)} className={benchFilter === 3 ? 'active' : ''}><p>3m</p></button>
                        <button onClick={() => setBenchFilter(6)} className={benchFilter === 6 ? 'active' : ''}><p>6m</p></button>
                    </div>
                </div>
                <div id="grafic">
                    <BasicExerciseGrafic data={benchData} filter={benchFilter} />
                </div>
            </div>
            <div className="exercise">
                <div id="header">
                    <h3>Peso Muerto</h3>
                    <div id='buttons'>
                        <button onClick={() => setDeadliftFilter(1)} className={deadliftFilter === 1 ? 'active' : ''}><p>1m</p></button>
                        <button onClick={() => setDeadliftFilter(3)} className={deadliftFilter === 3 ? 'active' : ''}><p>3m</p></button>
                        <button onClick={() => setDeadliftFilter(6)} className={deadliftFilter === 6 ? 'active' : ''}><p>6m</p></button>
                    </div>
                </div>
                <div id="grafic">
                    <BasicExerciseGrafic data={deadliftData} filter={deadliftFilter} />
                </div>
            </div>
        </>
    );
};

export default BasicExercises;
