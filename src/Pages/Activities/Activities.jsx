import closeup from '../../assets/activity.jpg';
import award from '../../assets/_72A2638.jpg';
import award2 from '../../assets/_72A2747.jpg';
import award3 from '../../assets/_72A2607.jpg';
import cap1 from '../../assets/cap1.jpg'
import cap2 from '../../assets/cap2.jpg'
import cap3 from '../../assets/cap3.jpg'
import bul1 from '../../assets/bul1.jpg'
import bul2 from '../../assets/bul2.jpg'
import bul3 from '../../assets/bul3.jpg'
import './Activities.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Hub() {



  return (
    <div>
      <div className='active-hub'>
        <div className='active-content'>
          {/* <img className='active-img' src={closeup} alt="Description of image" /> */}
          <h3>ACTIVITIES</h3>
        </div>
      </div>

      <div className='awards-content2'>
        <h1>OFAB Media Awards (OMAs) </h1>
        <p className='para1'>The OFAB Media Awards (OMAs) are dedicated to recognizing exemplary journalism that embodies best practices in credible science reporting. This is crucial for enhancing public understanding and acceptance of the sciences, technologies, and innovations needed to transform African agriculture, ensuring food security, sustainable development, and poverty eradication.
        </p>
        <div className="Active-videos">
          <div className="vidone " >
            <img src={award} alt="award" />
            <img src={award2} alt="award2" />
            <img src={award3} alt="" />
          </div>
        </div>
        <p >Every year, the OMAs highlight the vital role played by the media in fostering constructive dialogue on modern biotechnology through responsible, professional, ethical, and effective reporting.<br />
          The 1st and 2nd editions of OMAs got success and two Journalists were also awarded on the Continental level. The Rwanda Chapter Forum is excited to announce the 3rd Edition of OMAs to start accepting entries from Rwandan-based journalists who reported on the use, benefits, and other positive aspects of agricultural biotechnology.
        </p>
      <h5><Link to="/Omas">Learn More and Apply <FaLongArrowAltRight /></Link></h5>
      </div>
      

      <div className='awards-content1'>
        <h1>Capacity building </h1>
        <p className='par'>The OFAB Rwanda Chapter is dedicated to enhancing understanding and promoting the benefits of modern agricultural biotechnology through comprehensive capacity-building activities. Our initiatives target a diverse array of groups, with a special focus on media personalities such as journalists, chief editors, and agricultural social media influencers.
        </p>
        <div className="Active-videos">
          <div className="vidone " >
            <img src={cap1} alt="award" />
            <img src={cap2} alt="award2" />
            <img src={cap3} alt="" />
          </div>
        </div>
        <p className='para'>Our capacity-building programs are designed to be interactive and engaging, utilizing presentations, group discussions, expert lectures, and round table discussions. These sessions aim to equip participants with the knowledge and skills necessary for credible science reporting and effective communication of agricultural biotechnology.
        </p>
        <div className="Active-videos">
          <div className="vidone " >
            <img src={bul1} alt="award" />
            <img src={bul3} alt="award2" />
            <img src={bul2} alt="" />
          </div>
        </div>
        <p className='para'>In collaboration with policymakers, civil society personnel, farmers, and youth in agriculture networks, our workshops foster a better understanding of the uses and benefits of modern agricultural biotechnology in Rwanda. By working together, we aim to drive informed dialogue and support the transformation of African agriculture for food security, sustainable development, and poverty eradication.</p>
        <h5><Link to="/Capacity">Learn More <FaLongArrowAltRight /></Link></h5>
      </div>

    </div>
  );
}