import React from 'react';
import './SingleDestination.css'
const SingleDestination = (props) => {
    const { country, img, place } = props.destination
    return (
        <div className='col-md-4 cardContainer' >
            <img className='img-fluid' src={img} alt="" />
            <div className='destinationName'>
                <h5 className='dpc'>{place}, {country}</h5>
               
            </div>

        </div>
    );
};

export default SingleDestination;