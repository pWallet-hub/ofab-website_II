
import './Home.css'
import SlideShow from '../../components/Slide/Slide'
import SuccessStoryCard from '../../components/SuccessStoryCard/SuccessStoryCard'
import BlogCard from '../../components/Card/BlogCard'

import happy from '../../assets/slide2.jpeg'
import woman from '../../assets/slide1.jpeg'
import info from '../../assets/slide3.jpeg'
import group from '../../assets/group.jpeg'

import suc1 from '../../assets/suc1.jpg'
import suc2 from '../../assets/suc2.jpg'
import suc3 from '../../assets/suc3.jpg'

import { FaFlask } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { MdOutlineMyLocation } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";



const text1 = (
  <div className='style' >
    <div className='story-head'>
      <h3 >OFAB RWANDA CHAPTER</h3>
    </div>
    <div className='story-content1'>
      <p>OFAB RWANDA CHAPTER is committed to promoting public understanding of Agricultural Biotechnology and its potential to increase farmer’s productivity,protect the environment,improve nutrition and enhance security.
        
      </p>
    </div>
  </div>
);

const text2 = (
  <div className='style' >
    <div className='story-head'>
      <h3 >OFAB RWANDA CHAPTER</h3>
    </div>
    <div className='story-content1'>
      <p>OFAB RWANDA CHAPTER help in establish and manage a range of platforms to enhance understanding of biotechnology in agriculture productivity in Rwanda.
        
      </p>
    </div>
  </div>
);

const text3 = (
  <div className='style' >
    <div className='story-head'>
      <h3 >OFAB RWANDA CHAPTER</h3>
    </div>
    <div className='story-content1'>
      <p>OFAB RWANDA CHAPTER inform policy decision making processes on matter of agricultural biotechnology thought provision of factual well researched and scientific information .
        
      </p>
    </div>
  </div>
);

const images = [
  { url: happy, text: text1 },
  { url: woman, text: text2 },
  { url: info, text: text3 },
];





