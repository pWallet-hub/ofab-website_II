import { Link } from 'react-router-dom';
import './Footer.css';
import image from "../assets/ofab_new.jpg";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Heart,
  ExternalLink
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/who-we-are', label: 'About Us' },
    { path: '/activities', label: 'Activities' },
    { path: '/News', label: 'News' },
    { path: '/media', label: 'Gallery' },
    { path: '/omas', label: 'OMAS 2025' }
  ];

  const programs = [
    { path: '/capacity', label: 'Capacity Building' },
    { path: '/youth', label: 'Youth Empowerment' },
    { path: '/activities', label: 'Field Visits' },
    { path: '/News', label: 'Media Awards' }
  ];

  return (
    <footer className='modern-footer'>
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Organization Info */}
          <div className="footer-section organization-info">
            <div className="footer-logo">
              <img src={image} alt="OFAB Rwanda" />
              <div className="logo-text">
                <h3>OFAB Rwanda</h3>
                <span>Open Forum on Agricultural Biotechnology</span>
              </div>
            </div>
            <p className="organization-description">
              For a food-secure Rwanda where agricultural biotechnology is making
              significant contributions to sustainable development and improved livelihoods.
            </p>
            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/OfabRwanda" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/company/ofab-rwanda/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    <ChevronRight className="link-icon" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h4 className="footer-title">Our Programs</h4>
            <ul className="footer-links">
              {programs.map((program) => (
                <li key={program.path}>
                  <Link to={program.path} className="footer-link">
                    <ChevronRight className="link-icon" />
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section contact-section">
            <h4 className="footer-title">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Call Us</span>
                  <a href="tel:+250788772201" className="contact-value">+250 788 772 201</a>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:ofabrwanda@gmail.com" className="contact-value">ofabrwanda@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Visit Us</span>
                  <span className="contact-value">Rubirizi, Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} OFAB Rwanda. All rights reserved. Made with{' '}
                <Heart className="heart-icon" /> for sustainable agriculture.
              </p>
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="bottom-link">Terms of Service</Link>
              <a
                href="https://aatf-africa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-link"
              >
                AATF <ExternalLink className="external-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;