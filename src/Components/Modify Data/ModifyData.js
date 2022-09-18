import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './ModifyData.css'
const ModifyData = () => {
    const placeRef = useRef();
    const countryRef = useRef();
    const priceRef = useRef();
    const oldPriceRef = useRef();
    const durationRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const handlePost = (event) => {
        event.preventDefault();
        const place = placeRef.current.value;
        const Country = countryRef.current.value;
        const price = priceRef.current.value;
        const oldPrice = oldPriceRef.current.value;
        const duration = durationRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const newData={place,Country,price,oldPrice,duration,img,description};


        fetch('https://protected-spire-52287.herokuapp.com/signature-destination', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(newData)


        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Post Successful');
                event.target.reset();
            }
        })

        

    }

    return (
        <div className='bookFormContainer d-flex justify-content-center align-items-center'>
            <div>

                <form onSubmit={handlePost} className="form-style-9">
                    <h5 className='text-center fw-bold py-3'>Add Signature Place To Database</h5>
                    <ul>
                        <li>
                            <input type="text" ref={placeRef} required className="field-style field-split align-left" placeholder="Place Name" />
                            <input type="text" ref={countryRef} className="field-style field-split align-right" placeholder="Country" required />

                        </li>
                        <li>
                            <input type="text" ref={priceRef} className="field-style field-split align-left" placeholder="Price" required/>
                            <input type="text" ref={oldPriceRef} className="field-style field-split align-right" placeholder="Old Price" required />
                        </li>
                        <li>
                            <input type="text" ref={durationRef} className="field-style field-split align-left" placeholder="Duration"  required/>
                            <input type="url" ref={imgRef} className="field-style field-split align-right" placeholder="Image Link" required />

                        </li>

                        <li>
                            <textarea ref={descriptionRef} className="field-style" placeholder="Description" required></textarea>
                        </li>
                        <li>
                            <input  type="submit" value="Add" />

                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default ModifyData;