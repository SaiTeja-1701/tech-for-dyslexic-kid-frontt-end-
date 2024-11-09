// Graphs.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Graphs = ({ labels, scores }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Scores',
        data: scores,
        backgroundColor: [
          '#FF5733',
          '#33FF57',
          '#3357FF',
          '#FF33A6',
          '#F3FF33',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Scores by Activity',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Score',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Activity',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Graphs;
// // ------------------------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import Graphs from './Graphs'; // Import the Graphs component
// import '../styles/SessionReport.css'; // Import the CSS for styling

// const SessionReport = ({ session, onBackToReport }) => {
//   const labels = ['Quiz', 'Animal Game', 'Memory Game'];
//   const scores = [
//     session.quizScores.reduce((a, b) => a + b, 0), // Total Quiz score
//     session.animalGameScore,
//     session.memoryGameScore
//   ];
//   const expressionTallies = {
//     happy: [5, 4, 6], // Placeholder values for Happy expressions
//     sad: [2, 3, 4],   // Placeholder values for Sad expressions
//     anger: [3, 2, 1], // Placeholder values for Anger expressions
//   };

//   return (
//     <div className="session-report">
//       <h3>Session ID: {session.sessionId}</h3>
//       <div className="charts-container">
//         <div className="chart-item">
//           <Graphs labels={labels} scores={scores} expressionTallies={{}} />
//         </div>
//         <div className="chart-item">
//           <Graphs labels={['Happy', 'Sad', 'Anger']} scores={[]} expressionTallies={expressionTallies.happy} />
//         </div>
//         <div className="chart-item">
//           <Graphs labels={['Happy', 'Sad', 'Anger']} scores={[]} expressionTallies={expressionTallies.sad} />
//         </div>
//         <div className="chart-item">
//           <Graphs labels={['Happy', 'Sad', 'Anger']} scores={[]} expressionTallies={expressionTallies.anger} />
//         </div>
//       </div>
//       <button onClick={onBackToReport} className="back-to-report-button">Back to Report</button>
//     </div>
//   );
// };

// export default SessionReport;
