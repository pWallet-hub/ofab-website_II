import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import closeup from '../../assets/closeup.jpg';
import BlogCard from '../../components/Card/BlogCard';
import './Activities.css';

export default function Hub() {
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
    <div>
      <div className='active-hub'>
        <div className='active-content'>
          <img className='active-img' src={closeup} alt="Description of image" />
          <p>"We seek to empower the public to make informed decisions about the adoption of biotech solutions in agriculture. We believe that informed decision-making will lead to more sustainable, equitable, and resilient food systems in Rwanda."</p>
        </div>
      </div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <BeatLoader color="#0C9444" size={40} />
      </div>
      ) : (
        <div className='active-info'>
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
  );
}