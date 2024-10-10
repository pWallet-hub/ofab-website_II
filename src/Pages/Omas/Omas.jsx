import React from 'react';
import { Link } from 'react-router-dom';
import './Omas.css';
import award from '../../assets/_72A2638.jpg';
import award2 from '../../assets/_72A2747.jpg';
import award3 from '../../assets/_72A2607.jpg';
import moto from '../../assets/moto.jpeg';
import ofab from '../../assets/ofab-zerobg.png';
import aatf from '../../assets/AATF.jpg';
import rab from '../../assets/Rab.jpg';
import alliance from '../../assets/alliance.jpg';
import rmc from '../../assets/rmc.png';
import dataimage from '../../assets/data.jpg';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import { Star } from 'lucide-react';
import '../Activities/Activities.css'

function Omas() {
    return (
        <div className='omas-container'>
            <div className='header-container'>
                <div className='top-row'>
                    <img src={moto} alt="Left Logo" className='logo' />
                    <div className='title'>
                        <h1 className='main-title'>REPUBLIC OF RWANDA</h1>
                        <h2 className='subtitle'>RWANDA AGRICULTURE AND ANIMAL</h2>
                        <h2 className='subtitle'>RESOURCES DEVELOPMENT BOARD (RAB)</h2>
                    </div>
                    <img src={rab} alt="Right Logo" className='logo' />
                </div>

            </div>

            <div className='omas-hub'>
                <div className='omas-content-parterner'>
                    <div className='omas-logos'>
                        <img src={aatf} alt="AATF Logo" className='omas-logo' />
                        <img src={alliance} alt="Alliance for Science Logo" className='omas-logo' />
                        <img src={rmc} alt="RMC Logo" className='omas-logo' />
                        <img src={ofab} alt="OFAB Logo" className='omas-logo' />
                    </div>
             
                <div className='welcome'>
                    <div className="star-container">
                        <Star className="star-icon" />
                    </div>
                    <div  className='omas-main'>
                    <h1 className="main-title">3<sup>rd</sup></h1>
                    <h2 className="sub-title">
                        <span className="ofab">OFAB</span>
                        <span className="media">MEDIA</span>
                    </h2>
                    <h3 className="awards-text">Awards</h3>
                    <div className="date-container">
                        <div className="day">27</div>
                        <div className="month">SEPTEMBER</div>
                        <div className="year">2024</div>
                    </div>
                </div>
                </div>
                </div>
            </div>

            <div className='omas-content1'>
                <h1>OFAB Media Awards</h1>
                <p>Ladies and gentlemen, distinguished guests, and champions of agricultural innovation, we are
                    thrilled to present to you the 3rd Edition of the OFAB Media Awards (OMA) 2024, an event
                    designed to honor and elevate the voices of Rwandan journalists who have excelled in reporting on the transformative power of agricultural biotechnology.
                </p>
                <p>As you know, journalism plays a pivotal role in shaping public understanding and driving conversations on key issues like food security, sustainable farming, and the technological
                    advancements critical to Rwanda's agricultural development. These awards recognize credible
                    and ethical journalism that fosters constructive dialogue, promotes science-based reporting,
                    and ultimately supports Rwanda's mission to build a thriving, tech-driven agricultural sector.
                </p>
                <p>This invitation-only event brings together Rwandan media professionals, business leaders,
                    government officials, and civil society stakeholders. Together, we celebrate the exceptional
                    contributions of journalists who have reported insightful, accurate, and impactful stories on
                    the application of modern biotechnology in agriculture.</p>
                    <div className='omas-content-award'>
                <img src={award} alt="" />
                <img src={award} alt="" />
                </div>
                <div className='change'>
                    <h2>since 2021</h2>
                    <h1>OFAB Media Awards (OMAs)</h1>
                    <p>Have been implemented under a consortium group consisting of RAB, RMC, and other key partners</p>
                    <div className='images'>
                        <img src={rab} alt="" />
                        <img src={rmc} alt="" />
                        <img src={alliance} alt="" />
                    </div>
                </div>
                <p>This partnership was established to promote science-based journalism and enhance the capacity of
                    Rwandan media in reporting on agricultural biotechnology. Through the OMAs, the consortium has
                    worked collaboratively to foster responsible, accurate, and ethical reporting, recognizing journalists who
                    contribute to advancing public understanding of agricultural innovations. </p>
                <div className='image-content'>
                    <img src={award2} alt="" />
                    <img src={award2} alt="" />
                    
                </div>
                <p>By uniting key stakeholders from media, science, and agriculture,the OMAs aim to elevate journalism that informs
                        policy discussions, educates the public, and supports Rwanda's goals for sustainable agricultural development.</p>
                <div className='shape1'>
                    {/* <MdGroups /> */}
                    <div className='shape-content'>
                        <h1>Shaping Rwanda's Agricultural Future:</h1>
                        <p>By encouraging informed dialogue on biotechnology</p>
                    </div>
                </div>
                <div className='shape'>
                    {/* <FaBuildingUser /> */}
                    <div className='shape-content'>
                        <h1>Engaging the Private Sector and Civil Society:</h1>
                        <p>With the participation of government, business leaders, and civil society,
                            this year's OMA emphasizes the multi-stakeholder approach necessary
                            to create an enabling environment for the commercialization of biotech
                            products that are currently at advanced stages of research.</p>
                    </div>
                </div>
                <div className='shape'>
                    {/* <IoEyeOffOutline /> */}
                    <div className='shape-content'>
                        <p>Let us continue fostering a community that supports innovative journalism and,
                            in turn, transforms the future of agriculture in Rwanda. We look forward to your
                            continued collaboration and support as we celebrate Rwanda's agricultural
                            revolution through biotechnology—one story at a time!
                            Thank you for being part of this journey. Let's take this opportunity to honor
                            our journalists, celebrate their contributions, and commit to advancing agricultural
                            innovation through media excellence.</p>
                    </div>
                </div>
                <div className='mission1'>
                    <h1>Mission:</h1>
                    <p>OMA 2024 aims to recognize and promote Rwandan-based journalists who are creating and reporting on the use, benefits, and other constructive information on agricultural biotechnology. The awards seek to highlight the critical roles played by the media in promoting constructive dialogue on modern biotechnology through responsible, professional, ethical, and effective reporting.</p>
                </div>

                <h1 className='specific-award'>Specific Objectives</h1>
                <h2 className='specific-award'>The specific objectives of the Awards are:</h2>
                <div className='objectives'>
                    <ul>
                        <li>Promote excellence in science journalism and appreciate the contribution
                            of journalists in promoting sustainable agricultural technologies,
                            particularly agricultural biotechnology.
                        </li>
                        <li>Reward the critical roles played by journalists in promoting
                            constructive dialogue on modern biotechnology through responsible,
                            professional, ethical, and effective reporting.
                        </li>
                    </ul>
                    <div className='award-eligibility'>
                        <h1>Eligibility</h1>
                        <p>Rwandan journalists who have been reporting on agricultural biotechnology and other important stories in the area of science, technology, and innovation.</p>
                        <h3>Entry period</h3>
                        <p>The entry period is for one year, from 31st August 2023 to 05th August 2024</p>
                    </div>
                    <div className='award-categories'>
                        <h1>Categories for the Award and Contestants</h1>
                        <p>Thirty-seven contestants from different media houses applied in this competition.</p>
                        <h3>The categories of the Awards are:</h3>
                        <ul>
                            <li>Print and Online Media: Including newspapers, magazines, and online platforms.</li>
                            <li>Radio: For radio journalists or broadcasters who report on biotech-related topics.</li>
                            <li>Television: For TV journalists and stations covering biotechnology stories.</li>
                        </ul>
                        <p>Then, the overall winner from either category will combine the award for his/her category and the overall award.</p>
                    </div>
                </div>
                <div className='participants'>
                    <h1>Participants</h1>
                    <p>The awards event was attended by different stakeholders, including:</p>
                    <div className='participants-list'>
                        <ul>
                            <li>Agricultural Biotechnology sector players</li>
                            <li>Central government officials (MINAGRI, MoE, RAB, REMA, etc)</li>
                            <li>Journalists/Media practitioners (mainly agricultural biotechnology)</li>
                        </ul>
                    </div>
                    <p>Participants were limited to seventy attendees and were encouraged to share their experiences in agricultural biotechnology reporting.</p>
                </div>
                <div className='contest'>
                    <h1>Distribution of Contest Categories by Media House</h1>
                    <div className='contest-list'>
                    <img src={dataimage} alt="" />
                    <img src={dataimage} alt="" />
                    </div>
                </div>
            </div>

            <div className='omas-content'>
                <div>
                    <img src={award} alt="Award" />
                    <p>The second runners-up in each category were awarded $200 USD. Winners in each category received $300 USD along with a prestigious trophy. The overall winner of the competition earned $500 USD, a magnificent trophy, and a stylish laptop bag as part of their well-deserved accolades.</p>
                </div>
                <div>
                    <img src={award2} alt="Award" />
                    <h3>Mr. Emmanuel Ntirenganya</h3>
                    <p>Mr. Emmanuel Ntirenganya clinched the top honor as the inaugural winner of the OFAB Media Awards in 2022, excelling in the distinguished writing category with the article "How agricultural biotechnology could boost food security".</p>
                </div>
                <div>
                    <img src={award3} alt="Award" />
                    <p>The OFAB Rwanda Chapter Media Award ceremony and gala dinner celebrated the achievements of three distinguished top winners and recognized three accomplished second runners-up across all categories. These individuals were honored for their unwavering dedication to reporting on advancements in agricultural biotechnology.</p>
                </div>
            </div>

        </div>
    );
}

export default Omas;