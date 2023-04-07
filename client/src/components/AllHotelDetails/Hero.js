import React from 'react'
import Booking from './Booking';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="carousel slide">
          <img
            style={{ maxHeight: "600px" }}
            className="w-100 "
            src="/assets/images/details-3.jpeg"
            alt="Image"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="pb-3" style={{ maxWidth: "700px" }}>
              <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                -- Book Now --
              </h6>
              <h2 className="display-4 text-white mb-4 animated slideInDown">
                Hotel Name
              </h2>
              <a
                href="#rooms"
                className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
              >
                Our Rooms
              </a>
              <NavLink to ="/hotel/:id/book"
                href=""
                className="btn btn-light py-md-3 px-md-5 animated slideInRight"
              >
                Book A Room
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Booking />
    </>
  );
}

export default Hero;