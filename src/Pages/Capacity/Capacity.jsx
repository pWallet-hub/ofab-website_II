import { useEffect } from 'react'
import './Capacity.css'
import group from '../../assets/DSC_2210.jpg'
import buy from '../../assets/tem.jpg'
import busy from '../../assets/DSC_1850.jpg'
import about1 from '../../assets/_72A2576.jpg'
import info from '../../assets/DSC_2123 copy.jpg'
import empower from '../../assets/DSC_2232.jpg'
import nutrition from '../../assets/DSC_3576 copy.jpg'
import hallowen from '../../assets/DSC_2083.jpg'
import happy from '../../assets/DSC_3691 copy.jpg'
import increase from '../../assets/_72A2607.jpg'
import market from '../../assets/DSC_3699 copy.jpg'
import pest from '../../assets/DSC_1826_copy.jpg'
import truck from '../../assets/cap2.jpg'
import girl from '../../assets/_72A2747.jpg'
import boy from '../../assets/DSC_4997.jpg'

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

                    {/* Enhanced Workshop Description */}
                    <div className='workshop-description-section animate-on-scroll'>
                        <div className='workshop-header'>
                            <h2 className='section-title'>Empowering Voices, Bridging Science and Society</h2>
                            <p className='workshop-intro'>
                                At the heart of Rwanda`&apos`s agricultural transformation lies the power of communication.
                                The Open Forum on Agricultural Biotechnology (OFAB) Rwanda Chapter is proud to spearhead
                                a series of dynamic Consultative Engagement Workshops designed to strengthen the link
                                between scientific innovation and public understanding.
                            </p>
                        </div>

                        <div className='workshop-details'>
                            <p className='workshop-text'>
                                These interactive forums bring together senior media professionals, emerging digital influencers,
                                women leaders, and young agri-entrepreneurs to build capacity, spark dialogue, and foster inclusive
                                storytelling around agricultural biotechnology. Through tailored sessions and real-world experiences—including
                                field visits to cutting-edge biotech research sites—participants gain the tools, knowledge, and confidence
                                to engage their communities with clarity, credibility, and purpose.
                            </p>
                        </div>
                    </div>

                    {/* Workshop Focus Areas */}
                    <div className='workshop-focus-section animate-on-scroll'>
                        <h2 className='section-title'>Who We Empower</h2>
                        <div className='focus-grid'>
                            <div className='focus-card'>
                                <div className='focus-icon'>📰</div>
                                <h3>Media Professionals</h3>
                                <p>Journalists seeking to demystify science and communicate biotechnology stories with accuracy and impact</p>
                            </div>
                            <div className='focus-card'>
                                <div className='focus-icon'>💡</div>
                                <h3>Digital Influencers</h3>
                                <p>Content creators passionate about development and agricultural innovation</p>
                            </div>
                            <div className='focus-card'>
                                <div className='focus-icon'>👩‍💼</div>
                                <h3>Women Leaders</h3>
                                <p>Female leaders driving change in agricultural communities and biotechnology adoption</p>
                            </div>
                            <div className='focus-card'>
                                <div className='focus-icon'>🌱</div>
                                <h3>Young Agri-Entrepreneurs</h3>
                                <p>Young farmers innovating on the ground and embracing modern agricultural technologies</p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <div className='mission-statement animate-on-scroll'>
                        <div className='mission-content'>
                            <h2 className='mission-title'>Our Mission</h2>
                            <p className='mission-text'>
                                Whether you&#39re a journalist seeking to demystify science, a content creator passionate about development,
                                or a young farmer innovating on the ground, these workshops offer a collaborative platform where your voice
                                meets Rwanda&#39s vision for a science-driven, food-secure future.
                            </p>
                            <p className='mission-text'>
                                Together, we&#39re cultivating informed advocates for biotechnology—champions who are shaping narratives,
                                shifting mindsets, and accelerating the journey toward sustainable agriculture across the continent.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capacity