import React from 'react';
import './SignIn.css'

import { useNavigate } from 'react-router-dom';
import useFirebase from '../Hooks/FireBase/useFirebase';
import useAuth from '../Hooks/Auth/useAuth';
import { useRef } from 'react';
const SignIn = () => {
    const { googleSignIn } = useAuth();
    const { setEmail, setPassword, emailSignIn,error } = useAuth();
    const passwordRef = useRef();
    const emailRef=useRef();
    const navigate = useNavigate();
    const goRegister = () => {
        navigate('/register')

    }
    const signInWithGoogle = () => {
        googleSignIn();
    }
    const signInWithEmail = (event) => {
        event.preventDefault();
        const password=passwordRef.current.value;
        const email=emailRef.current.value;
        setEmail(email);
        setPassword(password);
        emailSignIn(email,password)


    }
    return (


        <div className="singInFormContainer d-flex justify-content-center">

            <div className=" ">
                <h3 className="brand text-center" to="#"><span className='brandName'>TripToday</span></h3>

                <div className='signInForm  mt-3'>


                    <div className=' mt-3'>
                        <div className=''>
                            <h5 className=' text-center fw-bold'>Sign-In To Your Account</h5>
                        </div>
                        <form onSubmit={signInWithEmail} >
                            <div className='my-3'>
                                <small className='d-block fw-bold mb-1'>Enter your Email</small>
                                <input ref={emailRef} className='d-block emailField' type="email" required />
                            </div>
                            <div className='my-3'>
                                <small className='d-block fw-bold mb-1'>Enter your password</small>
                                <input ref={passwordRef} className='d-block passwordField' type="password" required />
                            </div>
                            <div>
                            {error?<small className='fw-bold text-danger'>{error}</small>:""}
                        </div>
                            <div className='my-3'   >
                                <button type='submit' className='signInBtn'>Continue</button>
                            </div>

                        </form>
                       
                        <div className='my-3'   >
                            <button onClick={signInWithGoogle} className='signInBtn'>Continue With Google</button>
                        </div>
                        <div>
                            <small className='notice'>By continuing, you agree to TripTodays's <span className='text-primary'>Conditions and Privacy-Policy Notice</span></small>
                        </div>

                    </div>
                </div>
                <div className=' mt-3 text-light'>
                    <small className='d-block text-center'>New to TripToday?</small>
                </div>
                <div className='my-3'>
                    <button className='create-account-btn' onClick={goRegister}>Create your TripToday Account</button>
                </div>
            </div>

        </div>

    );
};

export default SignIn;