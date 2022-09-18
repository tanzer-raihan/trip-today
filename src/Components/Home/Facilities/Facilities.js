import React, { useEffect, useState } from 'react';
import './Facilities.css'
import SinleFacility from './SinleFacility';

const Facilities = () => {
    const [facilities, setFacilities] = useState();
    useEffect(() => {
        fetch('./features.json')
            .then(res => res.json())
            .then(data => setFacilities(data))
    }, [])
    return (
        <div className='facilitiesContainer'>
            <div className="container">
                <div className='row row-cols-1 row-cols-md-3  g-4'>
                    {
                        facilities?.map(facility => <SinleFacility
                            key={facility.id}
                            facility={facility}

                        ></SinleFacility>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Facilities;