import React, { Component } from 'react';
import Slider from "react-slick";

import './Carousel.css'
import img1 from '../../../Data/Popular place/dubai.jpg'
import img2 from '../../../Data/Popular place/china.jpg'
import img3 from '../../../Data/Popular place/indonesia.jpg'
import img4 from '../../../Data/Popular place/kashmir.jpg'
import img5 from '../../../Data/Popular place/maldivs.jpg'
import img6 from '../../../Data/Popular place/singapur.jpg'
const Carousel = () => {
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
        <div className='pt-5 slideContainer '>
            <h1 className='text-center pb-4 fw-bold '>Most Preferable</h1>
            <div className='container'>

                <Slider {...settings}>
                    <div className='slideCard'>
                        <img className='img-fluid' src={img1} alt="" />
                        <div className='cardText'>


                            <h4>Dubai</h4>
                            <p><i className="fa-solid fa-location-dot"></i> United Arab Emirat</p>
                            <h5> <span className='price'>$6500</span> <del>$7600</del></h5>
                        </div>
                    </div>
                    <div className=' slideCard'>
                        <img className='img-fluid' src={img2} alt="" />
                        <div className='cardText'>
                            <h4>Wall of China</h4>
                            <p><i className="fa-solid fa-location-dot"></i> China</p>
                            <h5><span className='price'>$4500</span> <del>$6300</del></h5>
                        </div>
                    </div>
                    <div className=' slideCard'>
                        <img className='img-fluid' src={img3} alt="" />
                        <div className='cardText'>
                            <h4>Bali</h4>
                            <p><i className="fa-solid fa-location-dot"></i> Indonesia</p>
                            <h5><span className='price'>$4600</span> <del>$5400</del></h5>
                        </div>
                    </div>


                    <div className='  slideCard'>
                        <img className='img-fluid' src={img4} alt="" />
                        <div className='cardText'>
                            <h4>Kashmir</h4>
                            <p><i className="fa-solid fa-location-dot"></i> India</p>
                            <h5><span className='price'>$2500</span> <del>$3300</del></h5>
                        </div>
                    </div>
                    <div className=' slideCard'>
                        <img className='img-fluid' src={img5} alt="" />
                        <div className='cardText'>
                            <h4>Heaven Beach</h4>
                            <p><i className="fa-solid fa-location-dot"></i> Maldivs</p>
                            <h5><span className='price'>$5300</span> <del>$6500</del></h5>

                        </div>
                    </div>
                    <div className=' slideCard'>
                        <img className='img-fluid' src={img6} alt="" />
                        <div className='cardText'>
                            <h4>Future City</h4>
                            <p><i className="fa-solid fa-location-dot"></i> Singapur</p>
                            <h5><span className='price'>$6800</span> <del>$7800</del></h5>

                        </div>
                    </div>
                </Slider>
            </div>

        </div>
    );
};

export default Carousel;