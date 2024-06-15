import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterProfileCard = ({ username }) => {
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