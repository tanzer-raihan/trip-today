import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="footerContent row row-col-md-4 g-3">
                    <div className='col-md-3 col-sm-6'>
                        <Link to='home' className='linkSection'><h3>Home Pages</h3></Link>
                        <Link to='home' className='linkSection'><h5>Home</h5></Link>
                        <Link to='home' className='linkSection'><h5>Preferable</h5></Link>
                        <Link to='home' className='linkSection'><h5>Top Gallary</h5></Link>
                        <Link to='home' className='linkSection'><h5>Team Members</h5></Link>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <Link to='courses' className='linkSection'> <h3>Destination</h3></Link>
                        <Link to='courses' className='linkSection'><h5>Top Destination</h5></Link>
                        <Link to='courses' className='linkSection'><h5>Most Preferable</h5></Link>
                        <Link to='courses' className='linkSection'><h5>Facility</h5></Link>
                        <Link to='courses' className='linkSection'><h5>Accommodation Partner</h5></Link>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <Link to='visit' className='linkSection'> <h3>Features</h3></Link>
                        <Link to='visit' className='linkSection'><h5>Travell Guide</h5></Link>
                        <Link to='visit' className='linkSection'><h5>Photography</h5></Link>
                        <Link to='visit' className='linkSection'><h5>Instruction</h5></Link>
                        <Link to='visit' className='linkSection'><h5>Visit Us</h5></Link>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <Link to='blogs' className='linkSection'> <h3>Blogs</h3></Link>
                        <Link to='blogs' className='linkSection'><h5>All Blogs</h5></Link>
                        <Link to='blogs' className='linkSection'><h5>Blogs Details</h5></Link>
                        <Link to='blogs' className='linkSection'><h5>Become A Guide</h5></Link>
                        <Link to='blogs' className='linkSection'><h5>Guide Profile</h5></Link>
                    </div>
                </div>

                <div className='copyrightAndMedia'>

                    <div className='p-3'>
                        <h6>© 2022 TripToday, Tanzer Raihan. All rights reserved</h6>
                    </div>
                    <div>
                        <span className='media'><i className="fa-brands fa-facebook-f"></i></span>
                        <span className='media'><i className="fa-brands fa-twitter"></i></span>
                        <span className='media'><i className="fa-brands fa-google"></i></span>
                        <span className='media'><i className="fa-brands fa-linkedin-in"></i></span>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;