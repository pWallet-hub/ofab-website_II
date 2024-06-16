
import happy from '../../assets/newAsset.jpeg'
import woman from '../../assets/fontView.jpg'

import Ndabamye from '../../assets/NDABAMYE.jpg'
import kabera from '../../assets/kabera.jpg'
import Eme from '../../assets/Eme.jpg'
import Gasp from '../../assets/Gaspard.jpg'
import pazzo from '../../assets/pazzo.jpg'
import bagabe from '../../assets/bagabe.jpeg'
import mambo from '../../assets/mambo.jpg'
import pacc from '../../assets/pacc.jpg'
import campbell from '../../assets/campbell.jpg'
import Gatare from '../../assets/Gatare.jpg'
import Mub from '../../assets/Mubiligi.jpg'
import athanas from '../../assets/Athanase.jpeg'
import habiman from '../../assets/habiman.jpeg'
import nopic from '../../assets/nopic.jpg'


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
      role: 'Director General of Rwanda Agriculture and Animal Resources Development Board (RAB)',
      bio: 'Dr Telesphore Ndabamenye is appointed as Director General of Rwanda Agriculture and Animal Resources Development Board (RAB) since 2nd March 2023. Before this position, he served as Africa Regional Platform manager for Africa’s Food Systems Transformation for Food Action Alliance under the World Economic Forum, and Senior Advisor for Food Systems Transformation Agenda towards 2030 SDGs Agenda.',
      image: Ndabamye,
    },
    {
      name: 'Juliet Kabera',
      role: 'Director General, Rwanda Environment Management Authority',
      bio: 'Juliet Kabera is the Director General of the Rwanda Environment Management Authority, to which she was appointed in May 2020. Prior to her appointment, she held the position of Director General of Environment and Climate Change at the Ministry of Environment. Juliet began her career as an Environment Management Officer, at a time when Rwanda was developing much of its forward-looking environmental institutions and policies and enforcement of different laws such as the 2008 law banning plastic bags in Rwanda and the 2019 law banning single use plastics. Juliet served as the Chair of the Executive Committee of the Multilateral Fund of the Montreal Protocol in the year 2019/2020.Juliet KABERA graduated with a Bachelor of Science with a major in Biochemistry from Makerere University Kampala, in March 2002, and in June 2020 she graduated Masters in Conservation MBA at the African Leadership University',
      image: kabera,
    },
    {
      name: 'PROF. EMILE BIENVENU',
      role: 'Director General, Rwanda FDA',
      bio: 'Prof.  Emile  holds a B. Pharm, a Master’s degree (Pharmacology) from University of the Western Cape in South Africa, and a PhD (Medical Science) from the University of Gothenburg in Sweden in the area of Clinical Pharmacology.Prof.Emile BIENVENU has been the Director General of Rwanda FDA since August 2021. Associate Professor of Pharmacology, he previously worked at University of Rwanda (1998 – 2021), where he served as Acting Deputy Vice Chancellor for Academic Affairs and Research (2020-2021), University Director for Innovation (2017-2020), and Executive Secretary for the University Research Office for six years (2002 to 2008). He also served as External Examiner at Muhimbili University of Health & Allied Sciences in Tanzania until 2016. From July 2011 until May 2013 he was the Head of Medical Procurement Division at Rwanda Biomedical Center. Dr. Emile served as the Chairman of the Board of Directors of Rwanda Standards Board (RSB) for 11 years (2009 – 2020) and served as a Member of the Board of Directors at Rwanda Military Hospital (2012-2018).Prof. Emile is an expert in hospital Drug & Therapeutic Committees (DTCs). He provided technical assistance as a resource person to the Ministry of Health in Rwanda (2006) in formulating the first editions of the Standard Treatment Guidelines and Drug Formulary. His research focuses on therapy optimization based on pharmacokinetic and pharmacogenetic considerations. He is the Country Principal Investigator of various research and innovation projects, and has authored a number of papers in peer-reviewed international Journals .',
      image: Eme,
    },
    {
      name: 'Gaspard Twagirayezu',
      role: 'Co-Chair of NCST Council',
      bio: 'Hon. Gaspard Twagirayezu is the Rwandan Minister of Education and Co-Chair of NCST Council. He will Officially open the Pre-Council Meeting Symposium on 18th October 2023, and chair NCST Council Meeting on 19th October 2023. His remarks shall highlight the Government of Rwanda commitment to develop policy and implementation strategies that support national ambition to leverage the potential of Science, Technology, and Innovation (STI) as a strategic orientation that knowledge is essential to addressing social-economic challenges.',
      image: Gasp,
    },
    {
      name: 'Dr. Patrick Karangwa ',
      role: 'Director General of Agriculture Modernization for the Ministry of Agriculture and Animal Resources of Rwanda',
      bio: 'Dr. Patrick Karangwa is the Director General of Agriculture Modernization for the Ministry of Agriculture and Animal Resources of Rwanda since January 2023 He has got significant experience serving in senior leadership positions, including having been the Director General of Rwanda Agriculture and Animal Resources Development Board (RAB) for five years (2018-2023) and the Head of Research Department in RAB (2015-2018). He served on Boards of various organisations, including the Association for Strengthening Agricultural Research in East and Central Africa (ASARECA).He has also worked for the Food and Agriculture Organization (FAO) of the United Nations as a consultant and served as the Country Representative of the Agricultural Biotechnology Network in Africa (ABNETA) - an FAO’s initiative. Dr. Karangwa has got over 15 years of experience as an agricultural research scientist, during which he published scientific works in refereed journals, books, and international conferences, and written several fund winning projects for Rwanda’s Agriculture Transformation. These include the project “Development of Market Responsive Plant Varieties and Seed Systems” which made major contributions towards the ending of seed importation under Government subsidy. Dr. Karangwa has also lectured in higher learning institutions at University of Rwanda (UR) and the Institut d’Enseignment Superieur (INES).A PhD holder in Plant Pathology from the University of Stellenbosch, South Africa, he also holds Master’s and Bachelor’s degrees in Biotechnology from the University of Wageningen, the Netherlands and the University of Rwanda, respectively, and pursues the Global Master of Business Administration (Entrepreneurship and Innovation Specialism) of the University of London.',
      image: pazzo,
    },
    {
      name: 'Mark Cyubahiro Bagabe ',
      role: 'Director General of Rwanda Inspectorate, Competition and Consumer Protection Authority (RICA).',
      bio: 'Leader in food safety and quality Management to enhance continual improvement of internal processes, at organisational and operational levels, to increase efficiency and ensure value for stakeholders and customers. Over 20 years track record in change management, food safety, and agricultural research and development. Highly skilled in advocacy, resource management, resource mobilisation, communication, international negotiations, and fostering partnerships with a wide range of stakeholders including governments, organisations, development partners, civil society, private sector, among others. Strong believer and promoter of team and organisational culture, sound interpersonal relations, and ethics as essential ingredients for delivery and continual improvement of organisational and operational goals.',
      image: bagabe,
    },
     {
      name: 'Prof. Claude Mambo MUVUNYI',
      role: 'Director General of Rwanda Biomedical Centre',
      bio: "Prof. Claude Mambo MUVUNYI is the Director General of Rwanda Biomedical Centre. He has more than 10 years of technical, managerial, and strategic experience and expertise in the field of clinical and public laboratory medicine with special focus on clinical microbiology, laboratory systems and service strengthening, and global health security.Prof. Claude Mambo MUVUNYI is currently a full professor of clinical Microbiology and Laboratory Medicine. He holds a degree in general medicine from the university of Rwanda, a specialization and a PhD in Clinical Microbiology from the University of Ghent, Belgium. He also holds a master's in medical Virology from the University of Manchester. Prior to joining the RBC, Prof. Claude Mambo MUVUNYI was a Senior Regional Laboratory Advisor at ICAP at Columbia University, providing technical and strategic leadership support to the Laboratory program/project in building quality assured diagnostic capacities at all levels in the network (public and private health laboratories) of countries in Africa, South and Central Asia, and central America. He has also been a senior consultant for World Health Organization (WHO) supporting WHO’s programs for Antimicrobial Resistance (AMR) surveillance and diagnostic capacity building in African countries. He has been the Head of National reference Laboratory, and the Director of Microbiology unit as well as a study physician for AIDS Vaccine clinical and feasibility research at Project San Francisco. He has published papers in several international and regional peer-reviewed journals and has made numerous presentations in international conferences. His research interests include evaluation of diagnostic methods (molecular and serological) for infectious diseases and operational research on diagnostic implementation and scale up, and to assess the impact of the new diagnostic for infectious diseases.",
      image: mambo,
    },
     {
      name: 'Pacifique Nshimiyimana',
      role: 'Representative Alliance for Science Rwanda AfS-Rwanda',
      bio: 'Pacifique Nshimiyimana is a young agripreneur from Rwanda. As a business person, he founded and currently runs Real Green Gold Ltd, a social enterprise which does farming of tropical fruits and vegetables and smallholder farmers’ extension services.Pacifique graduated from the University of Rwanda with a Bachelor’s degree in biotechnology. He has worked with different organizations like Digital Opportunity Trust, where he was a startup facilitator and business coach, and Mastercard Foundation, where he served as a youth engagement consultant and researcher. This experience grew his passion in community and peer-to-peer based leadership and led him to join the Young Professionals for Agriculture Development and become a founding member of Rwanda Youth in Agribusiness Forum. As a farmer and a biotechnologist, he views the GLFP as an opportunity to learn and build science and fact-based communications around the solutions for our future agri-food systems',
      image: pacc,
    },
     {
      name: 'Patricia L. Campbell ',
      role: 'Chancellor of the University of RWANDA (UR)',
      bio: 'Patricia L. Campbell is the chief administrative officer of Tufts University. Ms. Campbell was appointed executive vice president in September 2007, after serving as vice president for finance and administration at WGBH, Boston’s public broadcaster, for three years. From 1996 to 2004, Ms. Campbell was executive associate dean of Tufts University School of Dental Medicine, where she introduced a new information technology system, established new financial controls, initiated a strategic planning process, and reorganized the school’s dental clinic operations. Prior to 1996, she was deputy commissioner for administration and finance for the Office of Mental Health in New York, where she oversaw a $1 billion budget EVP Campbell earned her undergraduate degree and a master’s in library science from the State University of New York at Albany and a master’s in public health from Tufts University. Patricia Campbell has replaced Dr Mike O’Neal, who has been with the University for almost last five years.',
      image: campbell,
    },
     {
      name: 'Francis Gatare',
      role: 'Cheir Executive Officer of Rwanda Development Board (RDB)',
      bio: "Studied economics at university; Mason Fellow, Harvard Kennedy School. Extensive experience in the public and private sectors. Formerly: served at the Rwanda Development Board; Director-General, Rwanda Investment & Export Promotion Agency; served in various managerial positions at UNDP; April 2005 - October 2009, Rwanda's Representative to the NEPAD Steering Committee; October 2009 - July 2014, Principal Private Secretary to the President of the Republic of Rwanda; Chief Economist and Deputy Head of Policy and Strategy, Office of the President. Currently, Chief Executive Officer, Rwanda Development Board and Cabinet Member.",
      image: Gatare,
    },
     {
      name: 'Jean Francois MUBILIGI',
      role: 'chairperson of Private Sector Federation (PSF). ',
      bio: "Mubiligi Jeanne Francoise, ni umuyobozi uhagararire urugaga rw'abikorera mu Rwanda Chairperson of Rwanda Private Sector Federation (PSF) na Perezida w'Urugaga rw'Abagore Ba Rwiyemezamirimo Mubiligi afite impamyabumenyi y'ikirenga mu iterambere ry'ubucuruzi mpuzamahanga, n' Ubukungu  Master of international business development, Business/Managerial Economics yakuye muri kaminuza ya Neuchatel.",
      image: Mub,
    },
    {
      name: 'Rwanda Media Commission',
      role: 'Rwanda Media Commission committe',
      image:nopic,
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
