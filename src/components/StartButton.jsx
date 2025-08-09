import React from 'react';

const StartButton = ({ onClick, text = "Start Game" }) => {
  return (
    <button className="start-btn" onClick={onClick}>
      <h1>{text}</h1>
    </button>
  );
};

export default StartButton;