import React, { useEffect } from 'react';
import './Opinion.css'
import Slider from "react-slick";
import { useState } from 'react';
import SingleOpinion from './SingleOpinion';

const Opinion = () => {
    const [opinions,setOpinions]=useState();
    useEffect(()=>{
        fetch('./opinion.json')
        .then(res=>res.json())
        .then(data=>setOpinions(data))
    },[])

    var settings = {

        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='opinionContainer '>
            <h2 className='fw-bold text-center pb-5 '>Happy Clients</h2>
            <div className='container'>
                <Slider {...settings}>
                    {
                            opinions?.map(opinion=><SingleOpinion 
                            
                            key={opinion.id}
                            opinion={opinion}
                            ></SingleOpinion>)
                    }
                </Slider>

            </div>

        </div>
    );
};

export default Opinion;
