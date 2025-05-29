import React, { useEffect } from 'react';
import './Media.css';
import labo from '../../assets/labo.jpg';
import harvest from '../../assets/harvest.jpg';
import green from '../../assets/green.jpg';
import test from '../../assets/test.jpg';
import lozwar from '../../assets/lozwar.jpg';
import arm from '../../assets/arm.jpg';
import white from '../../assets/white.jpg';

// Sample image data (expandable)
const galleryImages = [
  { id: 1, src: labo, alt: 'Laboratory research in agricultural biotechnology', size: 'large' },
  { id: 2, src: harvest, alt: 'Harvesting crops in the field', size: 'large' },
  { id: 3, src: green, alt: 'Greenhouse farming innovation', size: 'medium' },
  { id: 4, src: test, alt: 'Scientific testing of crops', size: 'medium' },
  { id: 5, src: lozwar, alt: 'Agricultural biotechnology workshop', size: 'medium' },
  { id: 6, src: arm, alt: 'Farmer working with modern tools', size: 'large' },
  { id: 7, src: white, alt: 'Agricultural innovation showcase', size: 'large' },
  // Add more images here as needed
];

function Media() {
  useEffect(() => {
    // Scroll animation with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.gallery-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="media-container">
      {/* Header */}
      <div className="media-content">
        <h1>Media Gallery</h1>
      </div>

      {/* Gallery */}
      <div className="media-gallery">
        <h2>Our Activities in Action</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`gallery-item ${image.size}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="image-overlay">
                <span className="image-caption">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Media;