import busy from '../../assets/busy.jpg'
import BlogCard from '../../components/Card/BlogCard'
import './Event.css'

export default function Events() {
  return (
    <div className='event'>
      <img src={busy} alt='Event' className='event-img' />
      <div className='event-info'>
       <BlogCard 
        image={busy} 
        date="2022-01-01" 
        title="Blog Title" 
        excerpt="This is a short excerpt from the blog post." 
        link="/blog-post"
      />
       <BlogCard 
        image={busy} 
        date="2022-01-01" 
        title="Blog Title" 
        excerpt="This is a short excerpt from the blog post." 
        link="/blog-post"
      />
       <BlogCard 
        image={busy} 
        date="2022-01-01" 
        title="Blog Title" 
        excerpt="This is a short excerpt from the blog post." 
        link="/blog-post"
      />
      </div>
    </div>
  )
}