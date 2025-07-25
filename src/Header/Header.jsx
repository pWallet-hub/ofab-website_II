
// Header.jsx
import {useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import { FaMobileScreenButton } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
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
        <div className='Header-menu'>
        <div className='Header-cont'>
           <FaMobileScreenButton className='Header-icon' />
           <div className='para'>
            <p>+250 788 772 201</p>
           </div>
        </div >
        <div className='Header-cont'>
           <HiOutlineMailOpen className='Header-icon' />
           <div className='para'>
            <p>ofabrwanda@gmail.com</p>
           </div>
        </div>
        <div className='Header-cont'>
           <FaLocationDot className='Header-icon' />
           <div className='para'>
            <p>Rubirizi, Kigali.</p>
           </div>
           </div>
        </div>

      </div>
      <div className='Header-logo'>
      <nav>
        <div className='menu' onClick={handleMenuClick}>
        <MdMenu />
      {SidebarOpener && <Sidebar setSidebarOpen={setSidebarOpener} className='open' />}
           
      </div> 
        <ul className='nav-list'>
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/who-we-are">Who we are</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/News">News</Link></li>
          <li><Link to="/media">Gallery</Link></li>
        </ul>
        
      </nav>
      
     </div> 
    </header>
  );
}

export default Header;
