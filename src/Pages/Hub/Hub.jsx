import info from '../../assets/info.jpg';
import './Hub.css';
import { useState, useEffect } from 'react';

// Import images for different events
import labo from '../../assets/labo.jpg';
import harvest from '../../assets/harvest.jpg';
import green from '../../assets/green.jpg';
import test from '../../assets/test.jpg';
import lozwar from '../../assets/lozwar.jpg';
import arm from '../../assets/arm.jpg';
import white from '../../assets/white.jpg';
import group from '../../assets/group.jpg';
import hall from '../../assets/hall.jpg';
import gang from '../../assets/gang.jpg';
import busy from '../../assets/busy.jpg';
import ofabCeremony from '../../assets/ofab-ceremony.jpg';
import ofabCere from '../../assets/ofab-cere.jpg';
import award2024 from '../../assets/award-2024.jpg';
import cap1 from '../../assets/cap1.jpg';
import cap2 from '../../assets/cap2.jpg';
import cap3 from '../../assets/cap3.jpg';
import DSC1826 from '../../assets/DSC_1826 copy.jpg';
import DSC1850 from '../../assets/DSC_1850.jpg';
import DSC2072 from '../../assets/DSC_2072.jpg';
import DSC2077 from '../../assets/DSC_2077 copy.jpg';
import DSC2083 from '../../assets/DSC_2083.jpg';
import DSC2119 from '../../assets/DSC_2119.jpg';
import DSC2123 from '../../assets/DSC_2123 copy.jpg';
import DSC2210 from '../../assets/DSC_2210.jpg';
import DSC2232 from '../../assets/DSC_2232.jpg';
import DSC2311 from '../../assets/DSC_2311.jpg';
import DSC3464 from '../../assets/DSC_3464 copy.jpg';
import DSC3516 from '../../assets/DSC_3516 copy.jpg';
import DSC3576 from '../../assets/DSC_3576 copy.jpg';
import DSC3683 from '../../assets/DSC_3683 copy.jpg';
import DSC3689 from '../../assets/DSC_3689 copy.jpg';
import DSC3691 from '../../assets/DSC_3691 copy.jpg';
import DSC3699 from '../../assets/DSC_3699 copy.jpg';
import DSC3740 from '../../assets/DSC_3740 copy.jpg';
import _72A2576 from '../../assets/_72A2576.jpg';
import _72A2607 from '../../assets/_72A2607.jpg';
import _72A2638 from '../../assets/_72A2638.jpg';
import _72A2747 from '../../assets/_72A2747.jpg';
import market from '../../assets/market.jpg';
import irrigate from '../../assets/irrigate.jpg';
import protection from '../../assets/protection.jpg';
import nutritio from '../../assets/nutritio.jpg';
import empower from '../../assets/empower.jpg';
import happy from '../../assets/happy.jpg';
import look from '../../assets/look.jpg';
import truck from '../../assets/truck.jpg';

