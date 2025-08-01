import { useEffect, useState } from 'react';
import './Media.css';

// Import images for different event categories
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
import DSC1826 from '../../assets/DSC_1826_copy.jpg';
import DSC1850 from '../../assets/DSC_1850.jpg';
import DSC2072 from '../../assets/insepection.jpg';
import DSC2077 from '../../assets/DSC_3474_copy.jpg';
import DSC2083 from '../../assets/DSC_2083.jpg';
import DSC2119 from '../../assets/DSC_2119.jpg';
import DSC2123 from '../../assets/DSC_2123 copy.jpg';
import DSC2210 from '../../assets/tem.jpg';
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

const galleryImages = [
  // Research & Laboratory Events
  { id: 1, src: labo, alt: 'Laboratory research in agricultural biotechnology', category: 'research', featured: true },
  { id: 2, src: test, alt: 'Scientific testing and analysis of crops', category: 'research', featured: false },
  { id: 3, src: green, alt: 'Greenhouse farming innovation research', category: 'research', featured: false },
  { id: 4, src: DSC2072, alt: 'Advanced research facility operations', category: 'research', featured: false },
  { id: 5, src: DSC2077, alt: 'Laboratory equipment and testing', category: 'research', featured: false },

  // Field Work & Agriculture
  { id: 6, src: harvest, alt: 'Harvesting crops in the field', category: 'fieldwork', featured: true },
  { id: 7, src: arm, alt: 'Farmer working with modern agricultural tools', category: 'fieldwork', featured: false },
  { id: 8, src: irrigate, alt: 'Modern irrigation systems in action', category: 'fieldwork', featured: false },
  { id: 9, src: protection, alt: 'Crop protection and pest management', category: 'fieldwork', featured: false },
  { id: 10, src: DSC1850, alt: 'Field demonstration and training', category: 'fieldwork', featured: false },

  // Workshops & Training
  { id: 11, src: lozwar, alt: 'Agricultural biotechnology workshop session', category: 'workshops', featured: true },
  { id: 12, src: hall, alt: 'Training hall with participants', category: 'workshops', featured: false },
  { id: 13, src: busy, alt: 'Interactive workshop activities', category: 'workshops', featured: false },
  { id: 14, src: cap1, alt: 'Capacity building workshop', category: 'workshops', featured: false },
  { id: 15, src: cap2, alt: 'Technical training session', category: 'workshops', featured: false },
  { id: 16, src: cap3, alt: 'Hands-on learning experience', category: 'workshops', featured: false },

  // Conferences & Ceremonies
  { id: 17, src: ofabCeremony, alt: 'OFAB annual ceremony', category: 'conferences', featured: true },
  { id: 18, src: ofabCere, alt: 'Official ceremony proceedings', category: 'conferences', featured: false },
  { id: 19, src: award2024, alt: '2024 Awards ceremony', category: 'conferences', featured: false },
  { id: 20, src: DSC2083, alt: 'Conference presentation', category: 'conferences', featured: false },
  { id: 21, src: DSC2119, alt: 'Panel discussion session', category: 'conferences', featured: false },
  { id: 22, src: DSC2123, alt: 'Keynote speaker presentation', category: 'conferences', featured: false },

  // Community & Outreach
  { id: 23, src: group, alt: 'Community group engagement', category: 'community', featured: true },
  { id: 24, src: gang, alt: 'Team collaboration and outreach', category: 'community', featured: false },
  { id: 25, src: market, alt: 'Market engagement and farmer support', category: 'community', featured: false },
  { id: 26, src: empower, alt: 'Community empowerment initiatives', category: 'community', featured: false },
  { id: 27, src: nutritio, alt: 'Nutrition education programs', category: 'community', featured: false },

  // Documentation & Media
  { id: 28, src: white, alt: 'Agricultural innovation showcase', category: 'media', featured: false },
  { id: 29, src: DSC1826, alt: 'Professional documentation', category: 'media', featured: false },
  { id: 30, src: DSC2210, alt: 'Event photography', category: 'media', featured: false },
  { id: 31, src: DSC2232, alt: 'Media coverage of activities', category: 'media', featured: false },
  { id: 32, src: DSC2311, alt: 'Behind the scenes documentation', category: 'media', featured: false },
  { id: 33, src: DSC3464, alt: 'Professional event photography', category: 'media', featured: false },
  { id: 34, src: DSC3516, alt: 'High-quality event documentation', category: 'media', featured: false },
  { id: 35, src: DSC3576, alt: 'Candid moments capture', category: 'media', featured: false },
  { id: 36, src: DSC3683, alt: 'Professional media coverage', category: 'media', featured: false },
  { id: 37, src: DSC3689, alt: 'Event highlights documentation', category: 'media', featured: false },
  { id: 38, src: DSC3691, alt: 'Quality photography services', category: 'media', featured: false },
  { id: 39, src: DSC3699, alt: 'Professional event capture', category: 'media', featured: false },
  { id: 40, src: DSC3740, alt: 'Media documentation excellence', category: 'media', featured: false },
  { id: 41, src: _72A2576, alt: 'Premium event photography', category: 'media', featured: false },
  { id: 42, src: _72A2607, alt: 'High-end documentation services', category: 'media', featured: false },
  { id: 43, src: _72A2638, alt: 'Professional media production', category: 'media', featured: false },
  { id: 44, src: _72A2747, alt: 'Excellence in event coverage', category: 'media', featured: false },
];

