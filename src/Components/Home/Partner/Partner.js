import React from 'react';
import Slider from "react-slick";
import './Partner.css'
import img1 from '../../../Data/partner/c1.png'
import img2 from '../../../Data/partner/c2.png'
import img3 from '../../../Data/partner/c3.png'
import img4 from '../../../Data/partner/c4.png'
import img5 from '../../../Data/partner/c5.png'

const Partner = () => {
    var settings = {

        dots: true,
        infinite: true,
        slidesToShow: 4,
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
        
            <div className=' pt-5 partnerContainer container '>
                <h1 className='text-center pb-4 fw-bold '>Our Reliable Partners</h1>
                <div className=''>

                    <Slider {...settings}>
                        <div className='p-2 partnerCard'>
                            <img className='img-fluid' src={img1} alt="" />

                        </div>
                        <div className='p-2 partnerCard'>
                            <img className='img-fluid' src={img2} alt="" />

                        </div>
                        <div className='p-2 partnerCard'>
                            <img className='img-fluid' src={img3} alt="" />

                        </div>


                        <div className='p-2  partnerCard'>
                            <img className='img-fluid' src={img4} alt="" />

                        </div>
                        <div className='p-2 partnerCard'>
                            <img className='img-fluid' src={img5} alt="" />

                        </div>

                    </Slider>
                </div>

            </div>

        
    );
};

export default Partner;