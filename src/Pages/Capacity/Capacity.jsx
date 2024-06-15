import React from 'react'
import './Capacity.css'
import Header from '../../Header/Header'
import group from '../../assets/DSC_2210.jpg'
import buy from '../../assets/DSC_2072.jpg'
import busy from '../../assets/DSC_1850.jpg'
import about1 from '../../assets/_72A2576.jpg'
import info from '../../assets/DSC_2123 copy.jpg'
import empower from '../../assets/DSC_2232.jpg'
import nutrition from '../../assets/DSC_3576 copy.jpg'
import hallowen from '../../assets/DSC_2083.jpg'
import happy from '../../assets/DSC_3691 copy.jpg'
import increase from '../../assets/_72A2607.jpg'
import market from '../../assets/DSC_3699 copy.jpg'
import pest from '../../assets/DSC_1826 copy.jpg'
import truck from '../../assets/cap2.jpg'
import girl from '../../assets/_72A2747.jpg'
import boy from '../../assets/DSC_2077 copy.jpg'
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
                                <img src={boy} alt="" />
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