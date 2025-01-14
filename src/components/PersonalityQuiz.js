import React, { useState } from 'react';
import './PersonalityQuiz.css';

const PersonalityQuiz = () => {
  const [answer, setAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(null); // For managing timer

  const handleChoice = choice => {
    setAnswer(choice);
    setShowResult(true);

    // Clear any existing timer
    if (timer) clearTimeout(timer);

    // Set a new timer to hide the result after 10 seconds
    const newTimer = setTimeout(() => {
      setShowResult(false); // Hide result after 10 seconds
    }, 10000); // 10 seconds in milliseconds

    // Store the new timer
    setTimer(newTimer);
  };

  return (
    <div className='quiz-container'>
      <h2 className='quiz-title'>What's Your Developer Personality?</h2>
      <div className='question-container'>
        <p className='question-text'>
          What's your favorite type of coding challenge?
        </p>
        <div className='choices-container'>
          <button
            onClick={() => handleChoice('Designing UI/UX')}
            className='choice-btn'
          >
            Designing UI/UX
          </button>
          <button
            onClick={() => handleChoice('Solving algorithms')}
            className='choice-btn'
          >
            Solving algorithms
          </button>
          <button
            onClick={() => handleChoice('Building full-stack apps')}
            className='choice-btn'
          >
            Building full-stack apps
          </button>
          <button
            onClick={() => handleChoice('Debugging issues')}
            className='choice-btn'
          >
            Debugging issues
          </button>
        </div>
      </div>

      {showResult && (
        <div className='result'>
          <p className='result-text'>
            You are a <strong>{answer}</strong> developer!
          </p>
        </div>
      )}
    </div>
  );
};

export default PersonalityQuiz;
