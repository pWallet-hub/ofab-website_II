// import { Link } from 'react-router-dom';
// import './BlogCard.css'; // Import the CSS file
// import BlogPost from '../BlogPost/BlogPost';

// function BlogCard({ image, date, title, excerpt, link, id }) {
//   return (
//     <div className='blog-card-container'>
      
//     <div className='blog-card'>
//       <img src={image} alt={title} className='blog-card-img' />
//       <div className='blog-card-content'>
//         <span className='blog-card-date'>{date}</span>
//         <h2 className='blog-card-title'>{title}</h2>
//         <p className='blog-card-excerpt'>{excerpt}</p>
//         <Link to={link} className='blog-card-readmore'>Read more</Link>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default BlogCard;

// BlogCard.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BlogCard.css';

function BlogCard({ image, date, title, link, author }) {
  return (
    <div className='blog-card'>
      <div className='blog-card-images'>
        <img src={image} alt={title} className='blog-card-img' />
       
      </div>
      <div className='blog-card-content'>
        <h2 className='blog-card-title'>{title}</h2>
        <div className='blog-card-author'>
          {author && <span className='blog-card-author-name'>{author}</span>}
          {date && <span className='blog-card-date'>{new Date(date).toLocaleDateString()}</span>}
        </div>
                 <Link to={link} className='blog-card-readmore'>Read more</Link>
      </div>
      <div className='blog-card-likes'>
        <span className='heart-icon'>♡</span> 45
      </div>
    </div>
  );
}
BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string,
};

export default BlogCard;