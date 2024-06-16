import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Sidebar.css';

function Sidebar({className,setSidebarOpen }) {
  return (
   <div className={`sidebar ${className}`}>
      <button onClick={() => setSidebarOpen(false)}><MdClose /></button>
      <ul>
         <li><Link to="/">Home</Link></li>
          <li><Link to="/who-we-are">Who we are</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/information-hub">Information Hub</Link></li>
          <ul className='social-media'>
            <li><Link to="/"><FaFacebookF /></Link></li>
            <li><Link to="/"><FaTwitter /></Link></li>
            <li><Link to="/"><FaInstagram /></Link></li>
          </ul>
      </ul>
    </div>
  );
}

export default Sidebar;