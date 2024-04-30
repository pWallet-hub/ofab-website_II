import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from "react-icons/hi";
import './BlogPost.css'; // Import your CSS file

function BlogPost() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://ofab-bn.onrender.com/api/v1/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post">
      <button onClick={() => navigate(-1)} className="back-button"> <HiArrowLeft /></button>
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} className="blog-image1" />
      <p>{post.content}</p>
      <div className='additional-photos'>
      {post.otherPhotos.map((photo, index) => (
        
        <img key={index} src={photo} alt={`Additional ${index}`} className='blog-image' />
      ))}
      </div>
      <p>Author: {post.author.username}</p>
      <p>Created at: {new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default BlogPost;