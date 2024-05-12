import React from 'react'
import './Media.css'
import labo from '../../assets/labo.jpg'
import harvest from '../../assets/harvest.jpg'
import green from '../../assets/green.jpg'
import test from '../../assets/test.jpg'
import lozwar from '../../assets/lozwar.jpg'
import arm from '../../assets/arm.jpg'
import white from '../../assets/white.jpg'


function Media() {
  return (
    <div>
         <div className='media-content'>
        <h1>activities</h1>
      </div>
      <div className='media-gallery'>
        <h1>Media</h1>
        <div className='media-images'>
            <img src={labo} alt="" />
            <img src={harvest} alt="" />
        </div>
        <div className='media-images1'>
            <img src={green} alt="" />
            <img src={test} alt="" />
            <img src={lozwar} alt="" />
        </div>
        <div className='media-images2'> 
            <img src={arm} alt="" />
            <img src={white} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Media