import React from 'react';
import look from '../../assets/look.jpg';
import grace from '../../assets/grace.jpg';
import gang from '../../assets/gang.jpg';
import irrigate from '../../assets/irrigate.jpg'; 
import white from '../../assets/white.jpg';
import black from '../../assets/black.jpg';
import hall from '../../assets/hall.jpg'
import arm from '../../assets/arm.jpg'
import './Youth.css';

function Youth() {
  return (
    <div className='youth-container'>
      <div className='youth-content'>
        <h1>activities</h1>
      </div>
      <div className='youth'>
        <h1>youth and women</h1>
        <div className='youth-page'>
            
            <img src={look} alt="" />
            <img src={grace} alt="" />
           
           
            <img src={gang} alt="" />
            <img src={irrigate} alt="" />
          
            
            <img src={white} alt="" />
            <img src={black} alt="" />
           
        </div>
      </div>
      <div className='youth-gallery'>
        <img src={hall} alt="" />
        <img src={arm} alt="" />
      </div>
    </div>
  );
}

export default Youth;
