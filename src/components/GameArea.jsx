import React from 'react';
import Bubble from './Bubble';
import StartButton from './StartButton';
import GameOverScreen from './GameOverScreen';

const GameArea = ({ 
  gameStarted, 
  gameOver, 
  onStart, 
  onRestart, 
  onBubbleClick, 
  hitTarget,
  score 
}) => {
  const generateBubbles = () => {
    const bubbles = [];
    for (let i = 1; i <= 114; i++) {
      const randomNum = Math.floor(Math.random() * 10);
      bubbles.push(
        <Bubble 
          key={i} 
          number={randomNum} 
          onClick={onBubbleClick}
          isTarget={randomNum === hitTarget}
        />
      );
    }
    return bubbles;
  };

  if (!gameStarted) {
    return (
      <div className="game-area">
        <StartButton onClick={onStart} />
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="game-area">
        <GameOverScreen onRestart={onRestart} score={score} />
      </div>
    );
  }

  return (
    <div className="game-area">
      {generateBubbles()}
    </div>
  );
};

export default GameArea;