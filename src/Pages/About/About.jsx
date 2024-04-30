
import happy from '../../assets/happy.jpg'
import woman from '../../assets/fontView.jpg'
import TeamCard from '../../components/TeamCard/TeamCard'
import Partner from '../../components/Partners/Partners'
import Allance from '../../assets/alliance.jpg'
import rab from '../../assets/Rab.jpg'
import aatf from '../../assets/AATF.jpg';
import rmc from '../../assets/rmc.jpg';
import virca from '../../assets/virca.jpg';
import { FaArrowCircleRight } from "react-icons/fa";
import './About.css'

export default function Hub() {
  const boardMembers = [
    {
      name: 'John Doe',
      role: 'Board Member',
      bio: 'John is a board member with extensive experience in the industry.',
      image: woman,
    },
    {
      name: 'Jane Smith',
      role: 'Board Member',
      bio: 'Jane is a board member with expertise in strategic planning.',
      image: woman,
    },
  ];

  const assistants = [
    {
      name: 'Michael Johnson',
      role: 'Assistant Director',
      bio: 'Michael is an assistant director with a focus on operations.',
      image: woman,
    },
    {
      name: 'Emily Davis',
      role: 'Assistant Director',
      bio: 'Emily is an assistant director responsible for finance and accounting.',
      image: woman,
    },
    {
      name: 'David Wilson',
      role: 'Assistant Director',
      bio: 'David is an assistant director overseeing human resources.',
      image: woman,
    },
  ];

  const workers = [
    {
      name: 'Sarah Thompson',
      role: 'Project Manager',
      bio: 'Sarah is a skilled project manager responsible for delivering successful projects.',
      image: woman,
    },
    {
      name: 'Robert Anderson',
      role: 'Software Engineer',
      bio: 'Robert is a software engineer with expertise in developing robust applications.',
      image: woman,
    },
    {
      name: 'Jessica Taylor',
      role: 'Data Analyst',
      bio: 'Jessica is a data analyst skilled in extracting insights from complex data sets.',
      image: woman,
    },
    {
      name: 'Christopher Brown',
      role: 'Marketing Specialist',
      bio: 'Christopher is a marketing specialist responsible for promoting our brand and products.',
      image: woman,
    },
  ];

  return (
    <div>
      <div className='About'>
      <img className='About-img' src={happy} alt="Description of image" />
      <h1 className='story-head'>Transformed Agriculture</h1>
      <p className='story-text'>
        OFAB is an informative platform that brings together stakeholders in the field of Biotechnology and the public to enable interactions, sharing, and exchange of knowledge, experiences, contacts, and exploring new avenues of bringing the benefits of biotechnology to the Agricultural sector.
        <p className='story-text2'>
          On the 27th of October, 2021, African Agricultural Technology Foundation (AATF) in partnership with the Ministry of Agriculture and Animal Resources and Rwanda Agriculture and Animal Resources Development Board (RAB), launched OFAB-Rwanda Chapter with a mission to enhance knowledge sharing and awareness on Agricultural Biotechnology that would raise understanding and appreciation of the technology. OFAB-Rwanda Chapter is hosted by RAB and implements its activities through the partnership of  Rwanda Media Commission and  Alliance for Science Rwanda in the efforts to achieve its vision and mission. OFAB Rwanda informs and sensitizes the role of biotechnology in transforming agriculture from subsistence into modern, market, and profitable farming among others.</p>
      </p>
      <div className="visionmission" >

      <div className='mission'>
        <h1>MISSION</h1>
        <FaArrowCircleRight />
        <p>To enhance knowledge sharing and awareness on agricultural biotechnology that would raise understanding and appreciation of the technology and contribute to building an enabling environment for informed and timely decision-making.</p>
      </div>
      <div className='mission'>
        <h1>VISION</h1>
        <FaArrowCircleRight />
        <p>To be the leading organization in the field of agricultural biotechnology in Rwanda, to promote the development of agricultural biotechnology and to foster a culture of innovation and entrepreneurship amongst the agricultural
         </p> 
       </div>  
      </div>
    </div>
      <h2 className="team-section-title">Board of Directors</h2>
      <div className="board">
        <div className="team-row">
          {boardMembers.slice(0, 2).map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
        <div className="team-row">
          {boardMembers.slice(2).map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>

      {/* Assistant Directors */}
      <h2 className="team-section-title">Assistant Directors</h2>
      <div className="assistants">
        <div className="team-row">
          {assistants.slice(0, 3).map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>

      {/* Workers */}
      <h2 className="team-section-title">Workers</h2>
      <div className="workers">
        <div className="team-row">
          {workers.slice(0, 1).map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
        <div className="team-row">
          {workers.slice(1).map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
      <h1 className='team-section-title'>PARTNERS</h1>
   <div className='team'>
   <Partner 
   logo={virca} 
   link="https://example.com"/>
   <Partner 
   logo={rmc} 
   link="http://rmc.org.rw/"/>
   <Partner 
   logo={aatf} 
   link="https://www.aatf-africa.org/"/>
   <Partner 
   logo={rab} 
   link="https://www.rab.gov.rw/"/>
   <Partner 
   logo={Allance} 
   link="https://allianceforscience.org/"/>
   </div>
    </div>
  )
}
