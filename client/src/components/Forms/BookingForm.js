import React, { useContext, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import api from "../../apis/apiIndex";
import { CustomersContext } from "../../Contexts/CustomersContext";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function BookingForm(props) {
  const auth = useSelector((state) => state.auth);
  const { infos, setInfos } = useContext(CustomersContext);


  const details = useLocation().state.detail;

  useEffect(() => {
    const fetchData = async () => {
      try {

        const room_category = details.room_category_id;
        const response = await api.get(
          `/booking/room/${details.hotel_id}/room_cate/${details.room_category_id}`
        );

        setInfos(response.data.data.room);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  let joiningDate = new Date();
  const offset = joiningDate.getTimezoneOffset();
  joiningDate = new Date(joiningDate.getTime() - offset * 60 * 1000);
  const { addBookings } = useContext(CustomersContext);
  const [checkInDate, setCheckInDate] = useState(
    new Date(Date.now() + 172800000)
  );
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(Date.now() + 345600000)
  );

  const [values, setValues] = useState({
    hotel_id: details.hotel_id,
    customer_ssn: auth.ssn,
    booking_status: "booked",
    room_no: "",
    emp_SSN: "123456789",
    arrival_time: checkInDate,
    departure_time: checkOutDate,
    created_at: joiningDate,
    last_updated: joiningDate,
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { response } = await api.post("/booking/create", values);
      console.log(response);
      console.log("hi")
      console.log(values.room_no);
      // addBookings(response.data.data.customer);
    } catch (err) {
      console.log(err);
    }
  };

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  let room_nums = getUnique(infos, "room_no");
  room_nums = ["pick a room", ...room_nums];
  room_nums = room_nums.map((item, index) => (
  <option key={index} value={item}>
    {item}
  </option>
));

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center wow fadeInUp"
          style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeInUp",
          }}
        >
          <h6 className="section-title text-center text-primary text-uppercase">
            Room Booking
          </h6>
          <h1 className="mb-5">
            Book A{" "}
            <span className="text-primary text-uppercase">Luxury Room</span>
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-85 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="/assets/images/room-12.jpeg"
                  style={{
                    marginTop: "25%",
                    visibility: "visible",
                  }}
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-85 wow zoomIn"
                  data-wow-delay="0.3s"
                  src="/assets/images/details-4.jpeg"
                  style={{
                    visibility: "visible",
                  }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-85 wow zoomIn"
                  data-wow-delay="0.5s"
                  src="/assets/images/room-9.jpeg"
                  style={{
                    visibility: "visible",
                  }}
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-85 wow zoomIn"
                  data-wow-delay="0.7s"
                  src="/assets/images/room-8.jpeg"
                  style={{
                    visibility: "visible",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
              }}
            >
              <form>
                <div className="row g-3">
                  <div className="col-md">
                    <label htmlFor="customer_ssn" className="form-label">
                      Customer SSN
                    </label>
                    <input
                      onChange={(e) => onChange(e)}
                      type="text"
                      className="form-control"
                      id="customer_ssn"
                      name="customer_ssn"
                      value={values.customer_ssn}
                      placeholder="123123"
                      required
                      disabled
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="room_no" className="form-label">
                      Room Number
                    </label>
                    <select
                      name="room_no"
                      id="room_no"
                      onChange={(e) => onChange(e)}
                      className="form-control"
                      value={values.room_no}
                      required
                    >
                      {room_nums}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="emp_SSN" className="form-label">
                      Emp SSN
                    </label>
                    <input
                      onChange={(e) => onChange(e)}
                      type="text"
                      className="form-control"
                      id="emp_SSN"
                      name="emp_SSN"
                      value={values.emp_SSN}
                      placeholder="test@gmail.com"
                      required
                      readOnly
                    />
                  </div>

                  <div className="col-md-6">
                    {/* <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    > */}
                    <div className="form-floating date" id="date3">
                      {" "}
                      Check In
                    </div>
                    {/* Check Out</div> */}
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      dateFormat="MM/dd/yyyy"
                      minDate={new Date(Date.now() + 259200000)}
                      maxDate={new Date(Date.now() + 1.5552e10)}
                      className="form-control"
                      data-target="#date3"
                      id="checkin"
                      withPortal
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date" id="date4">
                      {" "}
                      Check Out
                    </div>
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      dateFormat="MM/dd/yyyy"
                      minDate={new Date(Date.now() + 259200000)}
                      maxDate={new Date(Date.now() + 1.5552e10)}
                      className="form-control"
                      data-target="#date4"
                      id="checkout"
                      withPortal
                    />
                  </div>
                  <div className="col-md">
                    <label htmlFor="hotel_id" className="form-label">
                      Hotel ID
                    </label>
                    <input
                      onChange={(e) => onChange(e)}
                      type="text"
                      className="form-control"
                      id="hotel_id"
                      name="hotel_id"
                      value={details.hotel_name}
                      placeholder="13"
                      required
                      disabled
                      readOnly
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      onClick={handleSubmit}
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default BookingForm
