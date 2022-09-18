import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/Auth/useAuth';
import './Header.css'

const Header = () => {
    const [change, setChange] = useState(false)
    const {user,logOut}=useAuth();
    const changeNavBackground = () => {
        if (window.scrollY >= 30) {
            setChange(true)
        }
        else {
            setChange(false)
        }
    }
    const signOut=()=>{
        logOut();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBackground);
    }, [])



    return (
        <div>
            <nav className={change ? 'navbar navbar-expand-lg navactive  fixed-top ' : 'navbar navbar-expand-lg navinactive  fixed-top '}>
                <div className="container-fluid">
                    <h4 className='text-light'><span className='me-1 text-light'><i className="fa-solid fa-plane-departure"></i></span><span className='brandName'>Trip</span>Today</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navUl">
                            <li className="nav-item  me-4 ">
                                <NavLink activeclassname="active" className='navLink' to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item me-4 ">
                            <NavLink activeclassname='active' className='navLink' to="/destination">Destination</NavLink>
                            </li>
                            <li className="nav-item me-4">
                            <NavLink activeclassname='active' className='navLink' to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item me-4">
                            <NavLink activeclassname='active' className='navLink' to="/booktour">Book Tour</NavLink>
                            </li>
                            <li className="nav-item me-4 ">
                            {
                                user?.email? <button onClick={signOut} className='logOutBtn'>Logout</button>:<NavLink activeclassname='active' className='navLink' to="/signin">Sign-In</NavLink>
                            }
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;