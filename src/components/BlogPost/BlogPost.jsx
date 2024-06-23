import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from "react-icons/hi";
import './BlogPost.css';

function BlogPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://ofab-bn.onrender.com/api/v1/posts/${id}`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError('Failed to load blog post');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div className="blog-post">
      <button onClick={() => navigate(-1)} className="back-button">
        <HiArrowLeft />
      </button>
      <h2>{post.title}</h2>
      {post.mainPhoto && <img src={post.mainPhoto} alt={post.title} className="blog-image1" />}
      <div className="blog-meta">
        {post.author && <span>Author: {post.author}</span>}
        {post.publicationDate && <span>Published: {post.publicationDate}</span>}
        {post.activitySource && <span>Source: {post.activitySource}</span>}
      </div>
      {post.articleSummary && <p className="article-summary">{post.articleSummary}</p>}
      {post.link && (
        <a href={post.link} target="_blank" rel="noopener noreferrer" className="original-link">
          Read Original Article
        </a>
      )}
    </div>
  );
}

export default BlogPost;