import React, { useEffect } from 'react'
import './Capacity.css'
import group from '../../assets/DSC_2210.jpg'
import buy from '../../assets/DSC_2072.jpg'
import busy from '../../assets/DSC_1850.jpg'
import about1 from '../../assets/_72A2576.jpg'
import info from '../../assets/DSC_2123 copy.jpg'
import empower from '../../assets/DSC_2232.jpg'
import nutrition from '../../assets/DSC_3576 copy.jpg'
import hallowen from '../../assets/DSC_2083.jpg'
import happy from '../../assets/DSC_3691 copy.jpg'
import increase from '../../assets/_72A2607.jpg'
import market from '../../assets/DSC_3699 copy.jpg'
import pest from '../../assets/DSC_1826 copy.jpg'
import truck from '../../assets/cap2.jpg'
import girl from '../../assets/_72A2747.jpg'
import boy from '../../assets/DSC_2077 copy.jpg'

const capacityImages = [
  { id: 1, src: buy, alt: 'Agricultural biotechnology research and development', category: 'research' },
  { id: 2, src: boy, alt: 'Young professionals in agricultural training', category: 'training' },
  { id: 3, src: pest, alt: 'Pest management and crop protection training', category: 'fieldwork' },
  { id: 4, src: truck, alt: 'Modern agricultural equipment demonstration', category: 'equipment' },
  { id: 5, src: group, alt: 'Group training session on biotechnology', category: 'training' },
  { id: 6, src: busy, alt: 'Interactive workshop activities', category: 'workshop' },
  { id: 7, src: girl, alt: 'Women empowerment in agriculture', category: 'empowerment' },
  { id: 8, src: about1, alt: 'Professional development sessions', category: 'training' },
  { id: 9, src: info, alt: 'Information sharing and knowledge transfer', category: 'knowledge' },
  { id: 10, src: empower, alt: 'Community empowerment initiatives', category: 'empowerment' },
  { id: 11, src: nutrition, alt: 'Nutrition education and awareness', category: 'education' },
  { id: 12, src: hallowen, alt: 'Conference and networking events', category: 'conference' },
  { id: 13, src: happy, alt: 'Successful training completion celebration', category: 'celebration' },
  { id: 14, src: increase, alt: 'Agricultural productivity improvement', category: 'productivity' },
  { id: 15, src: market, alt: 'Market linkage and value chain training', category: 'market' }
];
function Capacity() {
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
        <div className='capacity-container'>
            {/* Modern Hero Section */}
            <div className='capacity-hero'>
                <div className='hero-overlay'></div>
                <div className='hero-content'>
                    <h1 className='hero-title'>Capacity Building</h1>
                    <p className='hero-subtitle'>Empowering communities through knowledge and skills development</p>
                </div>
            </div>

            {/* Main Content */}
            <div className='capacity-main'>
                <div className='content-container'>
                    <div className='intro-section animate-on-scroll'>
                        <h2 className='section-title'>Building Agricultural Excellence</h2>
                        <p className='section-description'>
                            Our comprehensive capacity building programs empower media professionals, policymakers, and farmers
                            with knowledge about modern agricultural biotechnology through interactive workshops, training sessions,
                            and hands-on learning experiences.
                        </p>
                    </div>

                    <div className='gallery-section animate-on-scroll'>
                        <div className='gallery-grid'>
                            {capacityImages.map((image, index) => (
                                <div
                                    key={image.id}
                                    className={`gallery-item animate-on-scroll ${index === 4 ? 'featured' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className='image-container'>
                                        <img src={image.src} alt={image.alt} />
                                        <div className='image-overlay'>
                                            <div className='overlay-content'>
                                                <div className='image-category'>{image.category}</div>
                                                <div className='image-caption'>{image.alt}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='impact-section animate-on-scroll'>
                        <h2 className='section-title'>Our Impact</h2>
                        <div className='impact-stats'>
                            <div className='stat-card'>
                                <div className='stat-number'>500+</div>
                                <div className='stat-label'>Professionals Trained</div>
                            </div>
                            <div className='stat-card'>
                                <div className='stat-number'>50+</div>
                                <div className='stat-label'>Workshops Conducted</div>
                            </div>
                            <div className='stat-card'>
                                <div className='stat-number'>15+</div>
                                <div className='stat-label'>Partner Organizations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capacity