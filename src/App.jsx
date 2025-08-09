import React, { useState, useEffect, useRef } from 'react';
import GameHeader from './components/GameHeader';
import GameArea from './components/GameArea';
import GameRules from './components/GameRules';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [hitTarget, setHitTarget] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showRules, setShowRules] = useState(true);
  const timerRef = useRef(null);

  // Game Logic Functions
  const increaseScore = () => {
    setScore(prevScore => prevScore + 10);
  };

  const getNewHit = () => {
    const newHit = Math.floor(Math.random() * 10);
    setHitTarget(newHit);
  };

  const handleBubbleClick = (clickedNum) => {
    if (clickedNum === hitTarget && gameStarted && !gameOver) {
      increaseScore();
      getNewHit();
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setTimer(60);
    setScore(0);
    getNewHit();
    
    timerRef.current = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(timerRef.current);
          setGameOver(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const restartGame = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setGameStarted(false);
    setGameOver(false);
    setTimer(60);
    setScore(0);
    setHitTarget(null);
  };

  const closeRules = () => {
    setShowRules(false);
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="app">
      {showRules && <GameRules onClose={closeRules} />}
      
      <div className="game-container">
        <GameHeader 
          hitTarget={hitTarget}
          timer={timer}
          score={score}
          gameOver={gameOver}
        />
        
        <GameArea 
          gameStarted={gameStarted}
          gameOver={gameOver}
          onStart={startGame}
          onRestart={restartGame}
          onBubbleClick={handleBubbleClick}
          hitTarget={hitTarget}
          score={score}
        />
      </div>
    </div>
  );
};

export default App;