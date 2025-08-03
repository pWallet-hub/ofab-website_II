import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import './OMAS2025Banner.css';
import { FaCalendarAlt as Calendar, FaTrophy as Trophy, FaUsers as Users, FaStar as Star, FaClock as Clock, FaArrowRight as ArrowRight } from 'react-icons/fa';

const OMAS2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Target date: September 26, 2025, 09:00:00 (assuming similar date to 2024)
  const targetDate = new Date('2025-09-02T06:00:00');

  const handleRegisterClick = () => {
    window.location.href = '/register';
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="countdown-completed">
          <Trophy className="trophy-icon" />
          <span>Event Started!</span>
        </div>
      );
    }
    
    return (
      <div className="countdown-display">
        <div className="countdown-item">
          <div className="countdown-number">{days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-number">{hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-number">{minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-number">{seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    );
  };

  // Auto-hide after event date
  useEffect(() => {
    const now = new Date();
    if (now > targetDate) {
      const timer = setTimeout(() => setIsVisible(false), 10000); // Hide after 10 seconds if event is over
      return () => clearTimeout(timer);
    }
  }, [targetDate]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`omas-banner-container ${isExpanded ? 'expanded' : ''} ${isMinimized ? 'minimized' : ''}`}>
      <div className="omas-banner">
        {/* Background decorations */}
        <div className="banner-bg-decoration">
          <div className="floating-star star-1"><Star /></div>
          <div className="floating-star star-2"><Star /></div>
          <div className="floating-star star-3"><Star /></div>
        </div>

        {/* Main banner content */}
        <div className="banner-main-content">
          {!isMinimized && (
            <div className="banner-header">
              <div className="event-badge">
                <Calendar className="badge-icon" />
                <span>UPCOMING EVENT</span>
              </div>
              <div className="banner-controls">
                <button
                  className="minimize-toggle"
                  onClick={handleMinimize}
                  aria-label="Minimize banner"
                  title="Minimize banner"
                >
                  −
                </button>
                <button
                  className="expand-toggle"
                  onClick={handleToggleExpand}
                  aria-label={isExpanded ? 'Collapse banner' : 'Expand banner'}
                  title={isExpanded ? 'Show less' : 'Show more'}
                >
                  <ArrowRight className={`toggle-icon ${isExpanded ? 'rotated' : ''}`} />
                </button>
              </div>
            </div>
          )}

          {isMinimized ? (
            <div className="banner-minimized-content">
              <div className="minimized-info">
                <span className="minimized-title">OMAS 2025 • 12/9</span>
                <Countdown
                  date={targetDate}
                  renderer={({ days, hours, minutes, completed }) => {
                    if (completed) return <span className="minimized-countdown">Event Started!</span>;
                    return <span className="minimized-countdown">{days}d {hours}h {minutes}m</span>;
                  }}
                />
              </div>
              <div className="minimized-actions">
                <button className="minimized-register-btn" onClick={handleRegisterClick}>
                  Register
                </button>
                <button
                  className="restore-toggle"
                  onClick={handleMinimize}
                  aria-label="Restore banner"
                  title="Show full banner"
                >
                  ↑
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="banner-title-section">
                <h2 className="banner-title">
                  <span className="edition-number">4<sup>th</sup></span>
                  <span className="ofab-text">OFAB</span>
                  <span className="media-text">MEDIA</span>
                  <span className="awards-text">AWARDS</span>
                  <span className="year-text">2025</span>
                </h2>
                <div className="event-date-info">
                  <Clock className="clock-icon" />
                  <span>12/9</span>
                </div>
              </div>

              <div className="countdown-section">
                <Countdown
                  date={targetDate}
                  renderer={countdownRenderer}
                />
              </div>

              <div className="banner-actions">
                <button className="register-btn primary" onClick={handleRegisterClick}>
                  <Users className="btn-icon" />
                  Register Now
                </button>
                <button className="learn-more-btn secondary" onClick={() => window.location.href = '/Omas'}>
                  Learn More
                </button>
              </div>
            </>
          )}
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="banner-expanded-content">
            <div className="expanded-info">
              <div className="info-item">
                <Trophy className="info-icon" />
                <div className="info-text">
                  <h4>Excellence in Agricultural Journalism</h4>
                  <p>Recognizing outstanding media professionals reporting on biotechnology</p>
                </div>
              </div>
              <div className="info-item">
                <Users className="info-icon" />
                <div className="info-text">
                  <h4>Join 70+ Participants</h4>
                  <p>Connect with journalists, researchers, and industry leaders</p>
                </div>
              </div>
              <div className="info-item">
                <Star className="info-icon" />
                <div className="info-text">
                  <h4>Awards & Recognition</h4>
                  <p>Compete for prizes up to $500 USD plus trophies and gifts</p>
                </div>
              </div>
            </div>
            
            <div className="quick-stats">
              <div className="stat">
                <div className="stat-number">4th</div>
                <div className="stat-label">Edition</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Categories</div>
              </div>
              <div className="stat">
                <div className="stat-number">$500</div>
                <div className="stat-label">Top Prize</div>
              </div>
            </div>
          </div>
        )}

        {/* Close button */}
        <button 
          className="banner-close"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default OMAS2025Banner;
