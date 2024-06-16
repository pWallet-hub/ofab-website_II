import React, { useState, useEffect } from 'react';

const TwitterProfileCard = ({ username }) => {
  const [TwitterComponent, setTwitterComponent] = useState(null);

  useEffect(() => {
    import('react-twitter-embed').then(module => {
      setTwitterComponent(() => module.TwitterTimelineEmbed);
    }).catch(err => console.error("Failed to load Twitter component:", err));
  }, []);

  if (!TwitterComponent) {
    return <div>Loading Twitter timeline...</div>;
  }

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <TwitterComponent
        sourceType="profile"
        screenName={username}
        options={{height: 400}}
      />
    </div>
  );
};

export default TwitterProfileCard;