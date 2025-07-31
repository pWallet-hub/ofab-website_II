import { useEffect } from 'react';
import look from '../../assets/look.jpg';
import grace from '../../assets/grace.jpg';
import gang from '../../assets/gang.jpg';
import irrigate from '../../assets/irrigate.jpg';
import white from '../../assets/white.jpg';
import black from '../../assets/black.jpg';
import hall from '../../assets/hall.jpg'
import arm from '../../assets/arm.jpg'
import './Youth.css';

const youthImages = [
  { id: 1, src: look, alt: 'Young farmers inspecting crops and learning modern techniques', category: 'fieldwork', featured: true },
  { id: 2, src: grace, alt: 'Women empowerment in agricultural biotechnology', category: 'empowerment', featured: true },
  { id: 3, src: gang, alt: 'Youth collaboration and teamwork in agriculture', category: 'collaboration', featured: false },
  { id: 4, src: irrigate, alt: 'Modern irrigation systems training for young farmers', category: 'training', featured: false },
  { id: 5, src: white, alt: 'Agricultural innovation and technology showcase', category: 'innovation', featured: false },
  { id: 6, src: black, alt: 'Youth engagement in sustainable farming practices', category: 'sustainability', featured: false },
  { id: 7, src: hall, alt: 'Conference hall sessions on youth development', category: 'conference', featured: false },
  { id: 8, src: arm, alt: 'Hands-on training with modern agricultural equipment', category: 'equipment', featured: false }
];

function Youth() {
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

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='youth-container'>
      {/* Modern Hero Section */}
      <div className='youth-hero'>
        <div className='hero-overlay'></div>
        <div className='hero-content'>
          <h1 className='hero-title'>Youth & Women Empowerment</h1>
          <p className='hero-subtitle'>At OFAB Rwanda, we believe that the best way to understand agricultural biotechnology is to see it in action. That’s why we’ve launched “Seeing is Believing”—a hands-on field experience that takes you straight to the heart of Rwanda’s biotech research: the Confined Field Trials (CFTs) for cassava and potato.
</p>
          <div className='hero-stats'>
            <div className='stat-item'>
              <span className='stat-number'>200+</span>
              <span className='stat-label'>Young Leaders</span>
            </div>
            <div className='stat-item'>
              <span className='stat-number'>60%</span>
              <span className='stat-label'>Women Participation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='youth-main'>
        <div className='content-container'>
          <div className='intro-section animate-on-scroll'>
            <h2 className='section-title'>Seeing is Believing</h2>
            <p className='section-description'>
              These aren’t just ordinary visits. They’re carefully guided journeys that bring together journalists, young influencers, women leaders, and agri-entrepreneurs to witness groundbreaking science up close. From cassava that can resist deadly viruses and tolerate drought, to potatoes that fight off late blight—these innovations are real, and they’re growing in our test plots today.

            </p>
          </div>

          <div className='gallery-section animate-on-scroll'>
            <div className='gallery-grid'>
              {youthImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`gallery-item animate-on-scroll ${image.featured ? 'featured' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='image-container'>
                    <img src={image.src} alt={image.alt} />
                    <div className='image-overlay'>
                      <div className='overlay-content'>
                        <div className='image-category'>{image.category}</div>
                        <div className='image-caption'>{image.alt}</div>
                        {image.featured && (
                          <div className='featured-badge'>⭐ Featured</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
              <p className='section-description'>
              These aren’t just ordinary visits. They’re carefully guided journeys that bring together journalists, young influencers, women leaders, and agri-entrepreneurs to witness groundbreaking science up close. From cassava that can resist deadly viruses and tolerate drought, to potatoes that fight off late blight—these innovations are real, and they’re growing in our test plots today.

            </p>
          </div>

          <div className='impact-section animate-on-scroll'>
            <h2 className='section-title'>Our Impact</h2>
            <div className='impact-grid'>
              <div className='impact-card'>
                <div className='impact-icon'>👩‍🌾</div>
                <h3>Women in Agriculture</h3>
                <p>Empowering women farmers with modern biotechnology knowledge and sustainable farming techniques</p>
              </div>
              <div className='impact-card'>
                <div className='impact-icon'>🌱</div>
                <h3>Youth Innovation</h3>
                <p>Inspiring young minds to embrace agricultural innovation and become future leaders in biotechnology</p>
              </div>
              <div className='impact-card'>
                <div className='impact-icon'>🤝</div>
                <h3>Community Building</h3>
                <p>Creating strong networks of young agricultural professionals and women entrepreneurs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youth;
