/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Omas.css';
import award from '../../assets/_72A2638.jpg';
import award2 from '../../assets/_72A2747.jpg';
import award3 from '../../assets/_72A2607.jpg';
import moto from '../../assets/moto.jpeg';
import ofab from '../../assets/ofab-zerobg.png';
import aatf from '../../assets/AATF.jpg';
import rab from '../../assets/Rab.jpg';
import alliance from '../../assets/alliance.jpg';
import rmc from '../../assets/rmc.png';
import ofabimage from '../../assets/ofab-ceremony.jpg';
import ofabimage2 from '../../assets/ofab-cere.jpg';
import ofabimage3 from '../../assets/anociata.jpg';
import ofabimage4 from '../../assets/pacific.jpg';
import ofabimage5 from '../../assets/award-2024.jpg';
import dataimage from '../../assets/data.jpg';
// Youth engagement images
import look from '../../assets/look.jpg';
import grace from '../../assets/grace.jpg';
import gang from '../../assets/gang.jpg';
import irrigate from '../../assets/irrigate.jpg';
import white from '../../assets/white.jpg';
import black from '../../assets/black.jpg';
import hall from '../../assets/hall.jpg';
import arm from '../../assets/arm.jpg';
import { FaBuildingUser } from "react-icons/fa6";
import { MdGroups, } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { Star, Calendar, Users, Target, Eye, Sprout, Users2 } from 'lucide-react';

