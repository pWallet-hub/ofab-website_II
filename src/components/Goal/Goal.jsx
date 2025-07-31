import './Goal.css';
import PropTypes from 'prop-types';

const Goal = ({ goal }) => {
  return (
    <div className='goal' >
      <p>{goal}</p>
    </div>
  );
};

Goal.propTypes = {
  goal: PropTypes.string.isRequired,
};

export default Goal;