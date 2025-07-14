import React, { useEffect } from 'react';
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
import { FaTrophy, FaBuildingUser } from "react-icons/fa6";
import { MdGroups, MdOutlineEmojiEvents } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { Star, Calendar, Users, Target } from 'lucide-react';

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
                            <h1 className="edition-number">3<sup>rd</sup></h1>
                            <h2 className="awards-title">
                                <span className="ofab-text">OFAB</span>
                                <span className="media-text">MEDIA</span>
                            </h2>
                            <h3 className="awards-label">Awards</h3>
                            <div className="event-date">
                                <Calendar className="calendar-icon" />
                                <div className="date-info">
                                    <div className="day">27</div>
                                    <div className="month">SEPTEMBER</div>
                                    <div className="year">2024</div>
                                </div>
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
                        </div>
                        <p className='impact-text'>
                            By uniting key stakeholders from media, science, and agriculture, the OMAs aim to elevate journalism that informs
                            policy discussions, educates the public, and supports Rwanda's goals for sustainable agricultural development.
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
                                    <p>By encouraging informed dialogue on biotechnology and sustainable farming practices</p>
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
                                <p>The entry period is for one year, from 31st August 2023 to 05th August 2024</p>
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
                        <h2 className='section-title'>Distribution of Contest Categories by Media House</h2>
                        <div className='contest-gallery'>
                            <div className='contest-image'>
                                <img src={ofabimage4} alt="Contest Distribution Chart" />
                                <div className='image-caption'>Contest category distribution</div>
                            </div>
                            <div className='contest-image'>
                                <img src={dataimage} alt="Media House Data" />
                                <div className='image-caption'>Media house participation data</div>
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