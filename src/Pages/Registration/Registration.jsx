/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './Registration.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import {  Trophy, Users, Star, CheckCircle, Clock, Award, Target } from 'lucide-react';

const Registration = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistrationSuccess = () => {
    setRegistrationSuccess(true);
    setShowRegistrationForm(false);
  };

  const benefits = [
    {
      icon: <Trophy className="benefit-icon" />,
      title: "Compete for Prestigious Awards",
      description: "Win up to $500 USD plus trophies and recognition for excellence in agricultural journalism"
    },
    {
      icon: <Users className="benefit-icon" />,
      title: "Network with Industry Leaders",
      description: "Connect with 70+ journalists, researchers, government officials, and industry experts"
    },
    {
      icon: <Target className="benefit-icon" />,
      title: "Enhance Your Skills",
      description: "Participate in workshops and training sessions on science communication and biotechnology reporting"
    },
    {
      icon: <Star className="benefit-icon" />,
      title: "Gain Recognition",
      description: "Build your professional reputation and showcase your work to a wider audience"
    }
  ];

  const categories = [
    {
      title: "Print Media (Newspapers, Magazines)",
      description: "For journalists working in traditional print media covering biotechnology stories",
      icon: "📰"
    },
    {
      title: "Radio",
      description: "For radio journalists and broadcasters covering biotechnology topics",
      icon: "📻"
    },
    {
      title: "Television",
      description: "For TV journalists and stations producing biotechnology content",
      icon: "📺"
    },
    {
      title: "Digital/Online Media",
      description: "For digital content creators, online journalists, and influencers (Yes, influencers – you're included too!)",
      icon: "💻"
    }
  ];

  const timeline = [
    {
      date: "1/8",
      event: "Registration Opens",
      status: "active"
    },
    {
      date: "1/9",
      event: "Registration Deadline",
      status: "upcoming"
    },
    {
      date: "8/9",
      event: "Participant Confirmation",
      status: "upcoming"
    },
    {
      date: "27/9",
      event: "OMAS 2025 Event",
      status: "upcoming"
    }
  ];

  return (
    <div className="registration-page">
      {/* Hero Section */}
      <div className="registration-hero">
        <div className="hero-content">

          
          <h1 className="hero-title">
            OFAB Rwanda Media Awards Edition <span className="highlight">2025</span>
          </h1>

          <p className="hero-description">
            📢 Call for Applications: OFAB Media Awards (OMAs) – 2025 Edition! 🎤📸📺💻
            <br /><br />
            Welcome to the 4th Edition of the OFAB Media Awards (OMAs) – a unique platform celebrating
            journalism that brings science closer to the people through fact-based and impactful
            storytelling on agricultural biotechnology.
          </p>



          {registrationSuccess ? (
            <div className="success-message">
              <CheckCircle className="success-icon" />
              <h3>Registration Successful!</h3>
              <p>Thank you for registering for OMAS 2025. You will receive a confirmation email shortly.</p>
            </div>
          ) : (
            <button 
              className="register-cta-btn"
              onClick={() => setShowRegistrationForm(true)}
            >
              <Users className="btn-icon" />
              Register Now - It's Free!
            </button>
          )}

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">4th</div>
              <div className="stat-label">Edition</div>
            </div>
            <div className="stat">
              <div className="stat-number">70+</div>
              <div className="stat-label">Participants</div>
            </div>
            <div className="stat">
              <div className="stat-number">$500</div>
              <div className="stat-label">Top Prize</div>
            </div>
          </div>
        </div>
      </div>

      {/* About OMAS Section */}
      <div className="about-omas-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About OFAB Media Awards</h2>
              <p>
                Since 2006, the Open Forum on Agricultural Biotechnology in Africa (OFAB) has been working
                to simplify scientific language, bust myths, and promote the truth behind biotech innovations
                that help farmers grow better and safer food.
              </p>
              <p>
                In Rwanda, the OMAs are organized by OFAB Rwanda Chapter under the leadership of RAB,
                in collaboration with Rwanda Media Commission (RMC) and Alliance for Science Rwanda,
                with support from the African Agricultural Technology Foundation (AATF).
              </p>
              <p>
                This is your chance to be recognized for journalism that's bold, factual, and focused on
                the real benefits of science in agriculture. Whether you're writing, recording, or creating
                digital content, if your stories promote a better understanding of biotechnology, we want to hear from you!
              </p>
            </div>
            <div className="recognition-highlights">
              <div className="highlight-item">
                <h3>🏅 National Recognition & Continental Opportunity</h3>
                <p>The top 3 winners in Rwanda—one from each category—will go on to compete at the OFAB Africa Continental Awards, representing Rwanda on a bigger stage!</p>
              </div>
              <div className="highlight-item">
                <h3>🎁 Exciting Prizes & Awards</h3>
                <p>Great prizes and recognition await journalists who tell biotech stories with truth, evidence, and clarity.</p>
              </div>
              <div className="highlight-item">
                <h3>📢 Tell your story. Share your truth. Make your impact.</h3>
                <p>Be part of the media movement that's shaping the future of African agriculture. 🌱🗞️📡</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Participate in OMAS 2025?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                {benefit.icon}
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <div className="container">
          <h2 className="section-title">Award Categories</h2>
          <p className="section-subtitle">
            Compete in one of three media categories based on your area of expertise
          </p>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
          <div className="category-note">
            <Award className="note-icon" />
            <p>The overall winner will receive both their category award and the grand prize!</p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${item.status}`}>
                <div className="timeline-marker">
                  <Clock className="timeline-icon" />
                </div>
                <div className="timeline-content">
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-event">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="eligibility-section">
        <div className="container">
          <h2 className="section-title">Eligibility Requirements</h2>
          <div className="eligibility-content">
            <div className="eligibility-card">
              <h3>Who Can Apply?</h3>
              <ul>
                <li>Rwandan journalists and media professionals</li>
                <li>Reporters covering agricultural biotechnology topics</li>
                <li>Writers focusing on science, technology, and innovation</li>
                <li>Media practitioners with published work in the eligible period</li>
              </ul>
            </div>
            <div className="eligibility-card">
              <h3>Entry Period</h3>
              <p>
                Your submitted work must have been published within the eligible period
              </p>
              <div className="entry-requirements">
                <h4>Story Requirements:</h4>
                <ul>
                  <li>Submit 3 stories with links from credible media sources</li>
                  <li>Include publication dates for each story</li>
                  <li>Provide transcripts for non-English stories</li>
                  <li>Include 200-word summary and motivation for each story</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Showcase Your Work?</h2>
            <p>
              Don't miss this opportunity to be recognized for your contribution to 
              agricultural journalism in Rwanda. Registration is free and takes just a few minutes.
            </p>
            {!registrationSuccess && (
              <button 
                className="register-cta-btn large"
                onClick={() => setShowRegistrationForm(true)}
              >
                <Users className="btn-icon" />
                Start Your Registration
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <RegistrationForm
          onClose={() => setShowRegistrationForm(false)}
          onSuccess={handleRegistrationSuccess}
        />
      )}
    </div>
  );
};

export default Registration;
