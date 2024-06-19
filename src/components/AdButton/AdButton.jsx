import { useState } from 'react';
import Countdown from 'react-countdown';
import './AdButton.css';

const AdButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Target date: 15th August 2024, 00:00:00
  const targetDate = new Date('2024-08-15T00:00:00');

  const handleButtonClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe9x9CS2706-3oEK46sLnVw02RdpqUU0sGpTtkyft4r7mXatg/viewform', '_blank');
  };

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setIsVisible(false);
      return null;
    }
    return (
      <span>{days}d {hours}h {minutes}m {seconds}s</span>
    );
  };

  // Only render the button if it's visible
  if (!isVisible) {
    return null;
  }

  return (
    <div className="ad-button-container">
      <div className="ad-button" onClick={handleButtonClick}>
        <span className="ad-text">Apply for OMAS 2024 before <br/>
       </span>
        <Countdown 
          date={targetDate} 
          renderer={countdownRenderer} 
        />
      </div>
    </div>
  );
};

export default AdButton;
