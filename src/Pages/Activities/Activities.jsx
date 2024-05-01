import { useEffect, useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import closeup from '../../assets/closeup.jpg';
import BlogCard from '../../components/Card/BlogCard';
import './Activities.css';

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
        <div className='active-info'>
         <h4>CAPACITY BUILDING</h4>
         <p>OFAB Rwanda Chapter's capacity-building initiatives in agricultural biotechnology encompass a wide array of activities, including educational workshops, training programs, technology transfer, policy advocacy, research and development support, networking, communication materials development, and monitoring and evaluation. These efforts aim to enhance understanding, skills, and resources related to biotechnology among farmers, policymakers, and the public.</p>
         <div className="Active-videos">
          <div className="vid1"></div>
          <div className="vid2"></div>
          <div className="vid3"></div>
         </div>
        </div>
        
      )}
    </div>
  );
}