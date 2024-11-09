import React from 'react';

const Result = ({ sessionId, quizScore, animalGameScore, memoryGameScore, onBackToStart }) => (
  <div className="result">
    <h2>Session ID: {sessionId}</h2>
    <h2>Quiz Score: {quizScore}</h2>
    <h2>Animal Game Score: {animalGameScore}</h2>
    <h2>Memory Game Score: {memoryGameScore}</h2>
    <button onClick={onBackToStart}>Back to Start Screen</button>
  </div>
);

export default Result;
// -******----------------------*****-------------------------------THE  ABOVE CHECKPOINT 1