import React from 'react';
import './SingleOpinion.css'

const SingleOpinion = (props) => {
    const{name,profession,statement}=props.opinion
    return (
        <div className='opinionCard'>
            <div>
                <p className='statement'>{statement}</p>
                <h5 className='ps-3 text-dark fw-bold'>{name}</h5>
                <h6 className='ps-3 text-dark '>{profession}</h6>
            </div>
        </div>
    );
};

export default SingleOpinion;