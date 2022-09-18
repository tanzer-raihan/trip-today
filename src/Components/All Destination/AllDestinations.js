import React from 'react';
import './AllDestination.css'
import DestinationBanner from '../All Destination/DestinationBanner/DestinationBanner'
import SignatureDestination from '../All Destination/SignatureDestination/SignatureDestination'
import Destination from '../Home/TourGallary/Destination';
import Facilities from '../Home/Facilities/Facilities'
import Opinion from '../Home/Opinion/Opinion';
import Question from '../Home/Question/Question'

const AllDestinations = () => {
    return (
        <div>
            <DestinationBanner></DestinationBanner>
            <SignatureDestination></SignatureDestination>
            <Destination></Destination>
            <h2 className='fw-bold text-center pt-4'>Why To Choose Us?</h2>
            <Facilities></Facilities>
            <Opinion></Opinion>
            <Question></Question>



        </div>
    );
};

export default AllDestinations;