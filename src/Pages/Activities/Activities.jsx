import { useEffect, useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import closeup from '../../assets/activity.jpg';
import empower from '../../assets/empower.jpg'
import pest from '../../assets/pest.jpg'
import award from '../../assets/_72A2638.jpg';
import award2 from '../../assets/_72A2747.jpg';
import award3 from '../../assets/_72A2607.jpg';
import cap1 from '../../assets/cap1.jpg'
import cap2 from '../../assets/cap2.jpg'
import cap3 from '../../assets/cap3.jpg'
import bul1 from '../../assets/bul1.jpg'
import bul2 from '../../assets/bul2.jpg'
import bul3 from '../../assets/bul3.jpg'

import increase from '../../assets/increase.jpg'
import market from '../../assets/market.jpg'
import './Activities.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Hub() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

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
      {/* {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <BeatLoader color="#0C9444" size={40} />
        </div>
      ) : (
        <div className='active-info1'>
          <h4>CAPACITY BUILDING</h4>
          <p></p>
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
              <div><h5><Link to="/Youth">Learn More <FaLongArrowAltRight /></Link></h5></div>

            </div>

            <div className="media-items">
              <h4>MEDIA</h4>
              <div className='media-container'>
                <p>OFAB Rwanda Chapter's capacity-building initiatives in agricultural biotechnology encompass a wide array of activities, including educational workshops, training programs, technology transfer, policy advocacy, research and development support, networking, communication materials development, and monitoring and evaluation. These efforts aim to enhance understanding, skills, and  <br /> resources related to biotechnology among farmers, policymakers, and the public.</p>
                <div className="Active-videos">
                  <div className="vidone " >
                    <img src={pest} alt="" />
                    <img src={increase} alt="" />
                    <img src={market} alt="" />
                  </div>
                </div>
              </div>
              <h5><Link to="/Media">Learn More <FaLongArrowAltRight /></Link></h5>
            </div>
           <div className='omas-container'>
            <h2>OFAB MEDIA AWARDS</h2>
            <div  className='omas-content'>
            <div className='omas-items'>
                <img src={award} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet deleniti amet facilis magnam incidunt? Cumque dolorem debitis hic blanditiis vero inventore eaque illo delectus recusandae nihil, dolor aspernatur atque.</p>
              </div>
              <div className='omas-items'>
                <img src={award2} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit consequuntur mollitia non? Doloribus et perferendis, pariatur aliquid quo ea. Eum, ipsum! Explicabo ipsa et tempore velit nobis! Nam, ipsa quam!</p>
              </div>
              <div className='omas-items'>
                <img src={award3} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, cumque recusandae eos fugiat numquam minus sit suscipit laboriosam autem et voluptatem expedita esse facere, itaque delectus eius, asperiores totam sapiente?</p>
              </div>
              </div>
              <h5><Link to="/Omas">Learn More <FaLongArrowAltRight /></Link></h5>
            </div>
           </div>
          </div>
        

      )} */}
      <div className='awards-content1'>
        <h1>OFAB Media Awards (OMAs) </h1>
          <p>The OFAB Media Awards (OMAs) are dedicated to recognizing exemplary journalism that embodies best practices in credible science reporting. This is crucial for enhancing public understanding and acceptance of the sciences, technologies, and innovations needed to transform African agriculture, ensuring food security, sustainable development, and poverty eradication.
          </p>
          <div className="Active-videos">
            <div className="vidone " >
              <img src={award} alt="award" />
              <img src={award2} alt="award2" />
              <img src={award3} alt="" />
            </div>
            </div>
            <p>Every year, the OMAs highlight the vital role played by the media in fostering constructive dialogue on modern biotechnology through responsible, professional, ethical, and effective reporting.<br/>
            The 1st and 2nd editions of OMAs got success and two Journalists were also awarded on the Continental level. The Rwanda Chapter Forum is excited to announce the 3rd Edition of OMAs to start accepting entries from Rwandan-based journalists who reported on the use, benefits, and other positive aspects of agricultural biotechnology.
            </p>

            <h5><Link to="/Omas">Learn More and Apply <FaLongArrowAltRight /></Link></h5>
       </div>

             <div className='awards-content1'>
        <h1>Capacity building </h1>
          <p>The OFAB Rwanda Chapter is dedicated to enhancing understanding and promoting the benefits of modern agricultural biotechnology through comprehensive capacity-building activities. Our initiatives target a diverse array of groups, with a special focus on media personalities such as journalists, chief editors, and agricultural social media influencers.
          </p>
          <div className="Active-videos">
            <div className="vidone " >
              <img src={cap1} alt="award" />
              <img src={cap2} alt="award2" />
              <img src={cap3} alt="" />
            </div>
            </div>
            <p>Our capacity-building programs are designed to be interactive and engaging, utilizing presentations, group discussions, expert lectures, and round table discussions. These sessions aim to equip participants with the knowledge and skills necessary for credible science reporting and effective communication of agricultural biotechnology.
            </p>
            <div className="Active-videos">
            <div className="vidone " >
              <img src={bul1} alt="award" />
              <img src={bul3} alt="award2" />
              <img src={bul2} alt="" />
            </div>
            </div>
            <p>In collaboration with policymakers, civil society personnel, farmers, and youth in agriculture networks, our workshops foster a better understanding of the uses and benefits of modern agricultural biotechnology in Rwanda. By working together, we aim to drive informed dialogue and support the transformation of African agriculture for food security, sustainable development, and poverty eradication.</p>
            <h5><Link to="/Capacity">Learn More <FaLongArrowAltRight /></Link></h5>
       </div>
      
    </div>
  );
}