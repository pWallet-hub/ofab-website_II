import React from 'react';
import { Link } from 'react-router-dom';
import './Omas.css';
import award from '../../assets/_72A2638.jpg';
import award2 from '../../assets/_72A2747.jpg';
import award3 from '../../assets/_72A2607.jpg';
import eventimage from '../../assets/shitjob.jpg';
import ofab from '../../assets/ofab-zerobg.png';
import breakimage from '../../assets/break.jpg';
import rab from '../../assets/Rab.jpg';
import alliance from '../../assets/alliance.jpg';
import rmc from '../../assets/rmc.png';
import dataimage from '../../assets/data.jpg';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import '../Activities/Activities.css'


function Omas() {
    return (
        <div className='awards-container'>
            <div className='active-hub'>
                <div className='active-content'>
                    <img className='active-img' src={eventimage} alt="Description of image" />
                    {/* <h3>ACTIVITIES</h3> */}
                </div>
                <div className='welcome'>
                    <img src={ofab} alt="ofab logo" />
                    <div className='welcome-content'>
                        <h1>Welcome to the 3rd Edition of the OFAB <br />
                            Media Awards (OMA) 2024</h1>
                        <h4>Celebrating Excellence in Agricultural Journalism!</h4>
                    </div>
                </div>
                <div className='breake'>
                    <img src={breakimage} alt="" />
                </div>
            </div>

            <div className='awards-content1'>
                <h1>OFAB Media Awards</h1>
                <p>Ladies and gentlemen, distinguished guests, and champions of agricultural innovation, we are
                    thrilled to present to you the 3rd Edition of the OFAB Media Awards (OMA) 2024, an event
                    designed to honor and elevate the voices of Rwandan journalists who have excelled in reporting on the transformative power of agricultural biotechnology.
                </p>
                <p>As you know, journalism plays a pivotal role in shaping public understanding and driving conversations on key issues like food security, sustainable farming, and the technological
                    advancements critical to Rwanda’s agricultural development. These awards recognize credible
                    and ethical journalism that fosters constructive dialogue, promotes science-based reporting,
                    and ultimately supports Rwanda’s mission to build a thriving, tech-driven agricultural sector.
                </p>
                <p>This invitation-only event brings together Rwandan media professionals, business leaders,
                    government officials, and civil society stakeholders. Together, we celebrate the exceptional
                    contributions of journalists who have reported insightful, accurate, and impactful stories on
                    the application of modern biotechnology in agriculture.</p>
                <img src={award} alt="" />
                <div className='change'>
                    <h2>since 2021</h2>
                    <h1>OFAB Media Awards (OMAs)</h1>
                    <p>have been implemented under a consortium group consisting</p>
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
                    <p>By uniting key stakeholders from media, science, and agriculture, the OMAs aim to elevate journalism that informs
                        policy discussions, educates the public, and supports Rwanda's goals for sustainable agricultural development.</p>

                </div>
                <div className='shape1'>
                    <MdGroups />
                    <div className='shape-content'>
                        <h1>Shaping Rwanda’s Agricultural Future:</h1>
                        <p>By encouraging informed dialogue on biotechnology</p>
                    </div>
                </div>
                <div className='shape'>
                    <FaBuildingUser />
                    <div className='shape-content'>
                        <h1>Engaging the Private Sector and Civil Society:</h1>
                        <p>With the participation of government, business leaders, and civil society,
                            this year’s OMA emphasizes the multi-stakeholder approach necessary
                            to create an enabling environment for the commercialization of biotech
                            products that are currently at advanced stages of research.</p>
                    </div>
                </div>
                <div className='shape'>
                <IoEyeOffOutline />
                    <div className='shape-content'>
                       
                        <p>Let us continue fostering a community that supports innovative journalism and,
                            in turn, transforms the future of agriculture in Rwanda. We look forward to your
                            continued collaboration and support as we celebrate Rwanda’s agricultural
                            revolution through biotechnology—one story at a time!
                            Thank you for being part of this journey. Let’s take this opportunity to honor
                            our journalists, celebrate their contributions, and commit to advancing agricultural
                            innovation through media excellence.</p>
                    </div>
                </div>
                <div className='mission1'>
                    <h1>Mission:</h1>
                    <p>OMA 2024 aims to recognize and promote Rwandan-based journalists who are creating and reporting on the use, benefits, and other constructive information on agricultural biotechnology. The awards seek to highlight the critical roles played by the media in promoting constructive dialogue on modern biotechnology through responsible, professional, ethical, and effective reporting.</p>
                </div>
                <h1>Specific Objectives</h1>
                <h2>The specific objectives of the Awards were to:</h2>
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
                        <h3>The categories of the Awards were:</h3>
                        <ul>
                            <li>Print and Online Media: Including newspapers, magazines, and online platforms.</li>
                            <li>Radio: For radio journalists or broadcasters who report on biotech-related topics.</li>
                            <li>Television: For TV journalists and stations covering biotechnology stories.</li>
                        </ul>
                        <p>Then, the overall winner from either category combined the award for his/her category and the overall award.</p>
                    </div>
                </div>
                <div className='participants'>
                    <h1>Participants</h1>
                    <p>The awards event was attended by different stakeholders.</p>
                    <div className='participants-list'>
                        <ul>
                            <li>Agricultural Biotechnology sector players</li>
                            <li>Central government officials (MINAGRI, MoE, RAB, REMA, etc)</li>
                            <li>Journalists/Media practitioners (mainly agricultural biotechnology)</li>
                        </ul>
                    </div>
                    <p>Participants were limited to seventy attendees. Participants were encouraged to share their experiences in the Agriculture Biotechnology story</p>
                </div>
                <div className='contest'>
                <h1>Distribution of Contest Categories by Media House</h1>
                <img src={dataimage} alt="" />
            </div>
            </div>
            

            <div className='awards-content'>
                <div>
                    <img src={award} alt="Award" />
                    <p>The second runners-up in each category were awarded $200 USD. Winners in each category received $300 USD along with a prestigious trophy. The overall winner of the competition earned $500 USD, a magnificent trophy, and a stylish laptop bag as part of their well-deserved accolades.</p>
                </div>
                <div>
                    <img src={award2} alt="Award" />
                    <h3>Mr. Emmanuel Ntirenganya</h3>
                    <p>Mr. Emmanuel Ntirenganya clinched the top honor as the inaugural winner of the OFAB Media Awards in 2022, excelling in the distinguished writing category.
                        excelling in the distinguished writing category with the "How agricultural biotechnology could boost food security"
                        .                    </p>
                </div>
                <div>
                    <img src={award3} alt="Award" />
                    <p>The OFAB Rwanda Chapter Media Award ceremony and gala dinner celebrated the achievements of three distinguished top winners and recognized three accomplished second runners-up across all categories. These individuals were honored for their unwavering dedication to reporting on advancements in agricultural biotechnology.</p>
                </div>
            </div>

            <div className='submission'>
                <div className='submission-guidelines'>
                    <h2>Submission Guidelines :</h2>
                    <h4>Contestant journalists are encouraged to submit their entries by sharing:</h4>
                    <p>Links to published articles. The URL should be from a media house and not YouTube and SoundCloud links to TV and Radio stories respectively; and, Links to 3 of their best self-appraised articles or stories</p>
                </div>
                <div className='submission-deadline'>
                    <h2>Submission Deadline</h2>
                    <p>Entries should be submitted by Monday, 05th August 2024, using the following OFAB Rwanda OMA 2024 submission link</p>
                </div>
            </div>
            <div className='how-to-apply'>
                <div className='how-to-apply-content'>
                    <p className='title-how'>How to Apply</p>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe9x9CS2706-3oEK46sLnVw02RdpqUU0sGpTtkyft4r7mXatg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                        <button>
                            Apply <FaArrowUpRightFromSquare className='icon21' />
                        </button>
                    </Link>
                </div>
                <p>Rwanda interest in applying for the OFAB Media Awards 2024 can access the application link on OFAB Rwanda website and other social media platforms of forums.</p>

                <p>We look forward to receiving your submission and celebrating the outstanding contributions of Rwanda  journalists in promoting informed dialogue on agricultural biotechnology</p>

                <p>for more information, please contact:</p>
                <p>OFAB Rwanda Secretary</p>
                <p>Email : ofabrwanda@gmail.com</p>
                <p>Phone number: +250 785 855 080</p>
            </div>

        </div>
    );
}

export default Omas;
