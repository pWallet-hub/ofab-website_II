/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Omas.css';
import award from '../../assets/_72A2638.jpg';
import award2 from '../../assets/_72A2747.jpg';
import award3 from '../../assets/_72A2607.jpg';
import moto from '../../assets/moto.jpeg';
import ofab from '../../assets/ofab_new.jpg';
import aatf from '../../assets/AATF.jpg';
import rab from '../../assets/Rab.jpg';
import alliance from '../../assets/alliance.jpg';
import rmc from '../../assets/rmc.png';
import ofabimage from '../../assets/award6.jpg';
import ofabimage2 from '../../assets/ofab-cere.jpg';
import ofabimage3 from '../../assets/anociata.jpg';
import ofabimage4 from '../../assets/pacific.jpg';
import ofabimage5 from '../../assets/award-2024.jpg';
import dataimage from '../../assets/data.jpg';
import irrigate from '../../assets/irrigation.jpg';
import white from '../../assets/ofab-award.jpg';
import black from '../../assets/young.jpg';
import hall from '../../assets/ofab-award1.jpg';
import arm from '../../assets/speaker.jpg';
import { FaBuildingUser } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import OFABMediaAwardsFlyer from '../../components/OFABMediaAwardsFlyer/OFABMediaAwardsFlyer';
import {
  FaStar as Star,
  FaCalendarAlt as Calendar,
  FaUsers as Users,
  FaBullseye as Target,
  FaEye as Eye,
  FaSeedling as Sprout,
  FaUserFriends as Users2,
  FaTrophy as Trophy
} from 'react-icons/fa';

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
            <OFABMediaAwardsFlyer />

            <div className='main-content'>
                <div className='content-container'>
                    <div className='intro-section animate-on-scroll'>
                        <h1 className='section-title'>OFAB Media Awards</h1>
                        <div className='intro-content'>
                            <p className='lead-paragraph'>
                              Since its global inception in September 2006, the Open Forum on Agricultural Biotechnology in Africa (OFAB) 
                              project has played a pivotal role in advancing knowledge-sharing, raising awareness, and fostering constructive dialogue on agricultural biotechnology across Africa. As a collaborative initiative between the African Agricultural Technology Foundation (AATF) 
                              and like-minded organizations, OFAB operates through country-level chapters, primarily facilitated by government bodies serving as secretariats.
                            </p>
                            <p className='content-paragraph'>
                               Currently active in Kenya, Uganda, Tanzania, Ethiopia, Nigeria, Ghana, Burkina Faso, Rwanda, Mozambique, and Malawi, OFAB continues to promote informed discussions on the safety and benefits of modern agricultural biotechnology among key stakeholders.
The OFAB Media Awards (OMAs) were established to recognize and celebrate outstanding journalism that demonstrates excellence in agricultural biotechnology reporting. By honoring accurate, ethical, and impactful reporting, the awards aim to enhance public understanding and acceptance of agricultural innovations essential for food security, sustainable development, and poverty eradication in Africa.
                            </p>
                            <p className='content-paragraph'>
                               Each year, the OMAs highlight the critical role of the media in shaping informed debates on agricultural biotechnology through responsible, professional, and evidence-based reporting on modern biotechnology. These awards underscore OFAB's commitment to fostering a well-informed society that embraces science, technology, and innovation for agricultural transformation. 
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
                        <div className='gallery-grid'>
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

                    <div className='mission-section animate-on-scroll'>
                        <div className='mission-card'>
                            <div className='mission-header'>
                                <Target className='mission-icon' />
                                <h2>Mission</h2>
                            </div>
                            <p className='mission-text'>
                                OMAs aims to recognize and promote Rwandan-based journalists who are creating and reporting on the use, benefits, and other constructive information on agricultural biotechnology. The awards seek to highlight the critical roles played by the media in promoting constructive dialogue on modern biotechnology through responsible, professional, ethical, and effective reporting.
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

                    <div className='eligibility-section1 animate-on-scroll'>
                        <div className='info-cards-grid'>
                            <div className='info-card'>
                                <div className='info-header'>
                                    <Users className='info-icon' />
                                    <h3>Eligibility</h3>
                                </div>
                                <p> The stories or articles must have been published between 31st August 2024 and 31st August 2025. </p>
                            </div>
                            <div className='info-card'>
                                <div className='info-header'>
                                    <Calendar className='info-icon' />
                                    <h3>Entry Period</h3>
                                </div>
                                <p>The entry period for applying is from 4th August to 2nd September 2025.</p>
                            </div>
                        </div>
                    </div>

                    <div className='contest-section animate-on-scroll'>
                        <div className='contest-analytics'>
                            <div className='analytics-header'>
                                <h3 className='analytics-title'>HIGHLIGHTS ON PREVIOUS OMAs</h3>
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