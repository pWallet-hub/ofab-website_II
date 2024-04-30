import React from 'react';
import './Partner.css';

const Partner = ({ logo, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="partner">
      <img src={logo} alt="Partner logo" className="partner-logo" />
    </a>
  );
};

export default Partner;