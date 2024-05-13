import { useEffect, useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import closeup from '../../assets/closeup.jpg';
import empower from '../../assets/empower.jpg'
import pest from '../../assets/pest.jpg'

import increase from '../../assets/increase.jpg'
import market from '../../assets/market.jpg'
import './Activities.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Hub() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetBlogs = async () => {
    try {
      const response = await axios.get('https://ofab-bn.onrender.com/api/v1/posts/');
      const blogs = response.data;
      setBlogs(blogs);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetBlogs();
  }, []);

  return (
    <div>
      <div className='active-hub'>
        <div className='active-content'>
          <img className='active-img' src={closeup} alt="Description of image" />
          <h3>ACTIVITIES</h3>
        </div>
      </div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <BeatLoader color="#0C9444" size={40} />
      </div>
      ) : (
        <div className='active-info1'>
         <h4>CAPACITY BUILDING</h4>
         <p>OFAB Rwanda Chapter's capacity-building initiatives in agricultural biotechnology encompass a wide array of activities, including educational workshops, training programs, technology transfer, policy advocacy, research and development support, networking, communication materials development, and monitoring and evaluation. These efforts aim to enhance understanding, skills, and resources related to biotechnology among farmers, policymakers, and the public.</p>
         <div className="Active-videos">
          <div className="vidone " > 
          <img src={pest} alt="" />
          <img src={increase} alt="" />
          <img src={market} alt="" />
          </div>
         </div>
         <h5><Link to="/Capacity">Learn More <FaLongArrowAltRight /></Link></h5>
        
         <div className="secdiv">
          <h4>YOUTH AND WOMEN</h4>
          <div className="Active-videos">
            <div className="YWexplanation">
              <p>OFAB Rwanda Chapter focuses  tailored building efforts to promote  understanding of agricultural  biotechnology among youth, women.  For youth, this includes educational campaigns and entrepreneurship  training. For women, it involves biotechnology training, empowerment workshops, and  improved resource access.</p>
              <img src={empower} alt="" />
            </div>
            <h5><Link to="/Youth">Learn More <FaLongArrowAltRight /></Link></h5>
          </div>
         </div>

         
         <h4>MEDIA</h4>
         <p>OFAB Rwanda Chapter's capacity-building initiatives in agricultural biotechnology encompass a wide array of activities, including educational workshops, training programs, technology transfer, policy advocacy, research and development support, networking, communication materials development, and monitoring and evaluation. These efforts aim to enhance understanding, skills, and  <br /> resources related to biotechnology among farmers, policymakers, and the public.</p>
         <div className="Active-videos">
          <div className="vidone " >
          <img src={pest} alt="" />
          <img src={increase} alt="" />
          <img src={market} alt="" />
          </div>
         
         </div>
         <h5><Link to="/Media">Learn More <FaLongArrowAltRight /></Link></h5>
        </div>
        
        
      )}
    </div>
  );
}