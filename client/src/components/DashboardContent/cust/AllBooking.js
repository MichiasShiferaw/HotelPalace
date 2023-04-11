import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import api from "../../../apis/apiIndex";
import { CustomersContext } from "../../../Contexts/CustomersContext";


const AllBooking = () => {
  let history = useNavigate();

  const dateformat = (olddate)=>{
    var oldie = new Date(olddate)
    return oldie.toISOString().split("T")[0];
  }
  const { id } = useParams();
  const {bookings,setBookings}=useContext(CustomersContext);
  
  
  
  
  const handleUpdate = (e, id) => {
      // e.stopPropagation();
      history(`/booking/${id}/update`);
    };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/booking/my-all/${id}`);
        console.log(response.data.data.booking);
        // console.log(id);
        setBookings(response.data.data.booking);
        console.log("guess");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);

    try {
      const response = await api.delete(`/booking/delete/${id}`);
      setBookings(
        bookings.filter((booking) => {
          return booking.booking_id !== id;
        })
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">All Booking under {id} </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <NavLink
            to={`/c/${id}/dashboard/booking/add`}
            type="button"
            className="btn btn-sm btn-outline-primary"
          >
            Add Booking
          </NavLink>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">booking id</th>
              <th scope="col">hotel_id</th>
              <th scope="col">status</th>
              <th scope="col">room_no</th>
              <th scope="col">emp SSN</th>
              <th scope="col">arrival date</th>
              <th scope="col">depature time</th>
              <th scope="col">created_at</th>
              <th scope="col">last_updated</th>
              <th scope="col">filter</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((booking) => {
                return (
                  <tr key={booking.booking_id}>
                    <td>{booking.booking_id}</td>
                    <td>{booking.hotel_id}</td>
                    <td className={"booking_status " + booking.booking_status}>
                      {booking.booking_status}{" "}
                    </td>
                    <td>{booking.room_no} </td>
                    <td> {booking.emp_ssn}</td>
                    <td> {dateformat(booking.arrival_time)}</td>
                    <td> {dateformat(booking.departure_time)}</td>
                    <td> {dateformat(booking.created_at)}</td>
                    <td> {dateformat(booking.last_updated)}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          onClick={(e) => handleUpdate(e, booking.booking_id)}
                          
                          className="btn btn-warning"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(booking.booking_id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* {bookings.length === 0 && <p>No Results Found</p>} */}
      </div>
    </div>
  );
};

export default AllBooking;
