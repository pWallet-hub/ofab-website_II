const LinkedInProfileCard = ({ url }) => {
  return (
    <div style={{ width: '325px', margin: '20px auto' }}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View LinkedIn Profile
      </a>
    </div>
  );
};

export default LinkedInProfileCard;