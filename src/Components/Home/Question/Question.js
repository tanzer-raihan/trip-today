import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='questionContainer'>
            <div className='container'>
                <h2 className='fw-bold pb-5'>Question?</h2>
                <div className='row row-col-md-3 g-3'>
                    <div className='col-md-4'>
                        <div className='d-flex justify-contenct-center align-items-center info'>
                            <div className='icon'>
                                <i className="fa-solid fa-house-laptop"></i>
                            </div>
                            <div className='ms-4 '>
                                <h5 className='fw-bold'>Our Office:</h5>
                                <h6>Kotchandpur, Jhenaidah</h6>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='d-flex justify-contenct-center align-items-center info me-4'>
                            <div className='icon px-3'>
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className='ms-4 '>
                                <h5 className='fw-bold'>Contact Number:</h5>
                                <h6>+8801707553114</h6>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='d-flex justify-contenct-center align-items-center info me-4'>
                            <div className='icon px-3'>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className='ms-4'>
                                <h5 className='fw-bold'>Email Us:</h5>
                                <h6>tanzerraihan@gmail.com</h6>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='row row-col-md-3 pt-5 g-3'>
                    <div className='col-md-4'>
                        <input className='questionInput' placeholder='Name' type="text" />
                    </div>
                    <div className='col-md-4'>
                        <input className='questionInput' placeholder='Email' type="text" />
                    </div>
                    <div className='col-md-4'>
                        <input className='questionInput' placeholder='Subject' type="text" />
                    </div>
                </div>
                <div className='py-5'>
                    <textarea className='textField' name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                    <div className='text-center mt-3'>
                        <button className='sendTextBtn'>Send Message</button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Question;