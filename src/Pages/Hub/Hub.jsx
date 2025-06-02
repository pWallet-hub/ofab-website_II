import info from '../../assets/info.jpg';
import './Hub.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Hub() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://ofab-bn.onrender.com/api/v1/galleries');
        setImages(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="hub">
        <img className="hub-img" src={info} alt="Gallery header" />
      </div>
      <h2 className="hub-title">Gallery</h2>
      <div className="hub-info">
        {loading ? (
          <div className="loading">
            <div className="loader"></div>
            <span>Loading images...</span>
          </div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : images.length === 0 ? (
          <div className="error-message">No images available.</div>
        ) : (
          <div className="carousel-container">
            <h1 className='section-title'>OFAB Media Award 2024 Gallery</h1>
            <div className="carousel" ref={carouselRef}>
            <marquee>
              {images
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((img) => (
                  <img
                    className="blog-card"
                    key={img.id}
                    src={img.images}
                    alt={img.title || 'Gallery image'}
                    loading="lazy"
                  />
                ))}
                </marquee>
            </div>
            <div className="carousel-controls">
              <button
                className="carousel-btn prev"
                aria-label="Previous image"
                onClick={() => scrollCarousel(-1)}
              >
                ❮
              </button>
              <button
                className="carousel-btn next"
                aria-label="Next image"
                onClick={() => scrollCarousel(1)}
              >
                ❯
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}