function Omas() {
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
        <div className='omas-container'>
            {/* Modern Header Section */}
            <div className='omas-hero'>
                <div className='hero-overlay'></div>
                <div className='hero-content'>
                    <div className='official-header animate-on-scroll'>
                        <div className='header-logos'>
                            <img src={moto} alt="Rwanda Coat of Arms" className='official-logo' />
                            <div className='official-title'>
                                <h1 className='republic-title'>REPUBLIC OF RWANDA</h1>
                                <h2 className='ministry-title'>RWANDA AGRICULTURE AND ANIMAL</h2>
                                <h2 className='ministry-title'>RESOURCES DEVELOPMENT BOARD (RAB)</h2>
                            </div>
                            <img src={rab} alt="RAB Logo" className='official-logo' />
                        </div>
                    </div>

                    <div className='partners-section animate-on-scroll'>
                        <h3 className='partners-title'>In Partnership With</h3>
                        <div className='partners-logos'>
                            <img src={aatf} alt="AATF Logo" className='partner-logo' />
                            <img src={alliance} alt="Alliance for Science Logo" className='partner-logo' />
                            <img src={rmc} alt="RMC Logo" className='partner-logo' />
                            <img src={ofab} alt="OFAB Logo" className='partner-logo' />
                        </div>
                    </div>

                    <div className='awards-showcase animate-on-scroll'>
                        <div className="star-decoration">
                            <Star className="star-icon" />
                        </div>
                        <div className='awards-main'>
                            <h1 className="edition-number">4<sup>th</sup></h1>
                            <h2 className="awards-title">
                                <span className="ofab-text">OFAB</span>
                                <span className="media-text">MEDIA</span>
                            </h2>
                            <h3 className="awards-label">Awards</h3>
                            <div className="event-date">
                                <Calendar className="calendar-icon" />
                                <div className="date-info">
                                    <div className="day">27/9</div>
                                    <div className="month">EVENT</div>
                                    <div className="year">DATE</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Registration Call-to-Action */}
                    <div className='registration-cta animate-on-scroll'>
                        <div className='cta-content'>
                            <h2 className='cta-title'>📢 Call for Applications: OFAB Media Awards 2025!</h2>
                            <p className='cta-description'>
                                Join the 4th Edition of the OFAB Media Awards – celebrating journalism that brings science
                                closer to the people through fact-based storytelling on agricultural biotechnology.
                            </p>
                            <div className='cta-highlights'>
                                <div className='cta-highlight'>
                                    <span className='highlight-icon'>🏆</span>
                                    <span>4 Award Categories</span>
                                </div>
                                <div className='cta-highlight'>
                                    <span className='highlight-icon'>🌍</span>
                                    <span>Continental Competition</span>
                                </div>
                                <div className='cta-highlight'>
                                    <span className='highlight-icon'>📅</span>
                                    <span>Deadline: 1/9</span>
                                </div>
                            </div>
                            <div className='cta-buttons'>
                                <Link to="/registration" className='register-btn primary'>
                                    Register Now
                                </Link>
                                <a href="mailto:ofabrwanda@gmail.com" className='register-btn secondary'>
                                    Ask Questions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className='main-content'>
                <div className='content-container'>
                    <div className='intro-section animate-on-scroll'>
                        <h1 className='section-title'>OFAB Media Awards</h1>
                        <div className='intro-content'>
                            <p className='lead-paragraph'>
                                Ladies and gentlemen, distinguished guests, and champions of agricultural innovation, we are
                                thrilled to present to you the 3rd Edition of the OFAB Media Awards (OMA) 2024, an event
                                designed to honor and elevate the voices of Rwandan journalists who have excelled in reporting on the transformative power of agricultural biotechnology.
                            </p>
                            <p className='content-paragraph'>
                                As you know, journalism plays a pivotal role in shaping public understanding and driving conversations on key issues like food security, sustainable farming, and the technological
                                advancements critical to Rwanda's agricultural development. These awards recognize credible
                                and ethical journalism that fosters constructive dialogue, promotes science-based reporting,
                                and ultimately supports Rwanda's mission to build a thriving, tech-driven agricultural sector.
                            </p>
                            <p className='content-paragraph'>
                                This invitation-only event brings together Rwandan media professionals, business leaders,
                                government officials, and civil society stakeholders. Together, we celebrate the exceptional
                                contributions of journalists who have reported insightful, accurate, and impactful stories on
                                the application of modern biotechnology in agriculture.
                            </p>
                        </div>
                    </div>

                    <div className='awards-gallery animate-on-scroll'>
                        <div className='gallery-grid'>
                            <div className='gallery-item featured'>
                                <img src={ofabimage} alt="OFAB Awards Ceremony" />
                                <div className='image-overlay'>
                                    <h3>Awards Ceremony</h3>
                                    <p>Celebrating excellence in agricultural journalism</p>
                                </div>
                            </div>
                            <div className='gallery-item featured'>
                                <img src={ofabimage2} alt="Award Recipients" />
                                <div className='image-overlay'>
                                    <h3>Award Recipients</h3>
                                    <p>Honoring outstanding media professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='partnership-section animate-on-scroll'>
                        <div className='partnership-header'>
                            <div className='timeline-badge'>Since 2021</div>
                            <h2 className='partnership-title'>OFAB Media Awards (OMAs)</h2>
                            <p className='partnership-description'>
                                Have been implemented under a consortium group consisting of RAB, RMC, and other key partners
                            </p>
                        </div>
                        <div className='consortium-logos'>
                            <div className='logo-item'>
                                <img src={rab} alt="RAB Logo" />
                                <span>RAB</span>
                            </div>
                            <div className='logo-item'>
                                <img src={rmc} alt="RMC Logo" />
                                <span>RMC</span>
                            </div>
                            <div className='logo-item'>
                                <img src={alliance} alt="Alliance Logo" />
                                <span>Alliance for Science</span>
                            </div>
                        </div>
                        <p className='partnership-text'>
                            This partnership was established to promote science-based journalism and enhance the capacity of
                            Rwandan media in reporting on agricultural biotechnology. Through the OMAs, the consortium has
                            worked collaboratively to foster responsible, accurate, and ethical reporting, recognizing journalists who
                            contribute to advancing public understanding of agricultural innovations.
                        </p>
                    </div>

                    {/* Seeing is Believing Section */}
                    <div className='seeing-believing-section animate-on-scroll'>
                        <div className='section-header'>
                            <div className='section-badge'>
                                <Eye className='badge-icon' />
                                <span>Field Experience</span>
                            </div>
                            <h2 className='section-title'>Seeing is Believing: Where Innovation Meets Reality in the Field</h2>
                            <p className='section-subtitle'>
                                At OFAB Rwanda, we believe that the best way to understand agricultural biotechnology is to see it in action.
                                That's why we've launched "Seeing is Believing"—a hands-on field experience that takes you straight to the
                                heart of Rwanda's biotech research: the Confined Field Trials (CFTs) for cassava and potato.
                            </p>
                        </div>

                        <div className='field-experience-content'>
                            <div className='experience-description'>
                                <div className='description-grid'>
                                    <div className='description-block'>
                                        <h3>Real Innovation in Action</h3>
                                        <p className='section-description'>
                                            These aren't just ordinary visits. They're carefully guided journeys that bring together journalists, young influencers, women leaders, and agri-entrepreneurs to witness groundbreaking science up close. From cassava that can resist deadly viruses and tolerate drought, to potatoes that fight off late blight—these innovations are real, and they're growing in our test plots today.
                                        </p>
                                    </div>

                                    <div className='description-block'>
                                        <h3>Hands-On Learning Experience</h3>
                                        <p className='section-description'>
                                            Participants walk the fields with the very scientists leading the work, ask tough questions, hear farmers' stories, and learn about the rigorous safety measures behind it all. It's a chance to move beyond headlines and myths—and discover how biotechnology is helping solve real challenges faced by Rwandan farmers.
                                        </p>
                                    </div>

                                    <div className='description-block'>
                                        <h3>Building Trust & Inspiring Stories</h3>
                                        <p className='section-description'>
                                            Seeing is Believing is more than just a learning trip—it's about building trust, sparking meaningful conversations, and inspiring new voices to share these stories across media platforms, communities, and generations. Come see what the future of agriculture looks like. Then help tell that story.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='field-gallery'>
                                <div className='field-grid'>
                                    <div className='field-item featured'>
                                        <img src={look} alt="Young farmers inspecting crops and learning modern techniques" />
                                        <div className='field-overlay'>
                                            <div className='field-category'>Field Work</div>
                                            <h3>Crop Inspection & Learning</h3>
                                            <p>Young farmers learning modern biotechnology techniques</p>
                                        </div>
                                    </div>
                                    <div className='field-item featured'>
                                        <img src={grace} alt="Women empowerment in agricultural biotechnology" />
                                        <div className='field-overlay'>
                                            <div className='field-category'>Empowerment</div>
                                            <h3>Women in Agriculture</h3>
                                            <p>Empowering women leaders in biotechnology</p>
                                        </div>
                                    </div>
                                    <div className='field-item'>
                                        <img src={gang} alt="Youth collaboration and teamwork in agriculture" />
                                        <div className='field-overlay'>
                                            <div className='field-category'>Collaboration</div>
                                            <h3>Youth Teamwork</h3>
                                            <p>Building strong agricultural networks</p>
                                        </div>
                                    </div>
                                    <div className='field-item'>
                                        <img src={irrigate} alt="Modern irrigation systems training" />
                                        <div className='field-overlay'>
                                            <div className='field-category'>Training</div>
                                            <h3>Modern Irrigation</h3>
                                            <p>Advanced farming techniques training</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='impact-highlights'>
                                <div className='highlight-grid'>
                                    <div className='highlight-card'>
                                        <div className='highlight-icon'>
                                            <Users2 />
                                        </div>
                                        <div className='highlight-content'>
                                            <h3>200+ Young Leaders</h3>
                                            <p>Engaged in agricultural biotechnology programs</p>
                                        </div>
                                    </div>
                                    <div className='highlight-card'>
                                        <div className='highlight-icon'>
                                            <Sprout />
                                        </div>
                                        <div className='highlight-content'>
                                            <h3>60% Women Participation</h3>
                                            <p>Leading the way in agricultural innovation</p>
                                        </div>
                                    </div>
                                    <div className='highlight-card'>
                                        <div className='highlight-icon'>
                                            <Target />
                                        </div>
                                        <div className='highlight-content'>
                                            <h3>Hands-on Experience</h3>
                                            <p>Direct exposure to Confined Field Trials (CFTs)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='impact-gallery animate-on-scroll'>
                        <div className='gallery-grid'>
                            <div className='gallery-item'>
                                <img src={ofabimage5} alt="2024 Awards Event" />
                                <div className='image-overlay'>
                                    <h3>2024 Awards Event</h3>
                                    <p>Latest edition celebrating media excellence</p>
                                </div>
                            </div>
                            <div className='gallery-item'>
                                <img src={ofabimage3} alt="Media Professionals" />
                                <div className='image-overlay'>
                                    <h3>Media Professionals</h3>
                                    <p>Dedicated journalists making a difference</p>
                                </div>
                            </div>
                            <div className='gallery-item'>
                                <img src={white} alt="Agricultural innovation showcase" />
                                <div className='image-overlay'>
                                    <h3>Innovation Showcase</h3>
                                    <p>Demonstrating cutting-edge agricultural technology</p>
                                </div>
                            </div>
                            <div className='gallery-item'>
                                <img src={hall} alt="Conference sessions and discussions" />
                                <div className='image-overlay'>
                                    <h3>Knowledge Sharing</h3>
                                    <p>Interactive sessions and expert discussions</p>
                                </div>
                            </div>
                        </div>
                        <p className='impact-text'>
                            By uniting key stakeholders from media, science, and agriculture, the OMAs aim to elevate journalism that informs
                            policy discussions, educates the public, and supports Rwanda's goals for sustainable agricultural development.
                            Through field visits and hands-on experiences, we bridge the gap between scientific innovation and public understanding.
                        </p>
                    </div>
                    <div className='features-section animate-on-scroll'>
                        <div className='features-grid'>
                            <div className='feature-card'>
                                <div className='feature-icon'>
                                    <MdGroups />
                                </div>
                                <div className='feature-content'>
                                    <h3>Shaping Rwanda's Agricultural Future</h3>
                                    <p>By encouraging informed dialogue on biotechnology and sustainable farming practices through youth engagement and women empowerment initiatives</p>
                                </div>
                            </div>
                            <div className='feature-card'>
                                <div className='feature-icon'>
                                    <FaBuildingUser />
                                </div>
                                <div className='feature-content'>
                                    <h3>Engaging the Private Sector and Civil Society</h3>
                                    <p>With the participation of government, business leaders, and civil society,
                                        this year's OMA emphasizes the multi-stakeholder approach necessary
                                        to create an enabling environment for the commercialization of biotech
                                        products that are currently at advanced stages of research.</p>
                                </div>
                            </div>
                            <div className='feature-card'>
                                <div className='feature-icon'>
                                    <Eye />
                                </div>
                                <div className='feature-content'>
                                    <h3>Field Experience Programs</h3>
                                    <p>Through our "Seeing is Believing" initiative, we provide hands-on field experiences
                                        that bring together journalists, young influencers, women leaders, and agri-entrepreneurs
                                        to witness groundbreaking science in Confined Field Trials (CFTs).</p>
                                </div>
                            </div>
                            <div className='feature-card full-width'>
                                <div className='feature-icon'>
                                    <IoEyeOffOutline />
                                </div>
                                <div className='feature-content'>
                                    <h3>Our Commitment</h3>
                                    <p>Let us continue fostering a community that supports innovative journalism and,
                                        in turn, transforms the future of agriculture in Rwanda. We look forward to your
                                        continued collaboration and support as we celebrate Rwanda's agricultural
                                        revolution through biotechnology—one story at a time!
                                        Thank you for being part of this journey. Let's take this opportunity to honor
                                        our journalists, celebrate their contributions, and commit to advancing agricultural
                                        innovation through media excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Youth Engagement Statistics */}
                    <div className='youth-stats-section animate-on-scroll'>
                        <div className='stats-container'>
                            <div className='stats-header'>
                                <h2 className='section-title'>Youth & Women Engagement Impact</h2>
                                <p className='stats-subtitle'>
                                    Empowering the next generation of agricultural leaders through hands-on biotechnology experiences
                                </p>
                            </div>
                            <div className='stats-grid'>
                                <div className='stat-card'>
                                    <div className='stat-visual'>
                                        <img src={black} alt="Youth engagement in sustainable farming" />
                                    </div>
                                    <div className='stat-content'>
                                        <div className='stat-number'>200+</div>
                                        <div className='stat-label'>Young Leaders Engaged</div>
                                        <p className='stat-description'>Active participants in agricultural biotechnology programs</p>
                                    </div>
                                </div>
                                <div className='stat-card'>
                                    <div className='stat-visual'>
                                        <img src={arm} alt="Hands-on training with modern equipment" />
                                    </div>
                                    <div className='stat-content'>
                                        <div className='stat-number'>60%</div>
                                        <div className='stat-label'>Women Participation</div>
                                        <p className='stat-description'>Leading the way in agricultural innovation and biotechnology</p>
                                    </div>
                                </div>
                                <div className='stat-card'>
                                    <div className='stat-visual'>
                                        <img src={irrigate} alt="Modern irrigation training" />
                                    </div>
                                    <div className='stat-content'>
                                        <div className='stat-number'>15+</div>
                                        <div className='stat-label'>Field Visits Organized</div>
                                        <p className='stat-description'>Hands-on experiences at Confined Field Trials (CFTs)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mission-section animate-on-scroll'>
                        <div className='mission-card'>
                            <div className='mission-header'>
                                <Target className='mission-icon' />
                                <h2>Mission</h2>
                            </div>
                            <p className='mission-text'>
                                OMA 2024 aims to recognize and promote Rwandan-based journalists who are creating and reporting on the use, benefits, and other constructive information on agricultural biotechnology. The awards seek to highlight the critical roles played by the media in promoting constructive dialogue on modern biotechnology through responsible, professional, ethical, and effective reporting.
                            </p>
                        </div>
                    </div>

                    <div className='objectives-section animate-on-scroll'>
                        <h2 className='section-title'>Specific Objectives</h2>
                        <p className='section-subtitle'>The specific objectives of the Awards are:</p>
                        <div className='objectives-grid'>
                            <div className='objective-card'>
                                <div className='objective-number'>01</div>
                                <div className='objective-content'>
                                    <h3>Excellence in Science Journalism</h3>
                                    <p>Promote excellence in science journalism and appreciate the contribution
                                        of journalists in promoting sustainable agricultural technologies,
                                        particularly agricultural biotechnology.</p>
                                </div>
                            </div>
                            <div className='objective-card'>
                                <div className='objective-number'>02</div>
                                <div className='objective-content'>
                                    <h3>Responsible Reporting</h3>
                                    <p>Reward the critical roles played by journalists in promoting
                                        constructive dialogue on modern biotechnology through responsible,
                                        professional, ethical, and effective reporting.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='eligibility-section animate-on-scroll'>
                        <div className='info-cards-grid'>
                            <div className='info-card'>
                                <div className='info-header'>
                                    <Users className='info-icon' />
                                    <h3>Eligibility</h3>
                                </div>
                                <p>Rwandan journalists who have been reporting on agricultural biotechnology and other important stories in the area of science, technology, and innovation.</p>
                            </div>
                            <div className='info-card'>
                                <div className='info-header'>
                                    <Calendar className='info-icon' />
                                    <h3>Entry Period</h3>
                                </div>
                                <p>The entry period is for one year, check eligibility requirements for details</p>
                            </div>
                        </div>
                    </div>

                    <div className='categories-section animate-on-scroll'>
                        <h2 className='section-title'>Award Categories & Contestants</h2>
                        <div className='stats-highlight'>
                            <div className='stat-number'>37</div>
                            <div className='stat-text'>contestants from different media houses applied in this competition</div>
                        </div>
                        <div className='categories-grid'>
                            <div className='category-card'>
                                <div className='category-icon'>📰</div>
                                <h3>Print and Online Media</h3>
                                <p>Including newspapers, magazines, and online platforms</p>
                            </div>
                            <div className='category-card'>
                                <div className='category-icon'>📻</div>
                                <h3>Radio</h3>
                                <p>For radio journalists or broadcasters who report on biotech-related topics</p>
                            </div>
                            <div className='category-card'>
                                <div className='category-icon'>📺</div>
                                <h3>Television</h3>
                                <p>For TV journalists and stations covering biotechnology stories</p>
                            </div>
                             <div className='category-card'>
                                <div className='category-icon'>💻</div>
                                <h3>Digital/Online Media</h3>
                                <p>For digital content creators, online journalists, and influencers (Yes, influencers – you're included too!</p>
                            </div>
                        </div>
                        <p className='category-note'>The overall winner from either category will combine the award for his/her category and the overall award.</p>
                    </div>

                    <div className='participants-section animate-on-scroll'>
                        <h2 className='section-title'>Event Participants</h2>
                        <p className='participants-intro'>The awards event was attended by different stakeholders, including:</p>
                        <div className='participants-grid'>
                            <div className='participant-group'>
                                <h4>Agricultural Biotechnology sector players</h4>
                            </div>
                            <div className='participant-group'>
                                <h4>Central government officials</h4>
                                <p>(MINAGRI, MoE, RAB, REMA, etc)</p>
                            </div>
                            <div className='participant-group'>
                                <h4>Journalists/Media practitioners</h4>
                                <p>(mainly agricultural biotechnology)</p>
                            </div>
                        </div>
                        <div className='attendance-info'>
                            <div className='attendance-number'>70</div>
                            <div className='attendance-text'>
                                <p>Participants were limited to seventy attendees and were encouraged to share their experiences in agricultural biotechnology reporting.</p>
                            </div>
                        </div>
                    </div>

                    <div className='contest-section animate-on-scroll'>
                        <h2 className='section-title'>Contest Analytics & Distribution</h2>

                        {/* Award Categories Overview */}
                        <div className='categories-overview'>
                            <div className='categories-header'>
                                <h3 className='categories-title'>Award Categories</h3>
                                <p className='categories-description'>
                                    The OFAB Media Awards recognize excellence across three main categories of media platforms
                                </p>
                            </div>
                            <div className='categories-list'>
                                <div className='category-item'>
                                    <div className='category-number'>1</div>
                                    <div className='category-details'>
                                        <h4>Print and Online Media</h4>
                                        <p>Including newspapers, magazines, and online platforms</p>
                                    </div>
                                </div>
                                <div className='category-item'>
                                    <div className='category-number'>2</div>
                                    <div className='category-details'>
                                        <h4>Radio</h4>
                                        <p>For radio journalists or broadcasters who report on biotech-related topics</p>
                                    </div>
                                </div>
                                <div className='category-item'>
                                    <div className='category-number'>3</div>
                                    <div className='category-details'>
                                        <h4>Television</h4>
                                        <p>For TV journalists and stations covering biotechnology stories</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contest Distribution Charts */}
                        <div className='contest-analytics'>
                            <div className='analytics-header'>
                                <h3 className='analytics-title'>Distribution of Contest Categories by Media House</h3>
                                <p className='analytics-subtitle'>
                                    Comprehensive analysis of participant distribution across different media platforms and demographics
                                </p>
                            </div>

                            <div className='charts-grid'>
                                <div className='chart-section'>
                                    <div className='chart-container'>
                                        <img src={ofabimage4} alt="Contest Distribution Chart" />
                                        <div className='chart-caption'>
                                            <h4>Media House Participation</h4>
                                            <p>Distribution of contestants across various media organizations</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='chart-section'>
                                    <div className='chart-container'>
                                        <img src={dataimage} alt="Gender and Rural vs Urban Distribution" />
                                        <div className='chart-caption'>
                                            <h4>Demographic Analysis</h4>
                                            <p>Gender distribution and rural vs urban contestant comparison</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Key Statistics */}
                            <div className='contest-stats'>
                                <div className='stats-row'>
                                    <div className='stat-highlight'>
                                        <div className='stat-icon'>📊</div>
                                        <div className='stat-info'>
                                            <h4>Balanced Representation</h4>
                                            <p>Equal participation across print, radio, and television categories</p>
                                        </div>
                                    </div>
                                    <div className='stat-highlight'>
                                        <div className='stat-icon'>👥</div>
                                        <div className='stat-info'>
                                            <h4>Gender Diversity</h4>
                                            <p>Strong female participation in agricultural journalism</p>
                                        </div>
                                    </div>
                                    <div className='stat-highlight'>
                                        <div className='stat-icon'>🌍</div>
                                        <div className='stat-info'>
                                            <h4>Geographic Coverage</h4>
                                            <p>Representation from both rural and urban media outlets</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards & Recognition Section */}
            <div className='awards-recognition'>
                <div className='recognition-container'>
                    <h2 className='section-title'>Awards & Recognition</h2>
                    <div className='awards-grid'>
                        <div className='award-card animate-on-scroll'>
                            <div className='award-image'>
                                <img src={award} alt="Award Ceremony" />
                            </div>
                            <div className='award-content'>
                                <div className='award-badge'>Prize Structure</div>
                                <p>The second runners-up in each category were awarded $200 USD. Winners in each category received $300 USD along with a prestigious trophy. The overall winner of the competition earned $500 USD, a magnificent trophy, and a stylish laptop bag as part of their well-deserved accolades.</p>
                            </div>
                        </div>

                        <div className='award-card featured animate-on-scroll'>
                            <div className='award-image'>
                                <img src={award2} alt="Emmanuel Ntirenganya" />
                            </div>
                            <div className='award-content'>
                                <div className='award-badge winner'>Overall Winner</div>
                                <h3>Mr. Emmanuel Ntirenganya</h3>
                                <p>Mr. Emmanuel Ntirenganya clinched the top honor as the inaugural winner of the OFAB Media Awards in 2022, excelling in the distinguished writing category with the article "How agricultural biotechnology could boost food security".</p>
                            </div>
                        </div>

                        <div className='award-card animate-on-scroll'>
                            <div className='award-image'>
                                <img src={award3} alt="Awards Ceremony" />
                            </div>
                            <div className='award-content'>
                                <div className='award-badge'>Celebration</div>
                                <p>The OFAB Rwanda Chapter Media Award ceremony and gala dinner celebrated the achievements of three distinguished top winners and recognized three accomplished second runners-up across all categories. These individuals were honored for their unwavering dedication to reporting on advancements in agricultural biotechnology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Omas;