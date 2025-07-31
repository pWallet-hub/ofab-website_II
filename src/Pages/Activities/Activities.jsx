/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import award from '../../assets/_72A2638.jpg';
import award2 from '../../assets/_72A2747.jpg';
import award3 from '../../assets/_72A2607.jpg';
import cap1 from '../../assets/cap1.jpg';
import cap2 from '../../assets/cap2.jpg';
import cap3 from '../../assets/cap3.jpg';
import bul1 from '../../assets/bul1.jpg';
import bul2 from '../../assets/bul2.jpg';
import bul3 from '../../assets/bul3.jpg';
import './Activities.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Sample data for activities (expandable)
const activities = [
  {
    id: 1,
    title: 'OFAB Media Awards (OMAs)',
    description: [
      'The OFAB Media Awards (OMAs) celebrate exemplary journalism that promotes credible science reporting, enhancing public understanding of agricultural biotechnology for food security and sustainable development.',
      'The 1st and 2nd editions were a success, with two journalists recognized continentally. The 3rd Edition is now open for Rwandan journalists to submit entries showcasing the benefits of biotechnology.',
    ],
    images: [award, award2, award3],
    link: '/Omas',
    linkText: 'Learn More and Apply',
    background: 'omas-bg',
  },
  {
    id: 2,
    title: 'Capacity Building',
    description: [
      'OFAB Rwanda’s capacity-building programs empower media professionals, policymakers, and farmers with knowledge about modern agricultural biotechnology through interactive workshops.',
      'Our engaging sessions include presentations, expert lectures, and roundtable discussions to foster credible science communication and informed dialogue.',
      'Collaborating with diverse stakeholders, we aim to transform African agriculture for food security and poverty eradication.',
    ],
    images: [cap1, cap2, cap3],
    link: '/Capacity',
    linkText: 'Learn More',
    background: 'capacity-bg',
  },
  {
    id: 3,
    title: 'Seeing is Believing',
    description: ['Seeing is Believing: Where Innovation Meets Reality in the Field.', 'Seeing is Believing is more than just a learning trip—it’s about building trust, sparking meaningful conversations, and inspiring new voices to share these stories across media platforms, communities, and generations.'],
    images: [ bul1, bul2, bul3],
    link: '/Youth',
    linkText: 'Join Now',
    background: 'youth-bg',
  },
  // Example for adding more activities
  // {
  //   id: 3,
  //   title: 'Youth in Agriculture Initiative',
  //   description: ['Engaging young farmers in biotechnology education.', 'Workshops to inspire the next generation of agricultural innovators.'],
  //   images: [image1, image2, image3],
  //   link: '/Youth',
  //   linkText: 'Join Now',
  //   background: 'youth-bg',
  // },
];

function ActivityCard({ activity }) {
  useEffect(() => {
    // Initialize simple scroll animation (optional, using IntersectionObserver)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.activity-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`activity-card ${activity.background}`}>
      <div className="content-header">
        <h2>{activity.title}</h2>
        <div className="header-underline"></div>
      </div>
      {activity.description.map((para, index) => (
        <p key={index} className="activity-para">
          {para}
        </p>
      ))}
      <div className="activity-gallery">
        {activity.images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img
              src={img}
              alt={`${activity.title} image ${index + 1}`}
              className="gallery-img"
            />
          </div>
        ))}
      </div>
      <div className="activity-link">
        <Link to={activity.link} className="activity-button">
          {activity.linkText} <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
}

export default function Hub() {
  return (
    <div className="hub-container">
      {/* Header remains unchanged */}
      <div className="active-hub">
        <div className="active-content">
          <h3>ACTIVITIES</h3>
        </div>
      </div>

      {/* Activities Section */}
      <div className="activities-container">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}