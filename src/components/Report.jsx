import React, { useState } from 'react';
import SessionReport from './SessionReport';
// import "../styles/Report.css";

const Report = ({ allSessions, onViewSessionReport, onBackToHome }) => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSessions = allSessions.filter(
    (session) =>
      session.sessionId.includes(searchTerm)
  );

  const handleViewGraphs = (session) => {
    setSelectedSession(session);
    onViewSessionReport(session);
  };

  return (
    <div className="report">
      <h1>All Sessions</h1>
      <input
        type="text"
        placeholder="Search by Session ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <table className="session-table">
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Quiz Total Score</th>
            <th>Animal Game Score</th>
            <th>Memory Game Score</th>
            <th>Expression Tally</th> {/* Placeholder for constant values */}
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredSessions.map((session) => (
            <tr key={session.sessionId}>
              <td>{session.sessionId}</td>
              <td>{session.quizScores.reduce((a, b) => a + b, 0)}</td>
              <td>{session.animalGameScore}</td>
              <td>{session.memoryGameScore}</td>
              <td>Constant Value</td> {/* Placeholder for constant values */}
              <td>
                <button onClick={() => handleViewGraphs(session)}>View Graphs</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onBackToHome} className="back-to-home-button">Back to Home</button>
    </div>
  );
};

export default Report;

// // // -******----------------------*****-------------------------------THE  BELOW CHECKPOINT 1
// import React, { useState } from 'react';
// import SessionReport from './SessionReport';
// // import "../styles/Report.css";

// const Report = ({ allSessions, onBackToHome }) => {
//   const [selectedSession, setSelectedSession] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredSessions = allSessions.filter(
//     (session) =>
//       session.sessionId.includes(searchTerm)
//   );

//   return (
//     <div className="report">
//       <h1>All Sessions</h1>
//       <input
//         type="text"
//         placeholder="Search by Session ID"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-bar"
//       />
//       <table className="session-table">
//         <thead>
//           <tr>
//             <th>Session ID</th>
//             <th>Quiz Total Score</th>
//             <th>Animal Game Score</th>
//             <th>Memory Game Score</th>
//             <th>Expression Tally</th> {/* Placeholder for constant values */}
//             <th>View Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredSessions.map((session) => (
//             <tr key={session.sessionId}>
//               <td>{session.sessionId}</td>
//               <td>{session.quizScores.reduce((a, b) => a + b, 0)}</td>
//               <td>{session.animalGameScore}</td>
//               <td>{session.memoryGameScore}</td>
//               <td>Constant Value</td> {/* Placeholder for constant values */}
//               <td>
//                 <button onClick={() => setSelectedSession(session)}>View Report</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedSession && (
//         <div className="session-report-container">
//           <SessionReport session={selectedSession} onBackToHome={onBackToHome} /> {/* Adding onBackToHome */}
//         </div>
//       )}
//       <button onClick={onBackToHome} className="back-to-home-button">Back to Home</button>
//     </div>
//   );
// };

// export default Report;
