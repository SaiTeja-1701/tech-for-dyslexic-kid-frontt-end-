// import React from 'react';

// const StartScreen = ({ onStartQuiz, onViewReport }) => (
//   <div className="start-screen">
//     <h1>The React Quiz</h1>
//     <button onClick={onStartQuiz}>START GAME</button>
//     <button onClick={onViewReport}>GET REPORT</button>
//   </div>
// );

// export default StartScreen;
import React from 'react';
import '../styles/StartScreen.css';
import childImage from '../assets/quiz_images/frontpage.jpg'; // Update the path to your images

const LoginPage = ({ onStartQuiz, onViewReport }) => {
  return (
    <div className="login-page">
      <nav className="navbar">
        <h1 className="logo">Kidie</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#program">Program</a>
          <a href="#admission">Admission</a>
          <a href="#contact">Contact</a>
          <button onClick={onViewReport}>GET REPORT</button>
        </div>
      </nav>
      
      <div className="content">
        <div className="text-section">
          <p className="tagline">Play. explore. learn.</p>
          <h2 className="headline">A safe and joyful place for your lovely children</h2>
          
          <button onClick={onStartQuiz}>START GAME</button>
          
        </div>
        
        <div className="images-section">
          <img src={childImage} alt="Child" className="main-image" />
          {/* Add additional images as necessary */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
