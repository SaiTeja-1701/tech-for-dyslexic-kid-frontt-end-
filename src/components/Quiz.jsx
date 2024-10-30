import React, { useEffect, useState } from 'react';
import { questions } from '../data/questions';
import Question from './Question';

const Quiz = ({ level, onQuizEnd }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [time, setTime] = useState(25);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    // Shuffle the questions once on component mount
    const levelQuestions = questions[`level${level}`]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    setShuffledQuestions(levelQuestions);
  }, [level]);

  useEffect(() => {
    if (time === 0) handleNextQuestion();
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const handleNextQuestion = () => {
    // Check answer only if selectedAnswer is not null
    if (selectedAnswer && shuffledQuestions[questionIndex].answer === selectedAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    setQuestionIndex(questionIndex + 1);
    setTime(25);

    if (questionIndex + 1 === shuffledQuestions.length) {
      // End quiz and show result when last question is reached
      onQuizEnd(score + (selectedAnswer === shuffledQuestions[questionIndex].answer ? 1 : 0));
    }
  };

  return (
    <div className="quiz">
      <h2>Question {questionIndex + 1} / {shuffledQuestions.length}</h2>
      <p>Time: {time}s</p>
      {shuffledQuestions[questionIndex] && (
        <Question question={shuffledQuestions[questionIndex]} onAnswerSelect={setSelectedAnswer} />
      )}
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
};

export default Quiz;
