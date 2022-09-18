import React from 'react';
import './TeamMember.css'
import guide1 from '../../../Data/guide/person1.jpg'
import guide2 from '../../../Data/guide/person2.jpg'
import guide3 from '../../../Data/guide/person3.jpg'
import guide4 from '../../../Data/guide/person4.jpg'

const TeamMember = () => {
    return (
        <div className='container py-5 mx-auto'>
            <h2 className='text-center fw-bold pb-5'>Team Members</h2>
            <div className='row row-col-md-3 '>
                <div className='memberCard col-md-4'>
                    <img className='img-fluid' src={guide1} alt="" />
                    <h5 className='pt-4 fw-bold'>Henry Willson</h5>
                    <h6>Tour Guide</h6>
                    <p className='text-secondary'>It's a great pleasure to join you and enjoy a outstanding adventurous tour. I am always there to guide you having a wonderful vacation. Hope we will meet soon.</p>

                </div>
                <div className='memberCard col-md-4'>
                    <img src={guide2} className='img-fluid' alt="" />

                    <h5 className='pt-4 fw-bold'>Richard Wein</h5>
                    <h6>Photographer</h6>
                    <p className='text-secondary'>Capturing all wonderful moment you will have is such a blissful activity. Would Love to make memory of you. We are extremly enthusiast to have you with us. </p>

                </div>
                <div className='memberCard col-md-4'>
                    <img src={guide3} className="img-fluid" alt="" />
                    <h5 className='pt-4 fw-bold'>Catherin Langford</h5>
                    <h6>Health Specialist</h6>
                    <p className='text-secondary'>We are always prepared to ensure you all kind of health support if needed. Our great team works all hours to provide you sufficient support in any type of physical issue. </p>
                </div>


            </div>

        </div>
    );
};

export default TeamMember;