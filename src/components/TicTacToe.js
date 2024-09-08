// src/components/TicTacToe.js
import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const winner = calculateWinner(board);
  const draw = board.every(cell => cell !== null) && !winner;

  const handleClick = index => {
    if (board[index] || gameOver) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'You' : 'Me'; // 'X' for You and 'O' for Me
    setBoard(newBoard);
    setIsXNext(!isXNext);
    if (calculateWinner(newBoard) || draw) {
      setGameOver(true);
    }
  };

  const handleNewGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  const renderSquare = index => (
    <button
      className={`square ${winner ? 'disabled' : ''} ${
        board[index] === 'You' ? 'You' : 'Me'
      }`}
      onClick={() => handleClick(index)}
      disabled={winner || gameOver}
    >
      {board[index]}
    </button>
  );

  const status = winner
    ? `Winner: ${winner}`
    : draw
    ? `Game Over: It's a draw!`
    : `Next player: ${isXNext ? 'You' : 'Me'}`;

  return (
    <div className='tic-tac-toe-container'>
      <div className='status'>{status}</div>
      <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className='controls'>
        <button className='btn new-game' onClick={handleNewGame}>
          New Game
        </button>
      </div>
    </div>
  );
};

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
