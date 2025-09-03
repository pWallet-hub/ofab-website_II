import { Link, useLocation } from 'react-router-dom';
import { X, Home, Users, Activity, Newspaper, Image, Award } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import './Sidebar.css';

function Sidebar({ className, setSidebarOpen }) {
  const location = useLocation();

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  const menuItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/who-we-are', label: 'About Us', icon: Users },
    { path: '/activities', label: 'Activities', icon: Activity },
    { path: '/News', label: 'News', icon: Newspaper },
    { path: '/media', label: 'Gallery', icon: Image },
    { path: '/register', label: 'OMAS 2025', icon: Award },
  ];

  return (
    <div className={`modern-sidebar ${className}`}>
      {/* Overlay */}
      <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>

      {/* Sidebar Content */}
      <div className="sidebar-content">
        {/* Header */}
        <div className="sidebar-header">
          <h3 className="sidebar-title">Menu</h3>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <li key={item.path} className="sidebar-menu-item">
                  <Link
                    to={item.path}
                    className={`sidebar-link ${isActive ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    <IconComponent className="sidebar-icon" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="sidebar-social">
          <h4 className="social-title">Follow Us</h4>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/OfabRwanda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/ofab-rwanda/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="sidebar-contact">
          <h4 className="contact-title">Contact</h4>
          <div className="contact-details">
            <p>+250 788 772 201</p>
            <p>ofabrwanda@gmail.com</p>
            <p>Rubirizi, Kigali</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;