const stories = [
  {
    image: suc1,
    title: 'Alex Nyandwi',
    description: `According to the National Library of Medicine, the global population is projected to reach 9 billion. Feeding this population sustainably presents a significant challenge. While
#EnhancedCrops or #GMOs offer promising solutions, they are just one part of a broader strategy. Meeting global food demands requires a holistic approach—leveraging conventional, organic, and biotech farming systems to achieve sustainable production, improved yields, and better nutritional outcomes.`,
link: 'https://x.com/AlexisNyandwi12/status/1922208195281330600', 
  },
  {
    image: suc2,
    title: 'Patience Mumararungu',
    description: `Through improved cassava varieties that are resistant to diseases and drought, Rwandan researcher Dr. @nduwath
 is helping farmers increase their yields and reduce losses`,
 link: 'https://x.com/M_Patience20/status/1927884597657833552', 
  },
  {
    image: suc3,
    title: 'Anne Marie UWIMPUHWE',
    description: `Ever wondered how we can make our crops more resilient? I recently visited RAB Rubona station, where they're tackling a critical issue: cassava diseases like Cassava Brown Streak Disease(kabore)`,
    link:'https://x.com/UwimpuhweAnne/status/1923857158547849688'
  },
];

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

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

    // Modern scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='home'>
      <SlideShow images={images} />
      <div className='card-container animate-on-scroll'>
        <div className='card animate-on-scroll' style={{ animationDelay: '0.1s' }}>
          <div className='log'><FaFlask /></div>
          <h1>Biotech Research Outreach</h1>
          <p>We play an important role in raising awareness and understanding of different Agricultural Biotechnology solutions.</p>
        </div>

        <div className='card1 animate-on-scroll' style={{ animationDelay: '0.3s' }}>
          <div className='log1'><FaVideo /></div>
          <h1>Media Engagement</h1>
          <p>We work with the media to promote accurate, fact-based, and scientific reporting. The forum also demystifies misinformation about Agriculture Biotechnology.</p>
        </div>
        <div className='card animate-on-scroll' style={{ animationDelay: '0.5s' }}>
          <div className='log'><HiOutlineSpeakerphone /></div>
          <h1>Public Engagement & Awareness</h1>
          <p>We engage stakeholders, including Policymakers, Farmers, Civil Society Organizations, and others, to raise awareness and appreciation of Agriculture Biotechnology's benefits to Rwanda's food system.</p>
        </div>
      </div>
      <div className='about-goals animate-on-scroll'>
        <h1 className='section-title'>ABOUT US</h1>

        <div className='about'>

          <div className='about-text animate-on-scroll' style={{ animationDelay: '0.2s' }}>
            <p>OFAB is an informative platform that brings together  stakeholders in the field of Biotechnology  and the public to enable interactions, sharing, and exchange of knowledge, experiences, contacts, and exploring new avenues of bringing the  benefits of biotechnology to the Agricultural sector.</p>
          </div>
           <div className="image-container animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <img className='about-img' src={group} alt="Description of image" />

          </div>
        </div >
      </div>
      <div className='about1 animate-on-scroll'>
        <h1 className='section-title'>OUR PROMISE</h1>
        <div className='about'>
          <iframe
            className='about-video animate-on-scroll'
            style={{ animationDelay: '0.2s' }}
            src="https://www.youtube.com/embed/BBWriPCPzOA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          <div className='about-text animate-on-scroll' style={{ animationDelay: '0.4s' }}>
            <p className="justified-text">We believe that use of appropriate technology can improve agricultural productivity in Africa. We support farmers  in Africa and especially smallholder farmers in their  quest  for access to the best agricultural technology.  Better access to agricultural technologies will boost  the productivity of smallholder farmers</p>
          </div>
        </div>
      </div>
      <div className='success-story animate-on-scroll'>
        <h1 className='success-title'>SUCCESS STORIES</h1>
        <div className='story-container'>
          {stories.map((story, index) => (
            <SuccessStoryCard
              key={index}
              story={story}
              className={`${index % 2 === 0 ? 'white-background' : 'green-background'} animate-on-scroll`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
      <div className='success-story1 animate-on-scroll'>
        <h1 className='section-title'>LATEST NEWS & UPDATES</h1>
        <div className='story-container12'>
        {loading ? (
        <div className='loading-container'>
        <BeatLoader color="#239E36" size={40} />
      </div>
      ) : (
        <div className='active-info3'>
          {blogs && blogs
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 4)
            .map((blog, index) => (
              <BlogCard
                key={index}
                image={blog?.mainPhoto}
                date={blog?.publicationDate}
                title={blog?.title}
                excerpt={blog?.articleSummary}
                link={`/blog-post/${blog?._id}`}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
        </div>
      )}
        </div>
      </div>
    
      <div className='c animate-on-scroll'>
        <h1 className='section-title'>Contact Us</h1>
        <div className='contact1'>
        <div className='contact animate-on-scroll' style={{ animationDelay: '0.2s' }}>
          <h4 className='contact-title'>Send Us A Message</h4>
          <form>
            <label>
              <span className='form-name'>Name</span>
              <input type="text" name="name"/>
            </label>
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <label>
              Subject
              <input type="text" name="subject"/>
            </label>
            <label>
              Message
              <textarea name="message"></textarea>
            </label>
            <input type="submit" value="Send Message" id='button' />
          </form>
        </div>
        <div className="vertical-line"></div>

        <div className='address animate-on-scroll' style={{ animationDelay: '0.4s' }}>
          <div className='location'>
            <div className='icon'>
              <a href="https://goo.gl/maps/Kigali">
              <MdOutlineMyLocation />

              </a>
            </div>
            <div className='item'>
              <h2>Office Location</h2>
              <p>Rubirizi RAB Station, <br />
                Kigali-Rwanda</p>
            </div>
          </div>
          <div className='phone'>
            <div className='icon'>
            <FaPhone />
            </div>
            <div className='item'>
              <h2>Phone number</h2>
              <p>(+250) 788 772 201 <br />
                (+250) 785 855 080</p>
            </div>

          </div>
          <div className='time'>
            <div className='icon'>
            <IoTime />
            </div>
            <div className='item'>
              <h2>Opening time</h2>
              <p>Mon - Fri: 9:00 AM - 17:00 PM</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
