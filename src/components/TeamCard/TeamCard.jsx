import './TeamCard.css';

// eslint-disable-next-line react/prop-types
const TeamCard = ({ name, Institution, role, bio, image }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-card-image" />
      <div className="team-card-content">
        <h3 className="team-card-name">{name}</h3>
        <p className="team-card-institution">{Institution}</p>
        <p className="team-card-role">{role}</p>
        <p className="team-card-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
