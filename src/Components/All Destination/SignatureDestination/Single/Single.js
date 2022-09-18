import React from 'react';
import './Single.css'
const Single = (props) => {
    const { img, price, place, Country, description, oldPrice } = props.singleOne;
    return (
        <div className='col-md-4'>
            <div className='destinationCard'>
                <img src={img} className='img-fluid' alt="" />
                <div className='p-3'>
                    <h5 className='fw-bold'>{place}</h5>
                    <h6 className='text-secondary'> <span ><i className="fa-solid fa-location-dot"></i></span> {Country}</h6>
                    <p className='text-secondary'>{description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h6 className='fw-bold'>Price: ${price}</h6>
                        <h6 className='fw-bold brandName'><del>${oldPrice}</del></h6>
                    </div>
                    <div className='text-center mt-3'>
                        <button className='me-3 cardBtn'>Book Now</button>
                        <button className='cardBtn'>See Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Single;