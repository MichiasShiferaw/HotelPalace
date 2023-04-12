import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import api from "../../../../apis/apiIndex";
import { CustomersContext } from "../../../../Contexts/CustomersContext";
import { useSelector } from "react-redux";

const AllBooking = () => {
  let updated = Date.now();
  const offset = updated.getTimezoneOffset();
  updated = new Date(updated.getTime() - offset * 60 * 1000);
  updated = updated.toISOString().split("T")[0];

  const { id } = useParams();
  const auth = useSelector((state) => state.auth);
  // console.log(auth)

  const hotel_id = auth.hotel;
  console.log(hotel_id);
  let history = useNavigate();

    const handleCheckIn = (e, id1) => {
      e.stopPropagation();
      history(`/emp/${auth.ssn}/b-r/checkin/booking-transfer/${id1}`);
    };

  const dateformat = (olddate) => {
    var oldie = new Date(olddate);
    return oldie.toISOString().split("T")[0];
  };

  const { bookings, setBookings } = useContext(CustomersContext);

  const handleArchive = async (id) => {
    console.log(id);

    try {
      const response = await api.put(`emp/set-booking/${id}`, {
        booking_status: "archived",
        last_updated: updated,
      });

      setBookings(
        bookings.filter((booking) => {
          return booking;
        })
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/emp/get-all-booking/${auth.hotel}`);
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

  const handleCancel = async (id) => {
    console.log(id);

    try {
      const response = await api.put(`emp/set-booking/${id}`, {
        booking_status: "cancel",
        last_updated: updated,
      });
      setBookings(
        bookings.filter((booking) => {
          return booking;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">All Booking for hotel {auth.hotel} </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <NavLink
            to={`/emp/${id}/b-r/renting/add`}
            type="button"
            className="btn btn-sm btn-outline-primary"
          >
            Add Renting
          </NavLink>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Check In</th>
              <th scope="col">booking id</th>
              <th scope="col">customer_SSN</th>
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
                    <button
                      onClick={(e) => handleCheckIn(e, booking.booking_id)}
                      className="btn btn-info"
                    >
                      CheckIn
                    </button>
                    <td>{booking.booking_id}</td>
                    <td>{booking.customer_ssn}</td>
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
                          onClick={() => handleArchive(booking.booking_id)}
                          className="btn btn-danger"
                        >
                          Archive
                        </button>
                        <button
                          onClick={() => handleCancel(booking.booking_id)}
                          className="btn btn-warning"
                        >
                          Cancel
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
