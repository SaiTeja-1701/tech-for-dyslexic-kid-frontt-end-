// At the beginning of your main file (e.g., App.jsx or index.jsx)
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// import React, { useState } from 'react';
// // import Login from './Login';
// import StartScreen from './StartScreen';
// import Quiz from './Quiz';
// import Result from './Result';
// import Report from './Report';
// import '../styles/App.css';

// function App() {
//   const [level, setLevel] = useState(1);
//   const [showResult, setShowResult] = useState(false);
//   const [score, setScore] = useState(0);
//   const [view, setView] = useState('start'); // 'start', 'quiz', 'result', 'report'

//   const handleQuizEnd = (finalScore) => {
//     setScore(finalScore);
//     setShowResult(true);
//     setView('result'); // Ensure result view is shown
//   };

//   const nextLevel = () => {
//     if (level < 3) {
//       setLevel(level + 1);
//       setShowResult(false);
//       setView('quiz');
//     } else {
//       alert("You've completed all levels!");
//       setView('start');
//     }
//   };

//   const startQuiz = () => {
//     setLevel(1);
//     setScore(0);
//     setShowResult(false);
//     setView('quiz');
//   };

//   return (
//     <div className="App">
//       {view === 'start' && <StartScreen onStartQuiz={startQuiz} onViewReport={() => setView('report')} />}
//       {view === 'quiz' && !showResult && <Quiz level={level} onQuizEnd={handleQuizEnd} />}
//       {view === 'result' && showResult && <Result score={score} onNextLevel={nextLevel} />}
//       {view === 'report' && <Report onBack={() => setView('start')} />}
//     </div>
//   );
// }

// export default App;




// App.jsx
import React, { useState } from 'react';
import StartScreen from './StartScreen';
import Quiz from './Quiz';
import Result from './Result';
import Report from './Report';
import '../styles/App.css';

const generateSessionId = () => {
  return Math.floor(10000 + Math.random() * 90000).toString(); // Generates a 5-digit number
};

function App() {
  const [level, setLevel] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [view, setView] = useState('start'); // 'start', 'quiz', 'result', 'report'
  const [session, setSession] = useState({
    sessionId: '',
    username: '',
    level1Score: 0,
    level2Score: 0,
    level3Score: 0,
  });
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState([]);

  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
    setView('result'); // Ensure result view is shown
  };

  const nextLevel = () => {
    if (level < 3) {
      setLevel(level + 1);
      setShowResult(false);
      setSession({
        ...session,
        [`level${level}Score`]: score,
      });
      setView('quiz');
    } else {
      alert("You've completed all levels!");
      setAdminData([...adminData, {
        sessionId: session.sessionId,
        username: session.username,
        level1Score: session.level1Score,
        level2Score: session.level2Score,
        level3Score: score,
        score: session.level1Score + session.level2Score + score,
      }]);
      setView('start');
    }
  };

  const startQuiz = (username) => {
    setSession({
      sessionId: generateSessionId(),
      username: username,
      level1Score: 0,
      level2Score: 0,
      level3Score: 0,
    });
    setLevel(1);
    setScore(0);
    setShowResult(false);
    setView('quiz');
  };

  const handleAdminLogin = (adminId, adminPassword) => {
    if (adminId === '123' && adminPassword === '123') {
      setAdminLoggedIn(true);
      setView('report');
    } else {
      alert('Invalid Admin Credentials');
    }
  };

  return (
    <div className="App" >
      {view === 'start' && <StartScreen onStartQuiz={startQuiz} onAdminLogin={handleAdminLogin} />}
      {view === 'quiz' && !showResult && <Quiz level={level} onQuizEnd={handleQuizEnd} />}
      {view === 'result' && showResult && <Result score={score} onNextLevel={nextLevel} />}
      {view === 'report' && adminLoggedIn && <Report onBack={() => setView('start')} adminData={adminData} />}
    </div>
  );
}

export default App;
