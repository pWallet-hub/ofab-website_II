import React from 'react';
import './SuccessStoryCard.css';

const SuccessStoryCard = ({ story }) => {
  return (
    <div className='story-card'>
      <img className='story-img' src={story.image} alt={story.title} />
      <div className='story-content'>
        <h2>{story.title}</h2>
        <p>{story.description}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;