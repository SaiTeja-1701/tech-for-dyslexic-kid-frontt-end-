// Graphs.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Graphs = ({ sessionData, onBack }) => {
  const performanceData = {
    labels: ['Level 1', 'Level 2', 'Level 3'],
    datasets: [
      {
        label: `Session ${sessionData.sessionId}`,
        data: [
          sessionData.level1Score,
          sessionData.level2Score,
          sessionData.level3Score,
        ],
        backgroundColor: `rgba(75, 192, 192, 0.2)`,
        borderColor: `rgba(75, 192, 192, 1)`,
        borderWidth: 1,
      },
    ],
  };

  const expressionData = {
    labels: ['Happy', 'Sad', 'Anger', 'Neutral'],
    datasets: [
      {
        label: 'Expression Tally',
        data: [15, 5, 2, 8], // Preset values
        backgroundColor: `rgba(255, 99, 132, 0.2)`,
        borderColor: `rgba(255, 99, 132, 1)`,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="graphs">
      <h3>Performance Across Levels</h3>
      <Bar data={performanceData} options={options} />
      <h3>Expression Tally</h3>
      <Bar data={expressionData} options={options} />
      <button onClick={onBack}>Back to Report</button>
    </div>
  );
};

export default Graphs;
