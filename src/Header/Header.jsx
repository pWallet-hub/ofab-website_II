
// Header.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import image from "../assets/ofab.jpg";

import './Header.css';

function Header() {
  const [sidebarOpener, setSidebarOpener] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const handleMenuClick = () => {
    setSidebarOpener(!sidebarOpener);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpener(false);
  }, [location]);

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Contact Bar */}
      <div className='contact-bar'>
        <div className='contact-container'>
          <div className='contact-info_container'>
            <div className='contact-item'>
              <Phone className='contact-icon' />
              <div>+250 788 772 201</div>
            </div>
            <div className='contact-item'>
              <Mail className='contact-icon' />
              <div>ofabrwanda@gmail.com</div>
            </div>
            <div className='contact-item'>
              <MapPin className='contact-icon' />
              <span>Kigali, Rwanda</span>
            </div>
          </div>
          <div className='social-links'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='social-link'>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/OfabRwanda" target="_blank" rel="noopener noreferrer" className='social-link'>
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/ofab-rwanda/" target="_blank" rel="noopener noreferrer" className='social-link'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className='main-nav'>
        <div className='nav-container'>
          {/* Logo */}
          <div className='logo-section'>
            <Link to="/" className='logo-link'>
              <img src={image} alt="OFAB Rwanda" className='logo-image' />
              <div className='logo-text'>
                <span className='logo-title'>OFAB Rwanda</span>
                <span className='logo-subtitle'>Open Forum on Agricultural Biotechnology</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='desktop-nav'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/who-we-are" className={`nav-link ${location.pathname === '/who-we-are' ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/activities" className={`nav-link ${location.pathname === '/activities' ? 'active' : ''}`}>
                  Activities
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/News" className={`nav-link ${location.pathname === '/News' ? 'active' : ''}`}>
                  News
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/media" className={`nav-link ${location.pathname === '/media' ? 'active' : ''}`}>
                  Gallery
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/register" className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}>
                  OMAS 2025
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className='mobile-menu-btn' onClick={handleMenuClick}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpener && (
        <Sidebar
          setSidebarOpen={setSidebarOpener}
          className={sidebarOpener ? 'open' : ''}
        />
      )}
    </header>
  );
}

export default Header;
