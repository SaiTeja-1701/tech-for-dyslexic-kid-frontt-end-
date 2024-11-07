import React, { useState } from 'react';
import SessionReport from './SessionReport';

const Report = ({ allSessions }) => {
  const [selectedSession, setSelectedSession] = useState(null);

  return (
    <div className="report">
      <h1>All Sessions</h1>
      <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Quiz Total Score</th>
            <th>Animal Game Score</th>
            <th>Memory Game Score</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {allSessions.map((session) => (
            <tr key={session.sessionId}>
              <td>{session.sessionId}</td>
              <td>{session.quizScores.reduce((a, b) => a + b, 0)}</td>
              <td>{session.animalGameScore}</td>
              <td>{session.memoryGameScore}</td>
              <td>
                <button onClick={() => setSelectedSession(session)}>View Report</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedSession && (
        <div className="session-report-container">
          <SessionReport session={selectedSession} />
          <button onClick={() => setSelectedSession(null)}>Close Report</button>
        </div>
      )}
    </div>
  );
};

export default Report;
