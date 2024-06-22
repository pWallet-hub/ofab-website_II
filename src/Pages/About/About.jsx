
import happy from '../../assets/newAsset.jpeg'
import woman from '../../assets/fontView.jpg'

import Ndabamye from '../../assets/NDABAMYE.jpg'
import jean from '../../assets/jean1.jpeg'
import esperance from '../../assets/esperance.jpeg'
import pazzo from '../../assets/pazzo.jpg'
import niragire from '../../assets/niragire.jpeg'
import piere from '../../assets/jpierre.jpg'
import pacc from '../../assets/pacc.jpg'
import mboni from '../../assets/mboni.jpeg'
import claude from '../../assets/claude.jpeg'
import athanas from '../../assets/Athanase.jpeg'
import habiman from '../../assets/habiman.jpeg'
import nopic from '../../assets/nopic.jpg'
import robert from '../../assets/Robert.jpg'


import TeamCard from '../../components/TeamCard/TeamCard'
import Partner from '../../components/Partners/Partners'
import Allance from '../../assets/alliance.jpg'
import rab from '../../assets/Rab.jpg'
import aatf from '../../assets/AATF.jpg';
import rmc from '../../assets/rmc.jpg';
import virca from '../../assets/virca.jpg';
import { FaArrowCircleRight } from "react-icons/fa";
import './About.css';

