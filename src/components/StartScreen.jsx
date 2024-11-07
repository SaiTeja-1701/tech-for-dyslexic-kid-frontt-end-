import React, { useState } from 'react';
import "../styles/StartScreen.css";

const StartScreen = ({ onStartQuiz, onAdminLogin }) => {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Define the correct admin credentials
  const correctAdminId = "rushi";
  const correctAdminPassword = "alluarjun";

  const handlePlayGame = () => {
    onStartQuiz(); // Start the quiz
  };

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true); // Show the admin login form
  };

  const handleAdminLoginSubmit = (e) => {
    e.preventDefault();
    // Check the credentials
    if (adminId === correctAdminId && adminPassword === correctAdminPassword) {
      onAdminLogin(); // Call onAdminLogin from App.js to show Report
    } else {
      setLoginError("Incorrect Admin ID or Password."); // Show error if incorrect
    }
  };

  return (
    <div className="start-screen">
      <h1>The React Quiz Game</h1>
      <button onClick={handlePlayGame}>PLAY GAME</button>
      <button onClick={handleAdminLoginClick}>ADMIN LOGIN</button>

      {showAdminLogin && (
        <div className="admin-login-form">
          <h2>Admin Login</h2>
          <form onSubmit={handleAdminLoginSubmit}>
            <div className="input-group">
              <label htmlFor="adminId">Admin ID:</label>
              <input
                type="text"
                id="adminId"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="adminPassword">Password:</label>
              <input
                type="password"
                id="adminPassword"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
            {loginError && <p className="error-message">{loginError}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default StartScreen;