// Event data with multiple images per event
const eventsData = [
  {
    id: 1,
    title: "Agricultural Innovation Summit 2024",
    description: "A groundbreaking summit bringing together agricultural experts, researchers, and innovators to discuss the future of sustainable farming and biotechnology.",
    date: "March 15-17, 2024",
    location: "Kigali Convention Centre",
    category: "Conference",
    featured: true,
    images: [
      { src: ofabCeremony, alt: "Opening ceremony of Agricultural Innovation Summit" },
      { src: ofabCere, alt: "Keynote speakers at the summit" },
      { src: award2024, alt: "Innovation awards presentation" },
      { src: DSC2083, alt: "Panel discussion on sustainable agriculture" },
      { src: DSC2119, alt: "Networking session with industry leaders" },
      { src: DSC2123, alt: "Technology showcase and demonstrations" },
      { src: hall, alt: "Main conference hall during presentations" },
      { src: DSC2210, alt: "Interactive workshops and breakout sessions" },
      { src: DSC2232, alt: "Closing ceremony and future commitments" },
      { src: DSC2311, alt: "Group photo of all participants" },
      { src: _72A2576, alt: "Behind the scenes of summit organization" },
      { src: _72A2607, alt: "Media coverage and interviews" }
    ]
  },
  {
    id: 2,
    title: "Community Empowerment Workshop Series",
    description: "Comprehensive training programs designed to empower local communities with modern agricultural techniques and sustainable farming practices.",
    date: "April 8-12, 2024",
    location: "Rural Training Centers",
    category: "Workshop",
    featured: false,
    images: [
      { src: lozwar, alt: "Community workshop on modern farming techniques" },
      { src: cap1, alt: "Hands-on training with agricultural tools" },
      { src: cap2, alt: "Farmers learning about crop rotation" },
      { src: cap3, alt: "Demonstration of irrigation systems" },
      { src: busy, alt: "Interactive learning sessions" },
      { src: group, alt: "Community group discussions" },
      { src: gang, alt: "Team building and collaboration exercises" },
      { src: empower, alt: "Women empowerment in agriculture" },
      { src: market, alt: "Market linkage training sessions" },
      { src: nutritio, alt: "Nutrition education programs" },
      { src: happy, alt: "Celebrating successful training completion" },
      { src: look, alt: "Future planning and goal setting" },
      { src: DSC3464, alt: "Documentation of training progress" },
      { src: DSC3516, alt: "Certificate distribution ceremony" }
    ]
  },
  {
    id: 3,
    title: "Research & Development Showcase",
    description: "Showcasing cutting-edge research in agricultural biotechnology, featuring laboratory innovations and field trial results.",
    date: "May 20-22, 2024",
    location: "OFAB Research Facilities",
    category: "Research",
    featured: true,
    images: [
      { src: labo, alt: "State-of-the-art laboratory facilities" },
      { src: test, alt: "Scientific testing and analysis procedures" },
      { src: green, alt: "Greenhouse research and development" },
      { src: DSC2072, alt: "Advanced research equipment in action" },
      { src: DSC2077, alt: "Data collection and analysis" },
      { src: white, alt: "Clean room research environment" },
      { src: DSC1826, alt: "Microscopic analysis of plant samples" },
      { src: DSC1850, alt: "Field trial documentation" },
      { src: DSC3576, alt: "Research team collaboration" },
      { src: DSC3683, alt: "Presentation of research findings" },
      { src: DSC3689, alt: "Peer review and discussion sessions" },
      { src: DSC3691, alt: "Future research planning meeting" },
      { src: _72A2638, alt: "Research publication and documentation" }
    ]
  },
  {
    id: 4,
    title: "Harvest Festival & Field Day",
    description: "Celebrating successful harvests and demonstrating modern agricultural practices through field demonstrations and community celebrations.",
    date: "June 10-11, 2024",
    location: "OFAB Demonstration Farms",
    category: "Field Event",
    featured: false,
    images: [
      { src: harvest, alt: "Successful harvest celebration" },
      { src: arm, alt: "Modern farming equipment demonstration" },
      { src: irrigate, alt: "Advanced irrigation system showcase" },
      { src: protection, alt: "Crop protection techniques" },
      { src: truck, alt: "Transportation and logistics" },
      { src: DSC3699, alt: "Field day activities and demonstrations" },
      { src: DSC3740, alt: "Community participation in harvest" },
      { src: _72A2747, alt: "Traditional and modern farming comparison" },
      { src: look, alt: "Farmers inspecting crop quality" },
      { src: happy, alt: "Celebration of agricultural success" }
    ]
  }
];

export default function Hub() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const eventCards = document.querySelectorAll('.event-card');
    const imageItems = document.querySelectorAll('.image-item');

    eventCards.forEach(card => observer.observe(card));
    imageItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [selectedEvent]);

  const handleEventSelect = (eventId) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedEvent(eventId);
      setIsLoading(false);
    }, 300);
  };

  const getEventStats = () => {
    return {
      totalEvents: eventsData.length,
      totalImages: eventsData.reduce((sum, event) => sum + event.images.length, 0),
      featuredEvents: eventsData.filter(event => event.featured).length
    };
  };

  const stats = getEventStats();

  return (
    <div className="hub-container">
      {/* Modern Hero Section */}
      <div className="hub-hero">
        <div className="hero-background">
          <img className="hero-img" src={info} alt="Events Gallery" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Events Gallery</h1>
          <p>Discover our journey through agricultural innovation and community empowerment</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{stats.totalEvents}</span>
              <span className="stat-label">Major Events</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.totalImages}</span>
              <span className="stat-label">Total Images</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.featuredEvents}</span>
              <span className="stat-label">Featured Events</span>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="events-section">
        <div className="section-header">
          <h2>Our Major Events</h2>
          <p>Explore our comprehensive collection of agricultural biotechnology events and activities</p>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`event-card ${event.featured ? 'featured' : ''} ${selectedEvent === event.id ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleEventSelect(event.id)}
            >
              <div className="event-image">
                <img src={event.images[0].src} alt={event.title} />
                <div className="event-overlay">
                  <div className="event-category">{event.category}</div>
                  {event.featured && (
                    <div className="featured-badge">⭐ Featured</div>
                  )}
                </div>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-meta">
                  <div className="event-date">📅 {event.date}</div>
                  <div className="event-location">📍 {event.location}</div>
                  <div className="event-images-count">📸 {event.images.length} images</div>
                </div>
                <button className="view-gallery-btn">
                  {selectedEvent === event.id ? 'Hide Gallery' : 'View Gallery'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Event Gallery */}
        {selectedEvent && (
          <div className="selected-event-gallery">
            {isLoading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading gallery...</p>
              </div>
            ) : (
              <>
                <div className="gallery-header">
                  <h3>{eventsData.find(e => e.id === selectedEvent)?.title}</h3>
                  <button
                    className="close-gallery-btn"
                    onClick={() => setSelectedEvent(null)}
                  >
                    ✕ Close Gallery
                  </button>
                </div>
                <div className="images-grid">
                  {eventsData.find(e => e.id === selectedEvent)?.images.map((image, index) => (
                    <div
                      key={index}
                      className="image-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <div className="image-overlay">
                        <p>{image.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}