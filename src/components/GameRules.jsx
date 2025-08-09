import React from 'react';

const GameRules = ({ onClose }) => {
  return (
    <div className="rules-overlay">
      <div className="rules-modal">
        <h2>Game Rules</h2>
        <div className="rules-content">
          <p>🎯 <strong>Objective:</strong> Click the bubbles that match the target number</p>
          <p>⏱️ <strong>Time:</strong> You have 60 seconds to play</p>
          <p>🎈 <strong>Bubbles:</strong> Click on the bubble that matches the number in the "Hit" box</p>
          <p>🔄 <strong>Dynamic:</strong> Bubbles regenerate after each correct hit</p>
          <p>💯 <strong>Scoring:</strong> Each correct hit earns you 10 points</p>
          <p>🏆 <strong>Goal:</strong> Collect as many points as possible!</p>
        </div>
        <button className="close-rules-btn" onClick={onClose}>
          Got it! Let's Play
        </button>
      </div>
    </div>
  );
};

export default GameRules;