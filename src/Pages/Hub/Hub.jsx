import info from '../../assets/info.jpg'
import BlogCard from '../../components/Card/BlogCard'
import './Hub.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Hub() {
  const [image , setImage] = useState([]);
  useEffect(() => {
    const fetchImage = async () => {
      const result = await axios.get('https://ofab-bn.onrender.com/api/v1/galleries')
      setImage(result.data)
    }
    fetchImage()
  }, [])

  return ( 
   <div>
    <div className='hub'>
      <img className='hub-img' src={info} alt="Description of image" />
    </div>
    <h2 className='hub-title'>Gallery</h2>
    <div className='hub-info'>
      
      {image.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(img => (
        <img className='blog-card' key={img.id} src={img.images} alt={img.title} />
          ))}

     </div> 
    </div>
  )
}