import React, { useState, useEffect } from 'react';

const TwitterProfileCard = ({ username }) => {
  const [TwitterTimelineEmbed, setTwitterTimelineEmbed] = useState(null);

  useEffect(() => {
    import('react-twitter-embed')
      .then(module => {
        setTwitterTimelineEmbed(() => module.TwitterTimelineEmbed);
      })
      .catch(error => console.error('Failed to load TwitterTimelineEmbed', error));
  }, []);

  if (!TwitterTimelineEmbed) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={username}
        options={{height: 400}}
      />
    </div>
  );
};

export default TwitterProfileCard;