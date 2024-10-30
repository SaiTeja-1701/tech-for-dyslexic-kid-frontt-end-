import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Report = ({ onBack }) => {
  // Initialize constant values for student performance
  const performanceData = [
    { level: 'Level 1', score: 75 },
    { level: 'Level 2', score: 85 },
    { level: 'Level 3', score: 65 },
  ];

  // Initialize constant values for student expressions
  const expressionData = [
    { expression: 'Happy', tally: 15 },
    { expression: 'Sad', tally: 5 },
    { expression: 'Anger', tally: 2 },
    { expression: 'Neutral', tally: 8 },
  ];

  return (
    <div className="report">
      <h2>Student Report</h2>
      
      {/* Performance Bar Graph */}
      <h3>Performance Across Levels</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="level" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* Expression Tally Bar Graph */}
      <h3>Expression Tally</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={expressionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="expression" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="tally" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <button onClick={onBack}>Back to Start</button>
    </div>
  );
};

export default Report;