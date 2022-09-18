import React from 'react';
import './DestinationBanner.css'
import bannerImg from '../../../Data/banner2.jpg'

const DestinationBanner = () => {
    return (
        <div className='destinationBanner'>

            <img className='img-fluid' src={bannerImg} alt="" />

            <div className='container DestinationBannerContainer'>
                <div>
                    <div className='row mt-5'>
                        <div className='row-col-md-12'>
                            <h1 className='fw-bold '>Have Your Best Vacation With <span className='brandName'>Trip</span>Today</h1>
                            <h6>Signature Destination Within Accessible Price. Just Go And Explore </h6>
                            <button className='bookBtn'>Explore More</button>
                        </div>
                    </div>
                </div>
               

            </div>



        </div>
    );
};

export default DestinationBanner;