import React, { useState } from 'react';
// import Login from './Login';
import StartScreen from './StartScreen';
import Quiz from './Quiz';
import Result from './Result';
import Report from './Report';
import '../styles/App.css';

function App() {
  const [level, setLevel] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [view, setView] = useState('start'); // 'start', 'quiz', 'result', 'report'

  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
    setView('result'); // Ensure result view is shown
  };

  const nextLevel = () => {
    if (level < 3) {
      setLevel(level + 1);
      setShowResult(false);
      setView('quiz');
    } else {
      alert("You've completed all levels!");
      setView('start');
    }
  };

  const startQuiz = () => {
    setLevel(1);
    setScore(0);
    setShowResult(false);
    setView('quiz');
  };

  return (
    <div className="App">
      {view === 'start' && <StartScreen onStartQuiz={startQuiz} onViewReport={() => setView('report')} />}
      {view === 'quiz' && !showResult && <Quiz level={level} onQuizEnd={handleQuizEnd} />}
      {view === 'result' && showResult && <Result score={score} onNextLevel={nextLevel} />}
      {view === 'report' && <Report onBack={() => setView('start')} />}
    </div>
  );
}

export default App;
