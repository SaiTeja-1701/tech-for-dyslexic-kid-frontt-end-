
// // // -******----------------------*****-------------------------------THE  below CHECKPOINT 1
// import React, { useState, useEffect } from 'react';
// import StartScreen from './StartScreen';
// import Quiz from './Quiz';
// import AnimalGame from './AnimalGame';
// import MemoryGame from './MemoryGame';
// import Report from './Report';
// import Result from './Result';
// import SessionReport from './SessionReport'; // Ensure this is imported
// import '../styles/App.css';

// function App() {
//   const [gameStage, setGameStage] = useState('start');
//   const [currentSessionData, setCurrentSessionData] = useState({
//     sessionId: '',
//     quizScores: [],
//     animalGameScore: 0,
//     memoryGameScore: 0
//   });
//   const [allSessions, setAllSessions] = useState([]); 
//   const [sessionComplete, setSessionComplete] = useState(false); 

//   useEffect(() => {
//     const storedSessions = JSON.parse(localStorage.getItem('sessions'));
//     if (storedSessions) {
//       setAllSessions(storedSessions);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('sessions', JSON.stringify(allSessions));
//   }, [allSessions]);

//   // Generate a 6-digit random session ID
//   const generateSessionId = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
//   };

//   const handleStartQuiz = () => {
//     const newSessionId = generateSessionId(); // Generate unique session ID
//     setCurrentSessionData({
//       sessionId: newSessionId,
//       quizScores: [],
//       animalGameScore: 0,
//       memoryGameScore: 0
//     });
//     setSessionComplete(false);
//     setGameStage('quiz');
//   };

//   const handleAdminLogin = () => {
//     setGameStage('report');
//   };

//   const handleQuizEnd = (score) => {
//     setCurrentSessionData((prev) => ({
//       ...prev,
//       quizScores: [...prev.quizScores, score]
//     }));
//     setGameStage('animalGame');
//   };

//   const handleAnimalGameEnd = (score) => {
//     setCurrentSessionData((prev) => ({ ...prev, animalGameScore: score }));
//     setGameStage('memoryGame');
//   };

//   const handleMemoryGameEnd = (score) => {
//     const completedSessionData = {
//       ...currentSessionData,
//       memoryGameScore: score
//     };

//     setAllSessions((prev) => [...prev, completedSessionData]);
//     setCurrentSessionData(completedSessionData); 
//     setGameStage('result'); 
//   };

//   const handleBackToStart = () => {
//     setGameStage('start');
//   };

//   useEffect(() => {
//     if (sessionComplete) {
//       setGameStage('report');
//     }
//   }, [sessionComplete]);

//   return (
//     <div className="app">
//       {gameStage === 'start' && (
//         <StartScreen onStartQuiz={handleStartQuiz} onAdminLogin={handleAdminLogin} />
//       )}
//       {gameStage === 'quiz' && <Quiz onQuizEnd={handleQuizEnd} />}
//       {gameStage === 'animalGame' && <AnimalGame onFinish={handleAnimalGameEnd} />}
//       {gameStage === 'memoryGame' && <MemoryGame onFinish={handleMemoryGameEnd} />}
//       {gameStage === 'result' && (
//         <Result 
//           sessionId={currentSessionData.sessionId}
//           quizScore={currentSessionData.quizScores.reduce((a, b) => a + b, 0)}
//           animalGameScore={currentSessionData.animalGameScore}
//           memoryGameScore={currentSessionData.memoryGameScore}
//           onBackToStart={handleBackToStart}
//         />
//       )}
//       {gameStage === 'report' && (
//         <Report 
//           allSessions={allSessions}
//           onBackToHome={handleBackToStart} // Pass the handleBackToStart function
//         />
//       )}
//       {gameStage === 'adminLogin' && (
//         <StartScreen onStartQuiz={handleStartQuiz} onAdminLogin={handleAdminLogin} />
//       )}
//     </div>
//   );
// }

// export default App;
// ----------------------------888888888888888888888888888
import React, { useState, useEffect } from 'react';
import StartScreen from './StartScreen';
import Quiz from './Quiz';
import AnimalGame from './AnimalGame';
import MemoryGame from './MemoryGame';
import Report from './Report';
import Result from './Result';
import SessionReport from './SessionReport'; // Ensure this is imported
import '../styles/App.css';

function App() {
  const [gameStage, setGameStage] = useState('start');
  const [currentSessionData, setCurrentSessionData] = useState({
    sessionId: '',
    quizScores: [],
    animalGameScore: 0,
    memoryGameScore: 0
  });
  const [allSessions, setAllSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);

  useEffect(() => {
    const storedSessions = JSON.parse(localStorage.getItem('sessions'));
    if (storedSessions) {
      setAllSessions(storedSessions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sessions', JSON.stringify(allSessions));
  }, [allSessions]);

  // Generate a 6-digit random session ID
  const generateSessionId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleStartQuiz = () => {
    const newSessionId = generateSessionId(); // Generate unique session ID
    setCurrentSessionData({
      sessionId: newSessionId,
      quizScores: [],
      animalGameScore: 0,
      memoryGameScore: 0
    });
    setGameStage('quiz');
  };

  const handleAdminLogin = () => {
    setGameStage('report');
  };

  const handleQuizEnd = (score) => {
    setCurrentSessionData((prev) => ({
      ...prev,
      quizScores: [...prev.quizScores, score]
    }));
    setGameStage('animalGame');
  };

  const handleAnimalGameEnd = (score) => {
    setCurrentSessionData((prev) => ({ ...prev, animalGameScore: score }));
    setGameStage('memoryGame');
  };

  const handleMemoryGameEnd = (score) => {
    const completedSessionData = {
      ...currentSessionData,
      memoryGameScore: score
    };

    setAllSessions((prev) => [...prev, completedSessionData]);
    setCurrentSessionData(completedSessionData);
    setGameStage('result');
  };

  const handleBackToStart = () => {
    setGameStage('start');
  };

  const handleViewSessionReport = (session) => {
    setSelectedSession(session);
    setGameStage('sessionReport');
  };

  const handleBackToReport = () => {
    setSelectedSession(null);
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
      {gameStage === 'result' && (
        <Result
          sessionId={currentSessionData.sessionId}
          quizScore={currentSessionData.quizScores.reduce((a, b) => a + b, 0)}
          animalGameScore={currentSessionData.animalGameScore}
          memoryGameScore={currentSessionData.memoryGameScore}
          onBackToStart={handleBackToStart}
        />
      )}
      {gameStage === 'report' && (
        <Report
          allSessions={allSessions}
          onViewSessionReport={handleViewSessionReport}
          onBackToHome={handleBackToStart} // Pass the handleBackToStart function
        />
      )}
      {gameStage === 'sessionReport' && selectedSession && (
        <SessionReport
          session={selectedSession}
          onBackToReport={handleBackToReport}
        />
      )}
    </div>
  );
}

export default App;
