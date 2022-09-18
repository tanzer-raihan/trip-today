import React from 'react';
import './Banner.css'
import bannerImg from '../../../Data/banner.jpg'

const Banner = () => {
    return (
        <div className='banner'>

            <img className='img-fluid' src={bannerImg} alt="" />

            <div className='container bannercontainer'>
                <div>
                    <div className='row mt-5'>
                        <div className='row-col-md-12'>
                            <h1 className='fw-bold '>Enjoy Your Trip with <span className='brandName'>Trip</span>Today</h1>
                            <h6>Best Holiday Organizer, Working To Get You The Best Smile</h6>
                            <button className='bookBtn'>Book Now</button>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Banner;