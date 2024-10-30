import React from 'react';

const Result = ({ score, onNextLevel }) => (
  <div className="result">
    <h2>Your Score: {score}</h2>
    <button onClick={onNextLevel}>Next Level</button>
  </div>
);

export default Result;
