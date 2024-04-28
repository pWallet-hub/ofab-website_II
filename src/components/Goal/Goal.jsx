import React from 'react';
import './Goal.css';

const Goal = ({ goal }) => {
  return (
    <div className='goal' >
      <p>{goal}</p>
    </div>
  );
};

export default Goal;