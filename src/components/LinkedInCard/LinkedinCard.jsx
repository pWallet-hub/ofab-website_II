import { LinkedInEmbed } from 'react-social-media-embed';

const LinkedInProfileCard = ({ url }) => {
  return (
    <div style={{ width: '325px', margin: '20px auto' }}>
      <LinkedInEmbed 
        url={url}
        width={300}
        height={400} 
      />
    </div>
  );
};

export default LinkedInProfileCard;