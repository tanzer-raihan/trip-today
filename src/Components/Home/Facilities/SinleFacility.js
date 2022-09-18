import React from 'react';
import './SinleFacility.css'

const SinleFacility = (props) => {
    const { headeing, description,icon } = props.facility;
    return (
        <div className='col'>
            <div className='card'>
                <p className='cardIcon'><i className={icon}></i></p>
                <h5 className='fw-bold'>{headeing}</h5>
                <p className='mt-2 text-secondary'>{description}</p>
            </div>


        </div>
    );
};

export default SinleFacility;