const eventCategories = [
  { id: 'all', name: 'All Events', icon: '🌟' },
  { id: 'research', name: 'Research & Lab', icon: '🔬' },
  { id: 'fieldwork', name: 'Field Work', icon: '🌾' },
  { id: 'workshops', name: 'Workshops', icon: '🎓' },
  { id: 'conferences', name: 'Conferences', icon: '🎤' },
  { id: 'community', name: 'Community', icon: '🤝' },
  { id: 'media', name: 'Media', icon: '📸' },
];

function Media() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
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

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredImages]);

  const handleCategoryFilter = (categoryId) => {
    setIsLoading(true);
    setActiveCategory(categoryId);

    setTimeout(() => {
      if (categoryId === 'all') {
        setFilteredImages(galleryImages);
      } else {
        setFilteredImages(galleryImages.filter(image => image.category === categoryId));
      }
      setIsLoading(false);
    }, 300);
  };

  const getCategoryStats = () => {
    const stats = {};
    eventCategories.forEach(category => {
      if (category.id === 'all') {
        stats[category.id] = galleryImages.length;
      } else {
        stats[category.id] = galleryImages.filter(img => img.category === category.id).length;
      }
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <div className="media-container">
      <div className="media-hero">
        <div className="hero-content">
          <h1>Media Gallery</h1>
          <p>Explore our journey through agricultural innovation and biotechnology</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{galleryImages.length}</span>
              <span className="stat-label">Total Images</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{eventCategories.length - 1}</span>
              <span className="stat-label">Event Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{galleryImages.filter(img => img.featured).length}</span>
              <span className="stat-label">Featured Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="media-gallery">
        <div className="gallery-header">
          <h2>Event Categories</h2>
          <p>Browse through our comprehensive collection of agricultural biotechnology events</p>
        </div>

        <div className="category-filters">
          {eventCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryFilter(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-name">{category.name}</span>
              <span className="filter-count">({categoryStats[category.id]})</span>
            </button>
          ))}
        </div>

        <div className="gallery-section">
          <div className="section-header">
            <h3>
              {activeCategory === 'all'
                ? 'All Events'
                : eventCategories.find(cat => cat.id === activeCategory)?.name
              }
            </h3>
            <span className="image-count">{filteredImages.length} images</span>
          </div>

          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading images...</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`gallery-item ${image.featured ? 'featured' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="image-container">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="gallery-img"
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <div className="image-category">
                          {eventCategories.find(cat => cat.id === image.category)?.icon}
                          {eventCategories.find(cat => cat.id === image.category)?.name}
                        </div>
                        <div className="image-caption">
                          {image.alt}
                        </div>
                        {image.featured && (
                          <div className="featured-badge">
                            ⭐ Featured
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredImages.length === 0 && !isLoading && (
            <div className="empty-state">
              <div className="empty-icon">📸</div>
              <h3>No images found</h3>
              <p>Try selecting a different category to view more images.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Media;