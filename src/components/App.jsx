import React, { useState } from 'react';
import StartScreen from './StartScreen';
import Quiz from './Quiz';
import AnimalGame from './AnimalGame';
import MemoryGame from './MemoryGame';
import Report from './Report';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library for unique session IDs
import '../styles/App.css';

function App() {
  const [gameStage, setGameStage] = useState('start');
  const [currentSessionData, setCurrentSessionData] = useState({
    sessionId: '',
    quizScores: [],
    animalGameScore: 0,
    memoryGameScore: 0
  });
  const [allSessions, setAllSessions] = useState([]); // Array to hold all session data

  // Start a new game session with a unique session ID
  const handleStartQuiz = () => {
    const newSessionId = uuidv4(); // Generate unique session ID
    setCurrentSessionData({
      sessionId: newSessionId,
      quizScores: [],
      animalGameScore: 0,
      memoryGameScore: 0
    });
    setGameStage('quiz');
  };

  // Admin Login - navigate to Report screen
  const handleAdminLogin = () => {
    setGameStage('report');
  };

  // End of Quiz, move to Level 2: Animal Game
  const handleQuizEnd = (score) => {
    setCurrentSessionData((prev) => ({
      ...prev,
      quizScores: [...prev.quizScores, score]
    }));
    setGameStage('animalGame');
  };

  // End of Animal Game, move to Level 3: Memory Game
  const handleAnimalGameEnd = (score) => {
    setCurrentSessionData((prev) => ({ ...prev, animalGameScore: score }));
    setGameStage('memoryGame');
  };

  // End of Memory Game, save session data and show Report
  const handleMemoryGameEnd = (score) => {
    const completedSessionData = {
      ...currentSessionData,
      memoryGameScore: score
    };

    // Add the completed session to allSessions
    setAllSessions((prev) => [...prev, completedSessionData]);
    setGameStage('report');
  };

  return (
    <div className="app">
      {gameStage === 'start' && (
        <StartScreen onStartQuiz={handleStartQuiz} onAdminLogin={handleAdminLogin} />
      )}
      {gameStage === 'quiz' && <Quiz onQuizEnd={handleQuizEnd} />}
      {gameStage === 'animalGame' && <AnimalGame onFinish={handleAnimalGameEnd} />}
      {gameStage === 'memoryGame' && <MemoryGame onFinish={handleMemoryGameEnd} />}
      {gameStage === 'report' && <Report allSessions={allSessions} />}
    </div>
  );
}

export default App;
