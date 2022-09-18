import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Destination from '../../Home/TourGallary/Destination';
import './SignatureDestination.css'
import Single from './Single/Single';

const SignatureDestination = () => {
  const[allDestination,setAllDestination]=useState();
  useEffect(()=>{
    fetch('./signatureDestination.json')
    .then(res=>res.json())
    .then(data=>setAllDestination(data))
  },[])
    return (
        <div className='signatureContainer pb-5'>
          <h2 className='fw-bold text-center pb-5'>Some Of Our Signature Destinations </h2>
          <div className="container">
            <div className='row row-col-md-3 g-4'>
              {
                  allDestination?.map(singleOne=><Single
                  key={singleOne.id}
                  singleOne={singleOne}
                  ></Single>)

              }

            </div>
          </div>
        
            
        </div>
    );
};

export default SignatureDestination;