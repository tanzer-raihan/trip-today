import React from 'react';
import './ContactBanner.css'
import bannerImg from '../../../Data/banner3.jpg'
const ContactBanner = () => {
    return (
        <div className='contactBanner'>

            <img className='img-fluid' src={bannerImg} alt="" />

            <div className='container contactBannerContainer'>
                <div>
                    <div className='row mt-5'>
                        <div className='row-col-md-12'>
                            <h1 className='fw-bold '><span className='brandName'>Trip</span>Today, The Best Holiday Organizer</h1>
                            <h6>Working To Provide You The Magnificent Holiday Experience</h6>
                            <button className='bookBtn'>Know More</button>
                        </div>
                    </div>
                </div>
               

            </div>



        </div>
    );
};

export default ContactBanner;