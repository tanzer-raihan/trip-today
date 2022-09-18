import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookTour.css'

const BookTour = () => {
    const navigate=useNavigate();
    const bookTour=()=>{
      const proceed=  window.confirm("Are You Sure To Book Your Tour");
      if(proceed){
        alert("Thank You for choosing us. We will noitfy you about next steps.")
            navigate('/home')
      }
     else{
        alert('Booking Declined!')
     }

    }
    return (

        <div className='bookFormContainer d-flex justify-content-center align-items-center'>
            <div>
               
                <form className="form-style-9">
                    <h5 className='text-center fw-bold py-3'>Fill Out The Form To Book</h5>
                    <ul>
                        <li>
                            <input type="text" name="field1" className="field-style field-split align-left" placeholder="Name" />
                            <input type="email" name="field2" className="field-style field-split align-right" placeholder="Email" />

                        </li>
                        <li>
                            <input type="text" name="field3" className="field-style field-split align-left" placeholder="Phone" />
                            <input type="url" name="field4" className="field-style field-split align-right" placeholder="Social Media" />
                        </li>
                        <li>
                            <input type="text" name="field1" className="field-style field-split align-left" placeholder="Member" />
                            <input type="text" name="field2" className="field-style field-split align-right" placeholder="Duration" />

                        </li>
                        <li>
                            <input type="text" name="field3" className="field-style field-split align-left" placeholder="Destination" />
                            <input type="text" name="field4" className="field-style field-split align-right" placeholder="Time To Arrive" />
                        </li>
                        <li>
                            <input type="text" name="field3" className="field-style field-full align-none" placeholder="Address" />
                        </li>
                        <li>
                            <textarea name="field5" className="field-style" placeholder="Anything we should know particularly.."></textarea>
                        </li>
                        <li>
                            <input onClick={bookTour} type="submit" value="Book Now" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>

    );
};

export default BookTour;