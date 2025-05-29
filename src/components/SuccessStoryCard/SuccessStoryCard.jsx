import './SuccessStoryCard.css';

const SuccessStoryCard = ({ story }) => {
  const handleClick = () => {
    if (story.link) {
      window.open(story.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="story-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`Read more about ${story.title}`}
    >
      <img className="story-img" src={story.image} alt={story.title} />
      <div className="story-content">
        <h2>{story.title}</h2>
        <p>{story.description}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;