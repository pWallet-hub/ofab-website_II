import { Link } from 'react-router-dom';
import './BlogCard.css'; // Import the CSS file
import BlogPost from '../BlogPost/BlogPost';

function BlogCard({ image, date, title, excerpt, link, id }) {
  return (
    <div className='blog-card-container'>
      
    <div className='blog-card'>
      <img src={image} alt={title} className='blog-card-img' />
      <div className='blog-card-content'>
        <span className='blog-card-date'>{date}</span>
        <h2 className='blog-card-title'>{title}</h2>
        <p className='blog-card-excerpt'>{excerpt}</p>
        <Link to={link} className='blog-card-readmore'>Read more</Link>
      </div>
    </div>
    </div>
  );
}

export default BlogCard;