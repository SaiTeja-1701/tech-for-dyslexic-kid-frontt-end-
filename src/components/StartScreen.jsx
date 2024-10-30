// import React from 'react';

// const StartScreen = ({ onStartQuiz, onViewReport }) => (
//   <div className="start-screen">
//     <h1>The React Quiz</h1>
//     <button onClick={onStartQuiz}>START GAME</button>
//     <button onClick={onViewReport}>GET REPORT</button>
//   </div>
// );

// export default StartScreen;
// // StartScreen.jsx
// import React, { useState } from 'react';

// StartScreen.jsx
import React, { useState } from 'react';

const StartScreen = ({ onStartQuiz, onAdminLogin }) => {
  const [username, setUsername] = useState('');
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handlePlayGame = () => {
    const username = prompt("Please enter your username:");
    onStartQuiz(username);
  };

  const handleAdminLogin = () => {
    const adminId = prompt("Admin ID:");
    const adminPassword = prompt("Admin Password:");
    onAdminLogin(adminId, adminPassword);
  };

  return (
    <div className="start-screen">
      <h1>The React Quiz</h1>
      <button onClick={handlePlayGame}>PLAY GAME</button>
      <button onClick={handleAdminLogin}>ADMIN LOGIN</button>
    </div>
  );
};

export default StartScreen;
