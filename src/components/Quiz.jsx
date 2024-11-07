import React, { useEffect, useState } from 'react';
import Question from './Question';
import { questions } from '../data/questions';
import '../styles/Quiz.css';
const Quiz = ({ onQuizEnd }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [time, setTime] = useState(15);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    // Shuffle and pick 5 questions from Level 1 set
    const level1Questions = questions.level1
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    setShuffledQuestions(level1Questions);
  }, []);

  useEffect(() => {
    // Timer for each question
    if (time === 0) handleNextQuestion();
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const handleNextQuestion = () => {
    if (selectedAnswer === shuffledQuestions[questionIndex].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    setQuestionIndex(questionIndex + 1);
    setTime(15);

    if (questionIndex + 1 === shuffledQuestions.length) {
      onQuizEnd(score);
    }
  };

  return (
    <div className="quiz">
      <h2>Question {questionIndex + 1} / {shuffledQuestions.length}</h2>
      <p className="timer">Time: {time}s</p>
      {shuffledQuestions[questionIndex] && (
        <Question question={shuffledQuestions[questionIndex]} onAnswerSelect={setSelectedAnswer} />
      )}
      <button className="next-button" onClick={handleNextQuestion} >Next</button>
    </div>
  );
};

export default Quiz;
