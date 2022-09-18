import React from 'react';
import './Register.css';

import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import useAuth from '../Hooks/Auth/useAuth';


const Register = () => {
    const navigate = useNavigate()
    const { setName, setPassword, setEmail, createAccountWithEmail,error } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();




    const goSingIn = () => {
        navigate('/signin')
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name,email,password);
        setEmail(email);
        setPassword(password);
        setName(name);
        createAccountWithEmail(email,password,name);

    }
    return (


        <div className="singInFormContainer d-flex justify-content-center">
            <div>
                <h2 className="brand text-center" to="#"> <span className='brandName'>TripToday</span></h2>
                <div className='signInForm mx-auto mt-3'>

                    <div className=' mt-3'>
                        <div className=''>
                            <h5 className=' text-center fw-bold'>Register Your Account</h5>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='my-3'>
                                <small className='d-block fw-bold mb-1'>Enter your Name</small>
                                <input ref={nameRef} className='d-block emailField' type="name" required />
                            </div>
                            <div className='my-3'>
                                <small className='d-block fw-bold mb-1'>Enter your Email</small>
                                <input ref={emailRef} className='d-block emailField' type="email" required />
                            </div>
                            <div className='my-3'>
                                <small className='d-block fw-bold mb-1'>Enter your password</small>
                                <input ref={passwordRef} className='d-block passwordField' type="password" required />
                            </div>
                            <div>
                                        {
                                            error?<small className='fw-bold text-danger'>{error}</small>:""
                                        }
                            </div>
                            <div className='my-3'   >
                                <button type='submit' className='signInBtn'>Continue</button>
                            </div>
                            <div>
                                <small className='notice'>By continuing, you agree to TripToday's <span className='text-primary'>Conditions and Privacy-Policy Notice</span></small>
                            </div>

                        </form>


                    </div>
                </div>
                <div className='text-center mt-3 text-light'>
                    <small className='d-block'>Already Have TripToday Account?</small>
                </div>
                <div className='my-3 text-center'   >
                    <button className='create-account-btn' onClick={goSingIn}>Sign-In to TripToday</button>
                </div>
            </div>
        </div>


    );
};

export default Register;