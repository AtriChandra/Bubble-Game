import React from 'react';

const GameHeader = ({ hitTarget, timer, score, gameOver }) => {
  return (
    <div className="game-header">
      <div className="stat-item">
        <h2>Hit</h2>
        <div className="stat-box">
          {gameOver ? 'Game Over' : hitTarget !== null ? hitTarget : 'Start'}
        </div>
      </div>
      <div className="stat-item">
        <h2>Timer</h2>
        <div className="stat-box">{timer}</div>
      </div>
      <div className="stat-item">
        <h2>Score</h2>
        <div className="stat-box">{score}</div>
      </div>
    </div>
  );
};

export default GameHeader;