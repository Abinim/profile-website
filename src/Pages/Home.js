// src/pages/Home.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import TicTacToe from '../components/TicTacToe';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className='welcome-message'>Welcome to My Portfolio!</h1>
      <TicTacToe />
      <p className='humor-message'>
        Time is like a rare Pokémon — precious and hard to catch! 🕰️✨
        <br />
        So, use it wisely and don’t let this game steal your precious moments!
        😄🎮
      </p>
    </div>
  );
}

export default Home;
