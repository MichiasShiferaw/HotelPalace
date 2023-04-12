import React, { useContext, useEffect } from "react";
import api from "../../../apis/apiIndex";
import { CustomersContext } from "../../../Contexts/CustomersContext";

const DashboardContent = () => {
  const dateformat = (olddate) => {
    var oldie = new Date(olddate);
    return oldie.toISOString().split("T")[0];
  };

  const { bookings, setBookings } = useContext(CustomersContext);
    let updated = new Date();
    const offset = updated.getTimezoneOffset();
    updated = new Date(Date.now() - offset * 60 * 1000);
    updated = updated.toISOString().split("T")[0];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/booking/all`);
        console.log(response.data.data.booking);
        setBookings(response.data.data.booking);
        console.log("guess");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleCompleted = async (id) => {
    console.log(id);

    try {
      const response = await api.put(`emp/set-booking/${id}`, {
        booking_status: "completed",
        last_updated: updated,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

    const handleCancel = async (id) => {
      console.log(id);

      try {
        const response = await api.put(`emp/set-booking/${id}`, {
          booking_status: "cancel",
          last_updated: updated,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h4>Dashboard</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="card">
            <div className="card-header">
              <span>
                <i className="bi bi-table me-2" />
              </span>{" "}
              Recent Bookings
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  id="example"
                  className="table table-striped data-table"
                  style={{ width: "100%" }}
                >
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
                            <td
                              className={
                                "booking_status " + booking.booking_status
                              }
                            >
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
                                  className="btn btn-warning"
                                >
                                  Update
                                </button>
                                <button
                                  onClick={() =>
                                    handleCancel(booking.booking_id)
                                  }

                                  className="btn btn-secondary"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={() =>
                                    handleCompleted(booking.booking_id)
                                  }
                                  className="btn btn-primary"
                                >
                                  Completed
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
