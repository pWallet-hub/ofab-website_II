import React from 'react'
import './Capacity.css'
import Header from '../../Header/Header'
import group from '../../assets/group.jpg'
import buy from '../../assets/buy.jpg'
import busy from '../../assets/busy.jpg'
import about1 from '../../assets/about1.jpg'
import info from '../../assets/info.jpg'
import empower from '../../assets/empower.jpg'
import nutrition from '../../assets/nutritio.jpg'
import hallowen from '../../assets/hallowenbg.jpg'
import happy from '../../assets/happy.jpg'
import increase from '../../assets/increase.jpg'
import market from '../../assets/market.jpg'
import pest from '../../assets/pest.jpg'
import truck from '../../assets/truck.jpg'
import girl from '../../assets/girl.jpg'
function Capacity() {
    return (
        <div>
            <div className='capacity-containter'>
                <div className='capacity-content'>
                    <h1>activities </h1>
                </div>
                <div className='capacity'>
                    <h1>capacity building</h1>
                    <div className='image-page'>
                        <div className='image1'>
                            <div className='img2'>
                                <img src={buy} alt="" />
                            </div>
                            <div className='image12'>
                                <img src={pest} alt="" />
                                <img src={truck} alt="" />
                            </div>
                        </div>
                        <div className='image2'><img src={group} alt="" /></div>
                        <div className='image3'>
                            <img src={busy} alt="" />
                            <img src={girl} alt="" />
                        </div>
                    </div>
                    <div className='image-page1'>
                        <img src={about1} alt="" />
                        <img src={info} alt="" />
                        <img src={empower} alt="" />
                        <img src={nutrition} alt="" />
                    </div>
                    <div className='image-page1'>
                        <img src={hallowen} alt="" />
                        <img src={happy} alt="" />
                        <img src={increase} alt="" />
                        <img src={market} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capacity