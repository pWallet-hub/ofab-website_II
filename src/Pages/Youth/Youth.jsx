import React from 'react'
import look from '../../assets/look.jpg'
import grace from '../../assets/grace.jpg'
import gang from '../../assets/gang.jpg'
import irrigate from '../../assets/irrigate.jpg' 
import white from '../../assets/white.jpg'
import black from '../../assets/black.jpg'
import './Youth.css'
function Youth() {
  return (
    <div>
        <div className='youth-container'>
        <div className='youth-content'>
            <h1>activities </h1>
            </div>
            <div className='youth'>
                <h1>youth and women</h1>
                <div className='youth-page'>
                    <div className='youth1'>
                    <img className='youth12' src={look} alt="" />
                    <img src={grace} alt="" />
                    </div>
                    <div className='youth2'>
                    <img  src={gang} alt="" />
                    <img src={irrigate} alt="" />
                    </div>
                    <div className='youth3'>
                        <img src={white} alt="" />
                        <img src={black} alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Youth