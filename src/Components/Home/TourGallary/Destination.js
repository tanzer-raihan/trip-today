import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './Destination.css'
import SingleDestination from './SingleDestination/SingleDestination';



const Destination = () => {
    const [destinations,setDestinations]=useState();
    useEffect(()=>{
        fetch('./destination.json')
        .then(res=>res.json())
        .then(data=>setDestinations(data))
    },[])
    return (
        <div className='pb-5'>
            <h1 className='text-center fw-bold pb-5'>Tour Gallary</h1>
            <div className='gallaryContainer'>
               
                <div className='row row-col-md-3 g-0'>
                    {
                        destinations?.map(destination=><SingleDestination 
                        key={destination.id}
                        destination={destination}
                        
                        ></SingleDestination>)
                    }

                </div>
                
            </div>
        </div>
    );
};

export default Destination;