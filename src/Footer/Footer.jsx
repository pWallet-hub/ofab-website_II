import { Link } from 'react-router-dom';
import './Footer.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import image from "../assets/ofab.jpg";
import { FaArrowRight } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='footer'>

      <div className="left-section">
        <div className="logo">
          <img src={image} alt="Logo" />
        </div>
        <p>For a food-secure Rwanda where <br /> agricultural biotechnology  is making <br /> significant contributions.</p>
        <div className="social-media-icons">

          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="middle-section">
        <ul>
          <li><FaArrowRight />
            <Link to="/" className='pl'>Home</Link></li>
          <li><FaArrowRight />
            <Link to="/who-we-are" className='pl'>Who We Are</Link></li>
          <li><FaArrowRight />
            <Link to="/activities" className='pl'>Activities</Link></li>
          <li>< FaArrowRight />
            <Link to="/information-hub" className='pl'>Gallery</Link></li>
        </ul>
      </div>
      <div className="right-section">
        <div className="contact2">
          <div className='fone'>
            <i className="fas fa-phone"></i>
            <div className='phone1'>
              <h1>call to us:</h1>
              <p>+250 788 772 201</p>
            </div>
          </div>
          <div className='email1'>
            <i className="fas fa-envelope"></i>
            <div className='email'>
              <h1>email us:</h1>
              <p>ofabrwanda@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;