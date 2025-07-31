import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './EventPopup.css'; // Import your CSS file for styling

const EventPopup = ({ eventDate, eventImage, onClose }) => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date(eventDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimer({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimer({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={eventImage} alt="Upcoming Event" className="event-image" />
        <div className="countdown">
          <div>{timer.days}d</div>
          <div>{timer.hours}h</div>
          <div>{timer.minutes}m</div>
          <div>{timer.seconds}s</div>
        </div>
      </div>
    </div>
  );
};
EventPopup.propTypes = {
  eventDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  eventImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EventPopup;