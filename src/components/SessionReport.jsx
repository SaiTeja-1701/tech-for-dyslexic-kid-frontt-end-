// src/components/SessionReport.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const SessionReport = ({ session }) => {
  const data = {
    labels: ['Level 1', 'Level 2', 'Level 3'],
    datasets: [
      {
        label: 'Scores',
        data: [session.level1Score, session.level2Score, session.level3Score],
        backgroundColor: ['#4caf50', '#ffa726', '#42a5f5'],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Session ID: {session.sessionId}</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SessionReport;
