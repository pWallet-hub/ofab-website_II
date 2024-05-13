
import './Home.css'
import SlideShow from '../../components/Slide/Slide'
import Goal from '../../components/Goal/Goal'
import SuccessStoryCard from '../../components/SuccessStoryCard/SuccessStoryCard'
import BlogCard from '../../components/Card/BlogCard'
import happy from '../../assets/happy.jpg'
import woman from '../../assets/fontView.jpg'
import info from '../../assets/info.jpg'
import group from '../../assets/group.jpg'
import buy from '../../assets/buy.jpg'
import empower from '../../assets/empower.jpg'
import increase from '../../assets/increase.jpg'
import market from '../../assets/market.jpg'
import pest from '../../assets/pest.jpg'
import aboutz from '../../assets/about-z.jpg'
import protection from '../../assets/protection.jpg'
import nutrition from '../../assets/nutritio.jpg'
import { FaFlask } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { MdOutlineMyLocation } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";


const text = (
  <div className='style' >
    <div className='story-head'>
      <h3 >OFAB RWANDA CHAPTER</h3>
    </div>
    <div className='story-content1'>
      <p>OFAB RWANDA CHAPTER is committed to promoting public under
        standing of Agricultural Biotechnology Science and its potential to  
increase farmer’s productivity,protect the environment,improve nut
rition and enhance security.

      </p>
    </div>
  </div>
);

const images = [
  { url: happy, text: text },
  { url: woman, text: text },
  { url: info, text: text },
];

const goalText = [
  "Better Nutrition",
  "Reduction of Pesticide",
  "Climate change Adaption",
  "Food security ",
  "Environmental protection",
  "Increase farm productivity & income",
  "Women and Youth Empowerment "
]

const goals = [
  { url: buy, text: <Goal goal={goalText[0]} /> },
  { url: empower, text: <Goal goal={goalText[6]} /> },
  { url: increase, text: <Goal goal={goalText[2]} /> },
  { url: market, text: <Goal goal={goalText[3]} /> },
  { url: pest, text: <Goal goal={goalText[2]} /> },
  { url: protection, text: <Goal goal={goalText[4]} /> },
  { url: nutrition, text: <Goal goal={goalText[0]} /> },
];


const stories = [
  {
    image: happy,
    title: 'Jean Claude NIYOMUGABO',
    description: '“The objective of @OfabRwanda is to enhance understanding and acceptance of agriculture-biotechnology and contribute to building an enabling environment for decision making” @nduwath , Roots and Tubers Program coordinator at @RwandaAgriBoard and @OfabRwanda chapter coordinator.',
  },
  {
    image: woman,
    title: 'Uwera DESANGE',
    description: `Agriculture land will not increase,

but people will. I'm excited to be a part of the National Youth Ambassadorship program, which aims to provide Rwandan youth with the knowledge and skills they need to embrace and integrate modern biotechnology in agriculture.

@OfabRwanda`,
  },
  {
    image: info,
    title: 'Mireille KAZUNGU',
    description: `Exciting news! In partnership with

@RwandaAgriBoard
, and

@aatfafrica
, youth from different youth-led organizations such as

@YEAN_Agro
and

@AGRIRESEARCHLtd
are being empowered in the transformative world of biotechnology with training and workshop.`,
  },
];

export default function Home() {

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
    <div className='home'>
      <SlideShow images={images} />
      <div className='card-container'>
        <div className='card'>
          <div className='log'><FaFlask /></div>
          <h1>Biotech Research Outreach</h1>
          <p>We play an important role in raising awareness and understanding of different Agricultural Biotechnology solutions.</p>
        </div>
        <div className='card1'>
          <div className='log1'><FaVideo /></div>
          <h1>Media Engagement</h1>
          <p>We work with the media to promote accurate, fact-based, and scientific reporting. The forum also demystifies misinformation about Agriculture Biotechnology.</p>
        </div>
        <div className='card'>
          <div className='log'><HiOutlineSpeakerphone /></div>
          <h1>Public Engagement & Awareness</h1>
          <p>We engage stakeholders, including Policymakers, Farmers, Civil Society Organizations, and others, to raise awareness and appreciation of Agriculture Biotechnology's benefits to Rwanda's food system.</p>
        </div>
      </div>
      <div className='about-goals'>
        <h1 className='section-title'>ABOUT US</h1>

        <div className='about'>

          <div className='about-text'>
            <p>OFAB is an informative platform that brings together  stakeholders in the field of Biotechnology  and the public to enable interactions, sharing, and exchange of knowledge, experiences, contacts, and exploring new avenues of bringing the  benefits of biotechnology to the Agricultural sector.</p>
          </div>
           <div className="image-container">
            <img className='about-img' src={group} alt="Description of image" />
            
          </div>
        </div >
      </div>
      <div className='about1'>
        <h1 className='section-title'>OUR PROMISE</h1>
        <div className='about'>
          <iframe
            className='about-video'
            src="https://www.youtube.com/embed/BBWriPCPzOA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          <div className='about-text'>

            <p>We believe that use of appropriate technology can improve <br /> agricultural productivity in Africa. We support farmers <br /> in Africa and especially smallholder farmers in their <br /> quest  for access to the best agricultural technology. <br /> Better access to agricultural technologies will boost <br /> the productivity of smallholder farmers</p>
          </div>
        </div>
      </div>
      <div className='success-story'>
        <h1 className='success-title'>SUCCESS STORIES</h1>
        <div className='story-container'>
          {stories.map((story, index) => (
            <SuccessStoryCard key={index} story={story} className={index % 2 === 0 ? 'white-background' : 'green-background'} />
          ))}
        </div>
      </div>
      <div className='success-story1'>
        <h1 className='section-title'>LATEST NEWS & UPDATES</h1>
        <div className='story-container12'>
        {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <BeatLoader color="#0C9444" size={40} />
      </div>
      ) : (
        <div className='active-info3'>
          {blogs && blogs
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 3)
            .map((blog, index) => (
              <BlogCard
                key={index}
                image={blog?.image}
                date={blog?.createdAt}
                title={blog?.title}
                excerpt={blog?.content}
                link={`/blog-post/${blog?._id}`}
              />
            ))}
        </div>
      )}
        </div>
      </div>
      <div className='c'>
        <h1 className='section-title'>Contact Us</h1>
        <div className='contact1'>
        <div className='contact'>
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

        <div className='address'>
          <div className='location'>
            <div className='icon'>
              <a href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LOCATION">
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
