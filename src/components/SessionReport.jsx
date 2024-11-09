import React from 'react';
import Graphs from './Graphs'; // Import the Graphs component
import '../styles/SessionReport.css'; // Import the CSS for styling

const SessionReport = ({ session, onBackToReport }) => {
  const labels = ['Quiz', 'Animal Game', 'Memory Game'];
  const scores = [
    session.quizScores.reduce((a, b) => a + b, 0), // Total Quiz score
    session.animalGameScore,
    session.memoryGameScore
  ];
  const expressionTallies = {
    happy: [5, 3, 7], // Replace these values with actual happy tally values as needed
    sad: [2, 4, 1], // Replace these values with actual sad tally values as needed
    anger: [1, 2, 3], // Replace these values with actual anger tally values as needed
    disgust: [0, 1, 2] // Replace these values with actual disgust tally values as needed
  };

  return (
    <div className="session-report">
      <h3>Session ID: {session.sessionId}</h3>
      <div className="charts-container">
        <Graphs labels={labels} scores={scores} expressionTallies={expressionTallies} />
      </div>
      <button onClick={onBackToReport} className="back-to-report-button">Back to Report</button>
    </div>
  );
};

export default SessionReport;


// // // --------------------------------BELOW IS WORKING
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
// import '../styles/SessionReport.css'; // Import the CSS for styling

// ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// const SessionReport = ({ session, onBackToHome }) => {
//   const scoresData = {
//     labels: ['Quiz', 'Animal Game', 'Memory Game'],
//     datasets: [
//       {
//         label: 'Scores',
//         data: [
//           session.quizScores.reduce((a, b) => a + b, 0), // Total Quiz score
//           session.animalGameScore,
//           session.memoryGameScore
//         ],
//         backgroundColor: '#4CAF50', // Adjust the color as needed
//         borderColor: '#388E3C', // Adjust the color as needed
//         borderWidth: 1
//       }
//     ]
//   };

//   const expressionTallyData = {
//     labels: ['Quiz', 'Animal Game', 'Memory Game'],
//     datasets: [
//       {
//         label: 'Expression Tally',
//         data: [5, 3, 7], // Replace these values with actual expression tally values as needed
//         backgroundColor: '#FF7043', // Adjust the color as needed
//         borderColor: '#D32F2F', // Adjust the color as needed
//         borderWidth: 1
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Scores and Expression Tally by Activity',
//         font: {
//           size: 18
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 10, // Set maximum value to 10
//         title: {
//           display: true,
//           text: 'Value',
//           font: {
//             size: 16
//           }
//         },
//         ticks: {
//           stepSize: 1,
//           font: {
//             size: 14
//           }
//         }
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Activity',
//           font: {
//             size: 16
//           }
//         },
//         ticks: {
//           font: {
//             size: 14
//           }
//         }
//       },
//     },
//   };

//   return (
//     <div className="session-report">
//       <h3>Session ID: {session.sessionId}</h3>
//       <div className="charts-container">
//         <div className="chart-item">
//           <Bar data={scoresData} options={options} />
//         </div>
//         <div className="chart-item">
//           <Bar data={expressionTallyData} options={options} />
//         </div>
//       </div>
//       <div className="table-container">
//         <table className="session-table">
//           <thead>
//             <tr>
//               <th>Activity</th>
//               <th>Score</th>
//               <th>Expression Tally</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Quiz</td>
//               <td>{session.quizScores.reduce((a, b) => a + b, 0)}</td>
//               <td>5</td> {/* Replace with actual expression tally value */}
//             </tr>
//             <tr>
//               <td>Animal Game</td>
//               <td>{session.animalGameScore}</td>
//               <td>3</td> {/* Replace with actual expression tally value */}
//             </tr>
//             <tr>
//               <td>Memory Game</td>
//               <td>{session.memoryGameScore}</td>
//               <td>7</td> {/* Replace with actual expression tally value */}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <button onClick={onBackToHome} className="back-to-home-button">Back to Home</button>
//     </div>
//   );
// };

// export default SessionReport;
