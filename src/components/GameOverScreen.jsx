import React from 'react';
import StartButton from './StartButton';

const GameOverScreen = ({ onRestart, score }) => {
  return (
    <div className="game-over-screen">
      <h1 className="game-over-title">Game Over!</h1>
      <div className="final-score">
        <p>Final Score: <span>{score}</span></p>
      </div>
      <StartButton onClick={onRestart} text="Play Again" />
    </div>
  );
};

export default GameOverScreen;