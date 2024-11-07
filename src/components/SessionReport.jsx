import React from 'react';
import { Bar } from 'react-chartjs-2';

const SessionReport = ({ session }) => {
  const data = {
    labels: ['Quiz', 'Animal Game', 'Memory Game'],
    datasets: [
      {
        label: 'Scores',
        data: [
          session.quizScores.reduce((a, b) => a + b, 0), // Total Quiz score
          session.animalGameScore,
          session.memoryGameScore
        ],
        backgroundColor: ['#4CAF50', '#FF7043', '#42A5F5']
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="session-report">
      <h3>Session ID: {session.sessionId}</h3>
      <Bar data={data} options={options} />
      <div>
        <p>Quiz Total Score: {session.quizScores.reduce((a, b) => a + b, 0)}</p>
        <p>Animal Game Score: {session.animalGameScore}</p>
        <p>Memory Game Score: {session.memoryGameScore}</p>
      </div>
    </div>
  );
};

export default SessionReport;
