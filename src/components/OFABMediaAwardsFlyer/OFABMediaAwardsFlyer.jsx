import React from 'react';
import './OFABMediaAwardsFlyer.css';
import rab from '../../assets/Rab.jpg';
import rmc from '../../assets/rmc.png';
import aatf from '../../assets/AATF.jpg';
import alliance from '../../assets/alliance-new.png';
import ofab from '../../assets/ofab_new.jpg';
import moto from '../../assets/moto.jpeg';
import celebration from '../../assets/celebration.png';

const OFABMediaAwardsFlyer = () => {
  return (
    <div className="flyer-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content1">
          {/* Left Logo Placeholder */}
          <div className="logo-placeholder">
            <img src={moto} alt="moto" />
          </div>
          
          {/* Center Text */}
          <div className="header-text1">
            <h1>REPUBLIC OF RWANDA</h1>
            <h2 className="header-subtitle">RWANDA AGRICULTURE AND ANIMAL </h2>
            <h2 className="header-subtitle"></h2>
            <h2 className="header-subtitle"> RESOURCEs DEVELOPMENT BOARD</h2>
            <h3 className="header-rab">(RAB)</h3>
          </div>
          
          {/* Right Logo Placeholder */}
          <div className="logo-placeholder">
             <img src={rab} alt="moto" />
          </div>
        </div>
        
        
        <div className="partner-logos">
          <div className="partner-logos-container">
            <div className="partner-logo">
              <img src={ofab} alt="ofab" />
            </div>
            <div className="partner-logo">
              <img src={alliance} alt="alliance" />
            </div>
            <div className="partner-logo">
              <img src={rmc} alt="rmc" />
            </div>
            <div className="partner-logo">
              <img src={aatf} alt="aatf" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="main-content1">
        {/* Call for Applications Header */}
        <div className="call-header">
          <div className="call-header-wrapper">
            <h2 className="call-title">
              CALL FOR APPLICATIONS
            </h2>
            <div className="call-underline"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="content-section">
          <p className="intro-text">We are honored to invite you to the</p>
          
          <div className="edition-section">
            <h3 className="edition-title">
              <span className="quote-large">"</span>4<sup className="superscript">th</sup> Edition
            </h3>
            <h3 className="edition-title">
              of OFAB Media Awards<span className="quote-large">"</span>
            </h3>
          </div>

          <p className="description-text">Are you a journalist or content creator telling powerful stories about Agricultural Biotechnology? We are looking for outstanding reporting in:</p>
         

          {/* Categories Grid */}
          <div className="categories-grid1">
            <div className="category-item1">
              <span className="checkmark1">✓</span>
              <span className="category-text1">Print-Online Media</span>
            </div>
            <div className="category-item1">
              <span className="checkmark1">✓</span>
              <span className="category-text1">Radio</span>
            </div>
            <div className="category-item1">
              <span className="checkmark1">✓</span>
              <span className="category-text1"> Television</span>
            </div>
            <div className="category-item1">
              <span className="checkmark1">✓</span>
              <span className="category-text1"> Digital Content</span>
            </div>
          </div>

          {/* Star Trophy Image Placeholder */}
          <div className="trophy-section">
            <div className="trophy-placeholder">
              <img  src={celebration} alt="" />
            </div>
          </div>

          {/* Call to Action */}
          <p className="cta-text">Submit your best work and get recognized!</p>
          <p className="deadline-text">
            <span className="deadline-highlight">Deadline:</span> August 31, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default OFABMediaAwardsFlyer;