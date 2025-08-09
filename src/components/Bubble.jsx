import React from 'react';

const Bubble = ({ number, onClick, isTarget }) => {
  return (
    <div 
      className={`bubble ${isTarget ? 'target-bubble' : ''}`}
      onClick={() => onClick(number)}
    >
      {number}
    </div>
  );
};

export default Bubble;