export default function Hub() {

  const boardMembers = [
    {
      name: 'Dr Telesphore Ndabamenye',
      Institution: 'Rwanda Agriculture and Animal Resources Development Board (RAB)',
      role: 'Director General of Rwanda Agriculture and Animal Resources Development Board (RAB)/chairman of the Board',
      bio: 'Dr Telesphore Ndabamenye is appointed as Director General of Rwanda Agriculture and Animal Resources Development Board (RAB) since 2nd March 2023. Before this position, he served as Africa Regional Platform manager for Africa’s Food Systems Transformation for Food Action Alliance under the World Economic Forum, and Senior Advisor for Food Systems Transformation Agenda towards 2030 SDGs Agenda.',
      image: Ndabamye,
    },
    {
      name: 'Mr. Robert Rutayisire',
      Institution: 'Rwanda Biomedical Center (RBC)',
      role: 'Division Manager',
      bio: 'Robert Rutayisire is the Division Manager at the Rwanda Biomedical Center, overseeing the National Reference Laboratory. He ensures the lab s excellence in diagnostics and testing services. With a wealth of experience in biomedical science, he has significantly advanced public health initiatives.Robert is committed to integrating innovative technologies into laboratory practices. He plays a vital role in maintaining the highest standards of accuracy and efficiency in medical diagnostics.',
      image: robert,
    },
    {
      name: 'Dr. Patrick Karangwa ',
      Institution: 'Ministry of Agriculture and Animal Resources (MINAGRI)',
      role: 'DG- Agriculture Modernization/Member',
      bio: 'Dr. Patrick Karangwa is the Director General of Agriculture Modernization for the Ministry of Agriculture and Animal Resources of Rwanda since January 2023 He has got significant experience serving in senior leadership positions, including having been the Director General of Rwanda Agriculture and Animal Resources Development Board (RAB) for five years (2018-2023) and the Head of Research Department in RAB (2015-2018). He served on Boards of various organisations, including the Association for Strengthening Agricultural Research in East and Central Africa (ASARECA).He has also worked for the Food and Agriculture Organization (FAO) of the United Nations as a consultant and served as the Country Representative of the Agricultural Biotechnology Network in Africa (ABNETA) - an FAO’s initiative. Dr. Karangwa has got over 15 years of experience as an agricultural research scientist, during which he published scientific works in refereed journals, books, and international conferences, and written several fund winning projects for Rwanda’s Agriculture Transformation. These include the project “Development of Market Responsive Plant Varieties and Seed Systems” which made major contributions towards the ending of seed importation under Government subsidy. Dr. Karangwa has also lectured in higher learning institutions at University of Rwanda (UR) and the Institut d’Enseignment Superieur (INES).A PhD holder in Plant Pathology from the University of Stellenbosch, South Africa, he also holds Master’s and Bachelor’s degrees in Biotechnology from the University of Wageningen, the Netherlands and the University of Rwanda, respectively, and pursues the Global Master of Business Administration (Entrepreneurship and Innovation Specialism) of the University of London.',
      image: pazzo,
    },
    {
      name: 'Prof. Muhinyuza Jean Baptiste',
      Institution: 'University of Rwanda (UR)',
      role: 'Associate Professor',
      bio: 'Jean-Baptiste Muhinyuza is an Associate Professor at the University of Rwanda, specializing in plant breeding and genetics. He has extensive experience in research and teaching, focusing on crops like Irish potato.',
      image: jean,
    },
    {
      name: 'MR. Emmanuel Mugisha Muvunyi',
      Institution: 'Rwanda Broadcasters and Social Media Awards',
      role: 'Mass Media Mobilization Outreach Advisor',
      bio: 'Emmanuel Mugisha Muvunyi is the Managing Director at Rwanda Broadcasters and Social Media Awards and serves as a Mass Media Mobilization Outreach Advisor. He specializes in media outreach and recognition within the broadcasting and social media sectors in Rwanda.',
      image: nopic,
    },
    {
      name: 'Dr. Esperance Munganyinka ',
      role: 'Director Head of National Research Innovation Fund Department.',
      bio: 'Dr. Esperance Munganyinka heads the Department of National Research and Innovation Fund at Rwanda  National Council for Science and Technology. With over 12 years of research experience in biological and agricultural sciences, she has published extensively and developed strong project management and leadership skills.',
      image: esperance,
    },
     {
      name: 'Mr. Ildephonse Niragire',
      Institution: 'Rwanda Inspectorate, Competition and Consumer Protection Authority (RICA)',
      role: 'Ag. Director Farm Product and Processes Inspection Unit',
      bio: "Ildephonse NIRAGIRE, a Rwandan agricultural expert with an MSc from Ghent University, has over 13 years of experience in various roles from field officer to managerial positions. His career spans project management, international representation, and scientific writing, with involvement in EAC and COMESA working groups and participation in global events like the 2022 OECD seed schemes meeting.",
      image: niragire,
    },
     {
      name: 'Mr. Celestin Kabera',
      Institution: 'Rwanda Agriculture and Animal Resources Development Board (RAB)',
      role: 'CB Specialist',
      bio: 'Celestin Kabera is associated with business incubation at the Rwanda Development Board. His role likely involves supporting and nurturing new businesses in Rwanda, contributing to the country economic growth and entrepreneurship ecosystem.',
      image: nopic,
    },
     {
      name: 'Mr. Amadin Rutayisire',
      Institution: 'Rwanda Environment Management Authority(REMA)',
      role: 'Biosafety Specialist',
      bio: 'Amandin Rutayisire is a Rwandan scientist and environmentalist, likely focusing on environmental conservation and sustainability issues. His work probably combines scientific research with efforts to address environmental challenges in Rwanda or the broader region.',
      image: nopic,
    },
     {
      name: 'Munyampundu Jean Pierre',
      Institution: 'Rwanda Foods and Drugs Authority(RFDA)',
      role: 'Division Manager',
      bio: "Dr. Munyampundu is a highly accomplished scientist with a PhD in Molecular Plant Pathology and extensive experience in teaching and research at the University of Rwanda. His expertise spans molecular biology, biotechnology, and infectious diseases, with international research experience in China, UK, and Belgium, and a current focus on host-pathogen interactions..",
      image: piere,
    },
     {
      name: 'Eric Mbonigaba',
      Institution: 'Private Sector Federation (PSF).',
      role: 'Director of Private Sector Federation (PSF). ',
      bio: "Eric Mbonigaba is a Project Coordinator and Director of Agriculture & Livestock at Private Sector Federation (PSF) in Rwanda. He coordinates agriculture and livestock projects, leads agribusiness activities for RCAL members, and organizes agribusiness associations within PSF.",
      image: mboni,
    },
    {
      name: 'Jean Claude Habimana',
      Institution: ' Africa Food Systems(AFS)',
      role: 'Programme Manager',
      bio: 'Jean Claude HABIMANA is a communications expert leading IUCN strategies in Rwanda, with extensive experience in international development since 2017. His work spans global issues like environment and agriculture, with a background in various international organizations and a focus on advancing his education in Agricultural Communications.',
      image:claude,
    },

  ];

  const assistants = [
    {
      name: 'Dr Athanase Nduwumuremyi',
      role: 'Project coordinator',
      bio: 'Coordinator of Roots & Tubers Program/ Senior Scientist at Rwanda Agriculture and Animal Resource Development Board (RAB), VIRCA Plus Rwanda Project coordinator and OFAB Rwanda Chapter Chairperson',
      image: athanas,
    },
    {
      name: 'Mr Habimana Jean Claude',
      role: 'Communication specialist',
      bio: 'Jean Claude HABIMANA leads the development and implementation of communications strategies of International Union for Conservation of Nature- IUCN in Rwanda. Jean Claude’ career in international development spans decade ago. He worked with the United Nations Food and Agriculture (FAO), USAID and several other international nongovernmental organizations, providing strategy development, writing and editing, media relations, positioning and branding guidance, and communication tools development.',
      image: habiman,
    },
    {
      name: 'Mr Charles Semahoro ',
      role: 'Finance support',
      bio: 'David is an assistant director overseeing human resources.',
      image: nopic,
    },
    {
      name: 'MR Emmanuel Mugisha Muvunyi',
      role: 'Mass Media Mobilization Outreach Advisor',
      bio: 'MANAGING DIRECTOR at RWANDA BROADCASTERS AND SOCIAL MEDIA AWARDS',
      image: nopic,
    },
    {
      name: 'MR Pacific Nshimiyimana',
      role: 'Biotechnology and Science Communication Advisor',
      bio: 'Pacifique Nshimiyimana is a young agripreneur from Rwanda. As a business person, he founded and currently runs Real Green Gold Ltd, a social enterprise which does farming of tropical fruits and vegetables and smallholder farmers’ extension services.Pacifique graduated from the University of Rwanda with a Bachelor’s degree in biotechnology. He has worked with different organizations like Digital Opportunity Trust, where he was a startup facilitator and business coach, and Mastercard Foundation, where he served as a youth engagement consultant and researcher. This experience grew his passion in community and peer-to-peer based leadership and led him to join the Young Professionals for Agriculture Development and become a founding member of Rwanda Youth in Agribusiness Forum. As a farmer and a biotechnologist, he views the GLFP as an opportunity to learn and build science and fact-based communications around the solutions for our future agri-food systems',
      image: pacc,
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
    <>
      <div className='About'>
        <img className='About-img' src={happy} alt="Description of image" />
        <h1 className='story-head'>Transformed Agriculture</h1>
        <p className='story-text'>
          OFAB is an informative platform that brings together stakeholders in the field of Biotechnology and the public to enable interactions, sharing, and exchange of knowledge, experiences, contacts, and exploring new avenues of bringing the benefits of biotechnology to the Agricultural sector.
          On the 27th of October, 2021, African Agricultural Technology Foundation (AATF) in partnership with the Ministry of Agriculture and Animal Resources and Rwanda Agriculture and Animal Resources Development Board (RAB), launched OFAB-Rwanda Chapter with a mission to enhance knowledge sharing and awareness on Agricultural Biotechnology that would raise understanding and appreciation of the technology. OFAB-Rwanda Chapter is hosted by RAB and implements its activities through the partnership of  Rwanda Media Commission and  Alliance for Science Rwanda in the efforts to achieve its vision and mission. OFAB Rwanda informs and sensitizes the role of biotechnology in transforming agriculture from subsistence into modern, market, and profitable farming among others.
        </p>

        <div className="visionmission">
          <div className='mission'>
            <h1>MISSION</h1>
            <p> <FaArrowCircleRight />  OFAB Rwanda Chapter seeks to enhance knowledge sharing and awareness on agricultural biotechnology that would raise understanding and appreciation of the technology and contribute to building an enabling environment for informed and timely decision-making.</p>
          </div>
          <div className='mission'>
            <h1>VISION</h1>
            <p> <FaArrowCircleRight /> The Forum intends to be the leading organization in the field of agricultural biotechnology in Rwanda, to promote the development of agricultural biotechnology and to foster a culture of innovation and entrepreneurship amongst the agricultural
            </p>
          </div>
        </div>
      </div>
      <h2 className="team-section-title">Programming committee</h2>
      <div className="board">
        <div className="team-row">
          {boardMembers.slice(0, 3).map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              Institution={member.Institution}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
        <div className="team-row">
          {boardMembers.slice(3).map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              Institution={member.Institution}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
      <h2 className="team-section-title">Chapter coordination team members</h2>
      <div className="assistants">
        <div className="team-row">
          {assistants.map((member, index) => (
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
        <div className='partner-section'>
          <Partner logo={rab} link="https://www.rab.gov.rw/" />
          <Partner logo={Allance} link="https://allianceforscience.org/" />
          <Partner logo={aatf} link="https://www.aatf-africa.org/" />
          <Partner logo={rmc} link="http://rmc.org.rw/" />
          <Partner logo={virca} link="https://example.com" />
        </div>
      </div>
    </>
  );
}
