import React from 'react';
import './BookTour.css'
import img1 from '../../../Data/banner.jpg'
const BookTour = () => {
    return (
        <div className='bookNowContainer pt-5'>
            <img src={img1} alt="" />
            <div className='bookText'>
                <h1>Interested To Join Us ?</h1>
                <h6 className='text-light'>We offer a wide ranges of offer to help you getting the perfect smile</h6>
                <button className='bookBtn mt-3'>Book A Tour</button>
            </div>
        </div>
    );
};

export default BookTour;