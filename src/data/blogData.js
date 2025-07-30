// Mock blog data to replace API calls
import suc1 from '../assets/suc1.jpg';
import suc2 from '../assets/suc2.jpg';
import suc3 from '../assets/suc3.jpg';
import group from '../assets/group.jpeg';
import harvest from '../assets/harvest.jpg';
import labo from '../assets/labo.jpg';
import nutritio from '../assets/nutritio.jpg';
import protection from '../assets/protection.jpg';

export const blogData = [
  {
    _id: '1',
    title: 'Advancing Agricultural Biotechnology in Rwanda: A Path to Food Security',
    articleSummary: 'Exploring how modern biotechnology is transforming Rwanda\'s agricultural landscape and contributing to sustainable food security for the nation.',
    mainPhoto: suc1,
    publicationDate: '2024-11-15',
    createdAt: '2024-11-15T10:00:00Z',
    author: 'Dr. Jean Baptiste Nzeyimana',
    content: `
      <h2>Introduction</h2>
      <p>Rwanda's commitment to agricultural transformation through biotechnology has been remarkable. The country has embraced modern agricultural technologies to enhance food security and improve farmers' livelihoods.</p>
      
      <h2>Key Developments</h2>
      <p>Recent developments in agricultural biotechnology have shown promising results in crop yield improvement and pest resistance. The Rwanda Agriculture and Animal Resources Development Board (RAB) has been at the forefront of these innovations.</p>
      
      <h2>Impact on Farmers</h2>
      <p>Local farmers have reported significant improvements in their crop yields and income levels since adopting biotechnology solutions. These technologies have proven particularly effective in addressing climate change challenges.</p>
      
      <h2>Future Prospects</h2>
      <p>The future of agricultural biotechnology in Rwanda looks promising, with continued investment in research and development expected to yield even greater benefits for the agricultural sector.</p>
    `
  },
  {
    _id: '2',
    title: 'OFAB Rwanda Hosts Successful Media Training Workshop',
    articleSummary: 'OFAB Rwanda conducted a comprehensive media training workshop to enhance journalists\' understanding of agricultural biotechnology reporting.',
    mainPhoto: suc2,
    publicationDate: '2024-11-10',
    createdAt: '2024-11-10T14:30:00Z',
    author: 'Sarah Uwimana',
    content: `
      <h2>Workshop Overview</h2>
      <p>The Open Forum on Agricultural Biotechnology (OFAB) Rwanda chapter successfully organized a media training workshop aimed at improving science communication in agricultural biotechnology.</p>
      
      <h2>Participants and Objectives</h2>
      <p>Over 30 journalists from various media houses participated in the workshop, learning about responsible reporting on biotechnology topics and the importance of science-based journalism.</p>
      
      <h2>Key Topics Covered</h2>
      <p>The workshop covered essential topics including biosafety regulations, genetic modification techniques, and the role of biotechnology in sustainable agriculture.</p>
      
      <h2>Expected Outcomes</h2>
      <p>Participants are expected to apply their new knowledge to produce more accurate and informative content about agricultural biotechnology developments in Rwanda.</p>
    `
  },
  {
    _id: '3',
    title: 'Climate-Smart Agriculture: Rwanda\'s Response to Climate Change',
    articleSummary: 'How Rwanda is leveraging biotechnology and smart agricultural practices to build resilience against climate change impacts.',
    mainPhoto: harvest,
    publicationDate: '2024-11-05',
    createdAt: '2024-11-05T09:15:00Z',
    author: 'Emmanuel Ntirenganya',
    content: `
      <h2>Climate Challenges</h2>
      <p>Rwanda faces significant climate challenges that threaten agricultural productivity. Rising temperatures and unpredictable rainfall patterns have necessitated innovative solutions.</p>
      
      <h2>Biotechnology Solutions</h2>
      <p>The country has adopted various biotechnology solutions including drought-resistant crop varieties and improved soil management techniques to address these challenges.</p>
      
      <h2>Success Stories</h2>
      <p>Several success stories have emerged from different districts where farmers have successfully implemented climate-smart agricultural practices with remarkable results.</p>
      
      <h2>Scaling Up Efforts</h2>
      <p>The government and development partners are working together to scale up these successful interventions to reach more farmers across the country.</p>
    `
  },
  {
    _id: '4',
    title: 'Youth Engagement in Agricultural Innovation',
    articleSummary: 'Exploring how young Rwandans are embracing agricultural biotechnology and driving innovation in the sector.',
    mainPhoto: group,
    publicationDate: '2024-10-28',
    createdAt: '2024-10-28T16:45:00Z',
    author: 'Grace Mukamana',
    content: `
      <h2>Youth in Agriculture</h2>
      <p>Young people in Rwanda are increasingly viewing agriculture as a viable career option, especially with the integration of modern technologies and biotechnology innovations.</p>
      
      <h2>Training Programs</h2>
      <p>Various training programs have been established to equip youth with the necessary skills and knowledge to participate effectively in the agricultural biotechnology sector.</p>
      
      <h2>Innovation Hubs</h2>
      <p>Agricultural innovation hubs have been created to provide platforms for young entrepreneurs to develop and test their agricultural technology solutions.</p>
      
      <h2>Future Leaders</h2>
      <p>These young innovators are expected to become the future leaders of Rwanda's agricultural transformation journey.</p>
    `
  },
  {
    _id: '5',
    title: 'Biosafety Regulations and Public Awareness in Rwanda',
    articleSummary: 'Understanding Rwanda\'s biosafety framework and the importance of public awareness in biotechnology adoption.',
    mainPhoto: labo,
    publicationDate: '2024-10-20',
    createdAt: '2024-10-20T11:20:00Z',
    author: 'Dr. Alphonse Mutabazi',
    content: `
      <h2>Regulatory Framework</h2>
      <p>Rwanda has established a comprehensive biosafety regulatory framework to ensure the safe development and deployment of biotechnology products.</p>
      
      <h2>Public Engagement</h2>
      <p>Public awareness and engagement are crucial components of successful biotechnology adoption. The government has invested in various outreach programs.</p>
      
      <h2>Safety Measures</h2>
      <p>Strict safety measures and monitoring protocols are in place to ensure that all biotechnology applications meet international safety standards.</p>
      
      <h2>Building Trust</h2>
      <p>Continuous dialogue with stakeholders and transparent communication help build public trust in biotechnology applications.</p>
    `
  },
  {
    _id: '6',
    title: 'Nutritional Enhancement Through Biofortification',
    articleSummary: 'How biofortification is helping to address malnutrition and improve nutritional outcomes in Rwanda.',
    mainPhoto: nutritio,
    publicationDate: '2024-10-15',
    createdAt: '2024-10-15T13:10:00Z',
    author: 'Dr. Marie Claire Uwimana',
    content: `
      <h2>Addressing Malnutrition</h2>
      <p>Biofortification represents a sustainable approach to addressing micronutrient deficiencies in Rwanda's population through enhanced crop varieties.</p>
      
      <h2>Iron-Rich Beans</h2>
      <p>The introduction of iron-rich bean varieties has shown significant promise in reducing iron deficiency anemia, particularly among women and children.</p>
      
      <h2>Vitamin A-Enhanced Crops</h2>
      <p>Orange-fleshed sweet potatoes and other vitamin A-enhanced crops are helping to combat vitamin A deficiency in rural communities.</p>
      
      <h2>Health Impact</h2>
      <p>Studies have shown measurable improvements in nutritional status among populations consuming biofortified crops regularly.</p>
    `
  }
];

// Function to get all blogs
export const getAllBlogs = () => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(blogData);
    }, 500);
  });
};

// Function to get a single blog by ID
export const getBlogById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const blog = blogData.find(blog => blog._id === id);
      if (blog) {
        resolve(blog);
      } else {
        reject(new Error('Blog not found'));
      }
    }, 300);
  });
};

// Function to get recent blogs
export const getRecentBlogs = (limit = 4) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sortedBlogs = blogData
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, limit);
      resolve(sortedBlogs);
    }, 400);
  });
};
