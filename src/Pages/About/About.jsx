import React from 'react';
import happy from '../../assets/newAsset.jpeg';
import woman from '../../assets/fontView.jpg';

import Ndabamye from '../../assets/NDABAMYE.jpg';
import kabera from '../../assets/kabera.jpg';
import Eme from '../../assets/Eme.jpg';
import Gasp from '../../assets/Gaspard.jpg';
import pazzo from '../../assets/pazzo.jpg';
import bagabe from '../../assets/bagabe.jpeg';
import mambo from '../../assets/mambo.jpg';
import pacc from '../../assets/pacc.jpg';
import campbell from '../../assets/campbell.jpg';
import Gatare from '../../assets/Gatare.jpg';
import Mub from '../../assets/Mubiligi.jpg';
import athanas from '../../assets/Athanase.jpeg';
import habiman from '../../assets/habiman.jpeg';
import nopic from '../../assets/nopic.jpg';

import TeamCard from '../../components/TeamCard/TeamCard';
import Partner from '../../components/Partners/Partners';
import Allance from '../../assets/alliance.jpg';
import rab from '../../assets/Rab.jpg';
import aatf from '../../assets/AATF.jpg';
import rmc from '../../assets/rmc.jpg';
import virca from '../../assets/virca.jpg';
import { FaArrowCircleRight } from 'react-icons/fa';
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
      bio: 'Prof.  Emile  holds a B. Pharm, a Master’s degree (Pharmacology) from University of the Western Cape in South Africa, and a PhD (Medical Science) from the University of Gothenburg in Sweden in the area of Clinical Pharmacology.Prof.Emile BIENVENU has been the Director General of Rwanda FDA since August 2021. Associate Professor of Pharmacology, he previously worked at University of Rwanda (1998 – 2021), where he served as Acting Deputy Vice Chancellor for Academic Affairs and Research (2020-2021), University Director for Innovation (2017-2020), and Executive Secretary for the University Research Office for six years (2002 to 2008). He also served as External Examiner at Muhimbili University of Health & Allied Sciences in Tanzania until 2016. From July 2011 until May 2013 he was the Head of Medical Procurement Division at Rwanda Biomedical Center. Dr. Emile served as the Chairman of the Board of Directors of Rwanda Standards Board (RSB) for 11 years (2009 – 2020) and served as a Member of the Board of Directors at Rwanda Military Hospital (2012-2018).Prof. Emile is an expert in hospital Drug & Therapeutic Committees (DTCs). He provided technical assistance as a resource person to the Ministry of Health in Rwanda (2006) in formulating the first editions of the Standard Treatment Guidelines and Drug Formulary. His research focuses on therapy optimization based on pharmacokinetic and pharmacogenetic considerations. He is the Country Principal Investigator of various research and innovation projects, and has authored a number of papers in peer-reviewed international Journals.',
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
      role: 'Director General of RAB',
      bio: 'Dr. Karangwa holds a PhD in Biotechnology from the Swedish University of Agricultural Sciences (SLU) with specialisation in forest genetic resources conservation and management. He also holds an MSc in Plant Breeding and Seed Systems from Makerere University, and a BSc in Biology with Education from the University of Rwanda. He is passionate about agricultural transformation for improved livelihoods and economic development.',
      image: pazzo,
    },
  ];

  const assistants = [
    {
      name: 'Pacifique Tumukunde',
      role: 'Head of Administration',
      bio: 'Pacifique Tumukunde is the head of administration at our organization, overseeing all administrative functions and ensuring smooth operations across departments.',
      image: pacc,
    },
    {
      name: 'Campbell Ndizeye',
      role: 'Head of Research',
      bio: 'Campbell Ndizeye leads our research team, spearheading innovative projects and driving our mission to discover and implement cutting-edge solutions.',
      image: campbell,
    },
  ];

  const workers = [
    {
      name: 'Athanas Rukundo',
      role: 'Project Manager',
      bio: 'Athanas Rukundo is responsible for planning, executing, and closing projects, ensuring that all project goals are met on time and within budget.',
      image: athanas,
    },
    {
      name: 'Habimana Emmanuel',
      role: 'Field Officer',
      bio: 'Habimana Emmanuel works directly in the field, implementing our projects and ensuring their successful execution on the ground.',
      image: habiman,
    },
    {
      name: 'Eugene Mugisha',
      role: 'Field Assistant',
      bio: 'Eugene Mugisha supports our field operations, working closely with the Field Officer to achieve project goals and objectives.',
      image: nopic,
    },
  ];

  const partners = [
    {
      name: 'African Agriculture Technology Foundation',
      description: 'Partnering with us to enhance agricultural technology and innovation across the continent.',
      logo: aatf,
    },
    {
      name: 'VIRCA PLUS',
      description: 'Collaborating to combat diseases affecting key crops and improve food security.',
      logo: virca,
    },
    {
      name: 'Rwanda Military Hospital',
      description: 'Working together to ensure the health and well-being of our communities.',
      logo: rmc,
    },
    {
      name: 'Rwanda Agriculture and Animal Resources Development Board',
      description: 'Partnering to drive agricultural development and innovation.',
      logo: rab,
    },
    {
      name: 'Alliance for a Green Revolution in Africa',
      description: 'Joining forces to promote sustainable agricultural practices.',
      logo: Allance,
    },
  ];

  return (
    <div className="About">
      <img src={happy} alt="Happy People" />
      <h2 className="story-head">Our Story</h2>
      <p className="story-text">
        Our mission is to transform agriculture and improve livelihoods through innovative solutions and sustainable practices. We are committed to driving change and making a positive impact in the communities we serve.
      </p>
      <p className="story-text2">
        Our vision is to be a leading organization in agricultural innovation and sustainability, recognized for our contributions to food security, economic development, and environmental stewardship.
      </p>
      <div className="visionmission">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            Transforming agriculture through innovation and sustainability for improved livelihoods and economic development.
          </p>
        </div>
        <div className="mission">
          <h3>Our Vision</h3>
          <p>
            Leading agricultural innovation and sustainability for a food-secure and prosperous future.
          </p>
        </div>
      </div>
      <h2 className="team-section-title">Board Members</h2>
      <div className="team-row board">
        {boardMembers.map((member, index) => (
          <TeamCard key={index} name={member.name} role={member.role} bio={member.bio} image={member.image} />
        ))}
      </div>
      <h2 className="team-section-title">Assistants</h2>
      <div className="team-row assistants">
        {assistants.map((assistant, index) => (
          <TeamCard key={index} name={assistant.name} role={assistant.role} bio={assistant.bio} image={assistant.image} />
        ))}
      </div>
      <h2 className="team-section-title">Workers</h2>
      <div className="team-row workers">
        {workers.map((worker, index) => (
          <TeamCard key={index} name={worker.name} role={worker.role} bio={worker.bio} image={worker.image} />
        ))}
      </div>
      <h2 className="team-section-title">Partners</h2>
      <div className="team-row partener">
        {partners.map((partner, index) => (
          <Partner key={index} name={partner.name} description={partner.description} logo={partner.logo} />
        ))}
      </div>
    </div>
  );
}
