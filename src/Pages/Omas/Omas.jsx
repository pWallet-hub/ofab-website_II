import React from 'react';
import './Omas.css';
import award from '../../assets/_72A2638.jpg';

function Omas() {
    return (
        <div className='awards-container'>
            <div className='awards-content1'>
                <h1>Ofab Media Awards</h1>
                <h5>Introduction
                    Since its global inception in September 2006, the Open Forum on Agricultural Biotechnology in Africa (OFAB) project continues to enhance knowledge-sharing and awareness on agricultural biotechnology in Africa and facilitates quality engagement on safety and benefits of modern agricultural biotechnology among stakeholders.
                    The Project, which is a partnership between the African Agricultural Technology Foundation (AATF) and other like-minded organizations, is implemented at the country level mostly through government bodies forming OFAB chapters serving as secretariats in those countries. Currently, OFAB is operational in ten countries namely, Kenya, Uganda, Tanzania, Ethiopia, Nigeria, Ghana, Burkina Faso, Rwanda, Mozambique, and Malawi.
                </h5>
                <p>The OFAB Media Awards (OMAs) are aimed at recognizing exemplary journalism that exhibits best practices in credible science reporting that is crucial to better public understanding and acceptance of sciences, technologies, and innovations that are needed to transform African agriculture for food security, sustainable development, and poverty eradication.
                    Annually, the OMAs recognize the critical roles played by the media in promoting constructive dialogue on modern biotechnology through responsible, professional, ethical, and effective reporting.
                    For the 2nd edition in Rwanda, the OFAB Media Awards were organized and implemented to recognize and promote Rwandan-based journalists who were reported reporting on the use, benefits, and other constructive information on agriculture biotechnology.
                </p>
                <h1>Specific Objectives
                </h1>
                <h2> The specific objectives of the Awards were to:</h2>
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
                    <div className='award-categories'>
                        <h1>
                            Categories for the Award and Contestants
                        </h1>
                        <p>Thirty-seven contestants from different media houses were applied in this competition.
                        </p>
                        <h3>The categories of the Awards were:
                        </h3>
                        <ul>
                            <li>Print Media and Online Media (combined)
                            </li>
                            <li>Radio</li>
                            <li>Television</li>

                        </ul>
                        <p>Then, the overall winner from either category and combined the award for his/ her category and the overall award.
                        </p>

                    </div>
                </div>

            </div>
            <div className='participants'>
                <h1>Participants
                </h1>
                <p>The awards event was attended by different stakeholders.
                 </p>

            </div>

            <div className='awards-content'>
                <div>
                    <img src={award} alt="Award" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam pariatur eligendi dolores, molestias incidunt
                        ea minima natus nobis dolorum! Eaque ea neque eum provident voluptatum enim ab similique delectus saepe.</p>
                </div>
                <div>
                    <img src={award} alt="Award" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam pariatur eligendi dolores, molestias incidunt
                        ea minima natus nobis dolorum! Eaque ea neque eum provident voluptatum enim ab similique delectus saepe.</p>
                </div>
                <div>
                    <img src={award} alt="Award" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam pariatur eligendi dolores, molestias incidunt
                        ea minima natus nobis dolorum! Eaque ea neque eum provident voluptatum enim ab similique delectus saepe.</p>
                </div>
            </div>
        </div>
    );
}

export default Omas;
