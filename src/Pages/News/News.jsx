// src/components/News.jsx
import { useState, useEffect } from 'react';
import './News.css';
import BlogCard from '../../components/Card/BlogCard';
import { getAllBlogs } from '../../data/blogData';

// Mock subscription API
const fakeSubscribe = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, message: 'Subscribed successfully!' }), 1000)
  );
};

export default function News() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetBlogs = async () => {
    try {
      const blogs = await getAllBlogs();
      setBlogs(blogs);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSubscribeMessage('Failed to load stories. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetBlogs();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeMessage('Please enter a valid email address.');
      return;
    }

    setIsSubscribing(true);
    try {
      const response = await fakeSubscribe(email);
      setSubscribeMessage(response.message);
      setEmail('');
      setTimeout(() => setSubscribeMessage(''), 3000);
    } catch (error) {
      setSubscribeMessage('Subscription failed. Try again later.');
    }
    setIsSubscribing(false);
  };

  return (
    <div className="news-page">
      {/* Header */}
      <div className="actives-hub">
        <div className="active-content">
          <h3>ACTIVITIES</h3>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">Stay Ahead with the Latest News</h2>
        <p className="hero-text">
          Discover trending stories and subscribe to our newsletter for daily updates.
        </p>
        <button
          className="hero-button"
          onClick={() => document.getElementById('subscribe-section').scrollIntoView({ behavior: 'smooth' })}
        >
          Subscribe Now
        </button>
      </section>

      {/* News Grid */}
      <section className="news-grid">
        {loading ? (
          <p>Loading stories...</p>
        ) : blogs.length === 0 ? (
          <p>No stories available.</p>
        ) : (
          blogs.map((story, index) => (
            <BlogCard
              key={index}
              image={story.mainPhoto}
              date={story.publicationDate}
              title={story.title}
              excerpt={story.articleSummary}
              link={`/blog-post/${story._id}`}
              className={index % 2 === 0 ? 'white-background' : 'green-background'}
            />
          ))
        )}
      </section>

      {/* Subscription Section */}
      <section id="subscribe-section" className="subscribe-section">
        <div className="subscribe-box">
          <h3 className="subscribe-title">Join Our Newsletter</h3>
          <p className="subscribe-text">
            Get the latest news delivered to your inbox every day.
          </p>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button type="submit" disabled={isSubscribing} className="subscribe-button">
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {subscribeMessage && (
            <p className={`subscribe-message ${subscribeMessage.includes('success') ? 'success' : 'error'}`}>
              {subscribeMessage}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}