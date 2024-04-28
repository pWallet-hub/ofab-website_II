
// Header.jsx
import {useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import { FaMobileScreenButton } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import image from "../assets/ofab.jpg";

import './Header.css';
import Home from '../Pages/Home/Home';

function Header() {

  const [SidebarOpener, setSidebarOpener] = useState(false);
  const handleMenuClick = () => {
    setSidebarOpener(!SidebarOpener);
  }

  return (
    <header className='header'>
      <div className='Header-body'>
       
        <div className='Header-log'><Link to="/"> <img src={image} alt="" /></Link></div>
        <div className='Header-cont'>
           <FaMobileScreenButton className='Header-icon' />
           <div>
            <h4>Give Us A Call</h4>
            <p>+250 785 855 080</p>
           </div>
        </div>
        <div className='Header-cont'>
           <HiOutlineMailOpen className='Header-icon' />
           <div>
            <h4>Send Us A Message</h4>
            <p>ofabrwanda@ofabrwanda.info</p>
           </div>
        </div>
        <div className='Header-cont'>
           <FaLocationDot className='Header-icon' />
           <div>
            <h4>RAB Headquarters</h4>
            <p>Rubirizi, Kigali.</p>
           </div>
        </div>

      </div>
      <div className='Header-logo'>
      <nav>
        <div className='menu' onClick={handleMenuClick}>
        <MdMenu />
      {SidebarOpener && <Sidebar setSidebarOpen={setSidebarOpener} className='open' />}
            {/* <Link to="/"><FaFacebookF /></Link>
            <Link to="/"><FaTwitter /></Link>
            <Link to="/"><FaInstagram /></Link> */}
          
      </div> 
        <ul className='nav-list'>
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/who-we-are">Who we are</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/outreachEvents">Outreach & Events</Link></li>
          <li><Link to="/information-hub">Information Hub</Link></li>
          <ul className='social-media'>
            <li><Link to="/"><FaFacebookF /></Link></li>
            <li><Link to="/"><FaTwitter /></Link></li>
            <li><Link to="/"><FaInstagram /></Link></li>
          </ul>
        </ul>
        
      </nav>
      
     </div> 
    </header>
  );
}

export default Header;
