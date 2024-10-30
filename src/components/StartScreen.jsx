import React from 'react';

const StartScreen = ({ onStartQuiz, onViewReport }) => (
  <div className="start-screen">
    <h1>The React Quiz</h1>
    <button onClick={onStartQuiz}>START GAME</button>
    <button onClick={onViewReport}>GET REPORT</button>
  </div>
);

export default StartScreen;