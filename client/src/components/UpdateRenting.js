import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomersContext } from "../Contexts/CustomersContext";
import api from "../apis/apiIndex";

const UpdateRenting = () => {
      let updated = Date.now();
      const offset = updated.getTimezoneOffset();
      updated = new Date(Date.now() - offset * 60 * 1000);
      updated = updated.toISOString().split("T")[0];
  const { id } = useParams();
  let history = useNavigate();

  const { infos } = useContext(CustomersContext);
  const [booking_id, setBooking_id] = useState("");
  const [hotel_id, setHotel_id] = useState("");
  const [booking_status, setBooking_status] = useState("");
  const [customer_SSN, setCustomer_SSN] = useState("");
  const [room_no, setRoom_no] = useState("");
  const [arrival_time, setArrival_time] = useState("");
  const [departure_time, setDeparture_time] = useState("");
  const [created_at, setCreated_at] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/emp/get-renting/${id}`);
      // console.log(response.data.data);
      // console.log("Michias");
      // console.log(response.data.data.booking.city);
      setBooking_id(response.data.data.booking.booking_id);
      setHotel_id(response.data.data.booking.hotel_id);
      setBooking_status(response.data.data.booking.booking_status);
      setCustomer_SSN(response.data.data.booking.customer_SSN);
      setRoom_no(response.data.data.booking.room_no);
      setArrival_time(response.data.data.booking.arrival_time);
      setDeparture_time(response.data.data.booking.departure_time);
      setCreated_at(response.data.data.booking.created_at);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBooking = await api.put(`/emp/set-booking/${id}`, {
      booking_status,
      last_updated:updated,
      id,
    });
    // history("/");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="booking_id">booking_id</label>
          <input
            value={booking_id}
            onChange={(e) => setBooking_id(e.target.value)}
            id="booking_id"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="hotel_id">hotel_id</label>
          <input
            value={hotel_id}
            onChange={(e) => setHotel_id(e.target.value)}
            id="hotel_id"
            className="form-control"
            type="number"
            disabled
            readonly
          />
        </div>
        <div className="form-group">
          <label htmlFor="customer_SSN">customer_SSN</label>
          <input
            value={customer_SSN}
            onChange={(e) => setCustomer_SSN(e.target.value)}
            id="customer_SSN"
            className="form-control"
            type="text"
            disabled
            readonly
          />
        </div>
        <div className="form-group">
          <label htmlFor="room_no">room_no</label>
          <input
            value={room_no}
            onChange={(e) => setRoom_no(e.target.value)}
            id="room_no"
            className="form-control"
            type="text"
            disabled
            readonly
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrival_time">arrival_time</label>
          <input
            value={arrival_time}
            onChange={(e) => setArrival_time(e.target.value)}
            id="arrival_time"
            className="form-control"
            type="text"
            disabled
            readonly
          />
        </div>
        <div className="form-group">
          <label htmlFor="departure_time">departure_time</label>
          <input
            value={departure_time}
            onChange={(e) => setDeparture_time(e.target.value)}
            id="departure_time"
            className="form-control"
            type="text"
            disabled
            readonly
          />
        </div>
        <div className="form-group">
          <label htmlFor="created_at">created_at</label>
          <input
            value={created_at}
            onChange={(e) => setCreated_at(e.target.value)}
            id="created_at"
            className="form-control"
            type="text"
            disabled
            readonly
          />
        </div>
        <div className="form-group">
          <label htmlFor="booking_status">booking_status</label>
          <select
            value={booking_status}
            onChange={(e) => setBooking_status(e.target.value)}
            id="booking_status"
            className="form-control bg-primary"
            // type="text"
          >
            <option value="start">Start</option>
            <option value="cancel">Cancel</option>

          </select>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRenting;
