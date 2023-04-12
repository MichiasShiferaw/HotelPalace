import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import api from "../../../apis/apiIndex";
import { CustomersContext } from "../../../Contexts/CustomersContext";
const Archived = () => {
  let history = useNavigate();
  const { id } = useParams();
  const { bookings, setBookings } = useContext(CustomersContext);

  const dateformat = (olddate) => {
    var oldie = new Date(olddate);
    return oldie.toISOString().split("T")[0];
  };
  const handleUpdate = (e, id) => {
    // e.stopPropagation();
    history(`/booking/${id}/update`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/booking/my-all/past/${id}`);
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
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1 mb-3 border-bottom">
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">b_id</th>
              <th scope="col">h_id</th>
              <th scope="col">status</th>
              <th scope="col">emp SSN</th>
              <th scope="col">between</th>
              <th scope="col">created_at</th>
              <th scope="col">last_updated</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => {
              return (
                <tr key={booking.booking_id}>
                  <td>{booking.booking_id}</td>

                  <td>{booking.hotel_id}</td>
                  <td>{booking.booking_status}</td>
                  <td> {booking.emp_ssn}</td>
                  <td>
                    {" "}
                    {dateformat(booking.arrival_time)} -{" "}
                    {dateformat(booking.departure_time)}
                  </td>
                  <td> {dateformat(booking.created_at)}</td>
                  <td> {dateformat(booking.last_updated)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {bookings.length === 0 && <p>No Previous Bookings</p>}
      </div>
    </div>
  );
};

export default Archived;
