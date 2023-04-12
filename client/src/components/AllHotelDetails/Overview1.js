import React from "react";
import StarRating from "../StarRating";
import Room from "./Room";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Overview1 = ({ index, details, rooms }) => {
  const auth = useSelector((state) => state.auth);
  // const { id } = useParams();
  // console.log(details)

  // console.log(index);
  let history = useNavigate();
  let amenities = details.amenities.split(",");
  // console.log(amenities);
  // const yo = hid;
  // const handleUpdate = (id1) => {
  //   console.log(id1)
  //   // e.stopPropagation();

  //   history(`/c/${auth.ssn}/dashboard/booking/add`,

  //   {
  //     details:id1,
  //     userssn:auth.ssn,
  //     dateIn:"",
  //     dateOut:"",
  //   });
  // };

  return (
    <>
      <div className="container shadow py-2">
        <div className="container network_wrapper col-sm p-2 ">
          <div className="card">
            <div className="container mb-2">
              <div className="col">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col-4 d-none d-lg-block">
                    <Room room={details} />
                  </div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{details.hotel_name}</h3>
                    <strong className="d-inline-block mb-2 text-success">
                      <StarRating rating={details.rating} />
                    </strong>
                    <div className="mb-1 text-body-secondary">
                      {details.city}, {details.country}
                    </div>
                    <p className="mb-auto">{details.hotel_chain}</p>
                    <Link to={`/c/${auth.ssn}/dashboard/booking/add`}
                        state= {{ detail: details }}
                      
                      // onClick={() => handleUpdate(details)}
                      className="btn btn-primary stretched-link"
                    >
                      Book Now
                    </Link>
                  </div>

                  <div className="col-md-3">
                    <div className="card mt-3">
                      <div className="card-body vstack gap-3">
                        <h5 className="card-title">
                          Property of the {details.chain_name} Chain
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul
              className="nav nav-tabs card-header-tabs d-flex justify-content-start ms-5"
              data-bs-tabs="tabs"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="true"
                  data-bs-toggle="tab"
                  href={`#Details${index}`}
                >
                  Details
                </a>
              </li>
            </ul>
            <form className="card-body tab-content">
              <div className="tab-pane active" id={`#Details${index}`}>
                <div className="card-text">
                  <div className="row g-5">
                    <article className="col ms-3">
                      <h3>Info</h3>
                      <h6>Price : ${details.price}</h6>
                      <h6>View : {details.room_view}</h6>
                      <h6>Room capacity : {details.room_capacity}</h6>

                      <h6></h6>
                    </article>
                    <article className="col">
                      <h3>Amentities</h3>
                      <ul className="extras">
                        {amenities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview1;
