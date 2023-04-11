import React from 'react';
import StarRating from '../StarRating';
import { useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import BookingForm from '../Forms/BookingForm';
import {useState} from 'react';


const Overview1 = ({ details,rooms }) => {
  console.log(details)
  // const yo = hid;
  const  auth  = useSelector((state) => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = ()=>{
    setIsVisible(!isVisible);
  };


  return (
    <>

      <div className="container shadow py-2">
        <div className="container network_wrapper col-sm p-2 ">
          <div className="card">

            <div className="container mb-2">
              <div className="col">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col-auto d-none d-lg-block">
                    
                  </div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{details.hotel_name}</h3>
                    <strong className="d-inline-block mb-2 text-success">
                      <StarRating rating={details.rating} />
                    </strong>
                    <div className="mb-1 text-body-secondary">{details.country}</div>
                    <p className="mb-auto">{details.hotel_chain}</p>
                    
                  </div>

                  <div className="col-md-3">
                    <div className="card mt-3">
                      <div className="card-body vstack gap-3">
                        <h5 className="card-title">Chain</h5>
                        
                       
                        {/*
                        <NavLink
                          href="#PageBooking"
                          className="ms-4  btn btn-warning"
                          oneClick={handleClick}
                        >
                          Book Now
                        </NavLink>
                        */}
                        
                        <button 
                            onClick={handleClick}
                            className="ms-4  btn btn-warning"
                            >
                          {isVisible ? 'Hide' : 'Book Now'}
                        </button>


                        <hr className="m-0" />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/*
            <ul
              className="nav nav-tabs card-header-tabs d-flex justify-content-around"
              data-bs-tabs="tabs"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="true"
                  data-bs-toggle="tab"
                  href="#Details"
                >
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#static">
                  Static
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#michias">
                  Prices
                </a>
              </li>
            </ul>

            */}
            
          
            <div style ={{ display: isVisible ? 'block' : 'none' }} id="booking" >
              
              <p>Hotel Id: {details.hotel_id}</p>
              <p>Rooms Available: {details.num_of_rooms}</p>
              <BookingForm />
            </div>
            {/*
            <form className="card-body tab-content">
              
              <div className="tab-pane active" id="Details">
                
              </div>
              <div className="tab-pane" id="static">
                <p className=" card-text">Rooms Available: {details.num_of_rooms}</p>
                
              </div>
              <div className="tab-pane" id="michias">
                <p className=" card-text">Price Points.</p>
              </div>
            </form>
          */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview1


