import React, { lazy, Suspense } from 'react';

const TwitterTimelineEmbed = lazy(() => import('react-twitter-embed').then(module => ({ default: module.TwitterTimelineEmbed })));

const TwitterProfileCard = ({ username }) => {
  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Suspense fallback={<div>Loading Twitter timeline...</div>}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={username}
          options={{height: 400}}
        />
      </Suspense>
    </div>
  );
};

export default TwitterProfileCard;