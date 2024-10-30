// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const Report = ({ onBack }) => {
//   // Initialize constant values for student performance
//   const performanceData = [
//     { level: 'Level 1', score: 75 },
//     { level: 'Level 2', score: 85 },
//     { level: 'Level 3', score: 65 },
//   ];

//   // Initialize constant values for student expressions
//   const expressionData = [
//     { expression: 'Happy', tally: 15 },
//     { expression: 'Sad', tally: 5 },
//     { expression: 'Anger', tally: 2 },
//     { expression: 'Neutral', tally: 8 },
//   ];

//   return (
//     <div className="report">
//       <h2>Student Report</h2>
      
//       {/* Performance Bar Graph */}
//       <h3>Performance Across Levels</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="level" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="score" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>

//       {/* Expression Tally Bar Graph */}
//       <h3>Expression Tally</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={expressionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="expression" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="tally" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>

//       <button onClick={onBack}>Back to Start</button>
//     </div>
//   );
// };

// export default Report;
// Report.jsx
import React, { useState } from 'react';
import Graphs from './Graphs';

const Report = ({ onBack, adminData }) => {
  const [selectedSession, setSelectedSession] = useState(null);

  return (
    <div className="report">
      {selectedSession ? (
        <Graphs sessionData={selectedSession} onBack={() => setSelectedSession(null)} />
      ) : (
        <>
          <h2>Admin Report</h2>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Username</th>
                <th>Session ID</th>
                <th>Level 1 Score</th>
                <th>Level 2 Score</th>
                <th>Level 3 Score</th>
                <th>Total Score</th>
                <th>Graphs</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.username}</td>
                  <td>{data.sessionId}</td>
                  <td>{data.level1Score}</td>
                  <td>{data.level2Score}</td>
                  <td>{data.level3Score}</td>
                  <td>{data.score}</td>
                  <td>
                    <button onClick={() => setSelectedSession(data)}>
                      View Graphs
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={onBack}>Back to Start</button>
        </>
      )}
    </div>
  );
};

export default Report;
