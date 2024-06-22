import React from 'react';
import { Link } from 'react-router-dom';
import './Omas.css';
import award from '../../assets/_72A2638.jpg';
import award2 from '../../assets/_72A2747.jpg';
import award3 from '../../assets/_72A2607.jpg';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import '../Activities/Activities.css'


function Omas() {
    return (
        <div className='awards-container'>
            <div className='active-hub'>
        <div className='active-content'>
          <img className='active-img' src={award} alt="Description of image" />
          <h3>ACTIVITIES</h3>
        </div>
      </div>

            <div className='awards-content1'>
                <h1>OFAB Media Awards</h1>
                <p>Introduction
                    Since its global inception in September 2006, the Open Forum on Agricultural Biotechnology in Africa (OFAB) project continues to enhance knowledge-sharing and awareness on agricultural biotechnology in Africa and facilitates quality engagement on safety and benefits of modern agricultural biotechnology among stakeholders.
                    The Project, which is a partnership between the African Agricultural Technology Foundation (AATF) and other like-minded organizations, is implemented at the country level mostly through government bodies forming OFAB chapters serving as secretariats in those countries. Currently, OFAB is operational in ten countries namely, Kenya, Uganda, Tanzania, Ethiopia, Nigeria, Ghana, Burkina Faso, Rwanda, Mozambique, and Malawi.
                </p>
                <p>The OFAB Media Awards (OMAs) are aimed at recognizing exemplary journalism that exhibits best practices in credible science reporting that is crucial to better public understanding and acceptance of sciences, technologies, and innovations that are needed to transform African agriculture for food security, sustainable development, and poverty eradication.
                    Annually, the OMAs recognize the critical roles played by the media in promoting constructive dialogue on modern biotechnology through responsible, professional, ethical, and effective reporting.
                    For the 2nd edition in Rwanda, the OFAB Media Awards were organized and implemented to recognize and promote Rwandan-based journalists who were reported reporting on the use, benefits, and other constructive information on agriculture biotechnology.
                </p>
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
                        <p>The entry period is for one year, from 31st August 2023 to 31st August 2024</p>
                    </div>
                    <div className='award-categories'>
                        <h1>Categories for the Award and Contestants</h1>
                        <p>Thirty-seven contestants from different media houses applied in this competition.</p>
                        <h3>The categories of the Awards were:</h3>
                        <ul>
                            <li>Print Media and Online Media (combined)</li>
                            <li>Radio</li>
                            <li>Television</li>
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
                    <p>Entries should be submitted by Friday, 15th August 2024, using the following OFAB Rwanda OMA 2024 submission link</p>
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
