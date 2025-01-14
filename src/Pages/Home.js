import React from 'react';
import { Helmet } from 'react-helmet-async';
import PersonalityQuiz from '../components/PersonalityQuiz'; // Import the PersonalityQuiz component
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <Helmet>
        <title>Welcome to My Portfolio</title>
      </Helmet>
      <div className='header'>
        <h1 className='welcome-message'>Welcome to My Creative World!</h1>
        <p className='tagline'>
          Crafting solutions, designs, and ideas with a spark of innovation.
        </p>
      </div>
      <PersonalityQuiz /> {/* Display the personality quiz component */}
      <div className='humor-message-container'>
        <p className='humor-message'>
          Life is a journey, and every moment is an opportunity to grow. 🚀
          <br />
          So, take a step forward and make the most of your time here! 😄🎮
        </p>
      </div>
    </div>
  );
}

export default Home;
