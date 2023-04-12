import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import api from "../../../../apis/apiIndex";
import { CustomersContext } from "../../../../Contexts/CustomersContext";
import { useSelector } from "react-redux";

const AllRenting = () => {
  let updated = new Date();
  const offset = updated.getTimezoneOffset();
  updated = new Date(updated.getTime() - offset * 60 * 1000);
  updated = updated.toISOString().split("T")[0];

  const { id } = useParams();
  const auth = useSelector((state) => state.auth);


  const hotel_id = auth.hotel;
  console.log(hotel_id);

  const dateformat = (olddate) => {
    var oldie = new Date(olddate);
    return oldie.toISOString().split("T")[0];
  };

  const { bookings, setBookings } = useContext(CustomersContext);

  const handleArchive = async (id1) => {
    console.log(id1);

    try {
      const response = await api.put(`emp/set-renting/${id1}`, {
        renting_status: "archived",
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


    const handleCheckOut = async (id1) => {
      console.log(id1);

      try {
        const response = await api.put(`emp/set-renting/${id1}`, {
          renting_status: "checked-out",
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
        const response = await api.get(`/emp/get-all-renting/${auth.hotel}`);
        console.log(response.data.data.renting);
        // console.log(id);
        setBookings(response.data.data.renting);
        console.log("guess");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">All Renting for hotel {auth.hotel} </h1>
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
              <th scope="col">Checked Out?</th>
              <th scope="col">renting id</th>
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
                  <tr key={booking.renting_id}>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleCheckOut(booking.renting_id)}
                        className="btn btn-info"
                      >
                        Y
                      </button>
                    </td>
                    <td>{booking.renting_id}</td>
                    <td>{booking.customer_ssn}</td>
                    <td className={"booking_status " + booking.renting_status}>
                      {booking.renting_status}{" "}
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
                          onClick={() => handleArchive(booking.renting_id)}
                          className="btn btn-danger"
                        >
                          Archive
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

export default AllRenting;
