import React from 'react';
import './WhoWe.css'
import we from '../../../Data/miscellaneous/us.jpg'
const WhoWe = () => {
    return (
        <div className='pt-5 contentContainer '>
            <div className='container'>
                <h1 className='pb-5 text-center fw-bold'>Who We Are ?</h1>
                <div className='row row-col-md-2 row-col-sm-1'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={we} alt="" />
                    </div>
                    <div className='col-md-6 weText'>
                        <h2>We Are Travel Enthusiasts</h2>
                        <p>TripToday is a leading trip and travel information website, sharing guides, lists, and how-to articles for destinations around the world, written by savvy travel experts. <br />We have been working for years with our customers providing them a hassle free holiday tour. Our expert guides and qualityful management will ensure you a wonderful time with your beloved persons. We are always there for you, we are there to assist you managing your vacation. <br /> Visit us and Pick your favourite place to travel. Hope you are going to have a excellent journey with TripToday. Enjoy your tour with TripToday and have a stress free moment.Cant' wait to have you with us. </p>
                        <button className='learnMoreBtn d-block '>Learn More</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default WhoWe;