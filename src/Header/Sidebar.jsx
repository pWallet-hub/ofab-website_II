import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import './Sidebar.css';

function Sidebar({className,setSidebarOpen }) {
  return (
   <div className={`sidebar ${className}`}>
      <button onClick={() => setSidebarOpen(false)}><MdClose /></button>
      <ul>
         <li><Link to="/">Home</Link></li>
          <li><Link to="/who-we-are">Who we are</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/information-hub">Gallery</Link></li>
          <ul className='social-media'>
            <li><Link to="/"><FaFacebookF /></Link></li>
            <li><a href="https://twitter.com/OfabRwanda" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.linkedin.com/company/ofab-rwanda/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>

          </ul>
      </ul>
    </div>
  );
}

export default Sidebar;