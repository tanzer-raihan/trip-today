import React from 'react';
import './HomeMain.css'
import Banner from '../Banner/Banner';
import BookTour from '../BookTour/BookTour';
import Carousel from '../Carousel/Carousel';


import Facilities from '../Facilities/Facilities';
import Opinion from '../Opinion/Opinion';
import Partner from '../Partner/Partner';
import Question from '../Question/Question';
import TeamMember from '../TeamMember/TeamMember';
import Destination from '../TourGallary/Destination';
import WhoWe from '../WhoWe/WhoWe';

const HomeMain = () => {
    return (
        <div className='main'>
        <Banner></Banner>
        <Carousel></Carousel>
        <Partner></Partner>
        <WhoWe></WhoWe>
        <Facilities></Facilities>
        <Destination></Destination>
        <Opinion></Opinion>
       <TeamMember></TeamMember>
       <BookTour></BookTour>
       <Question></Question>
      
        </div>
    );
};

export default HomeMain;