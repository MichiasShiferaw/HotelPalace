import React, { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import api from "../../apis/apiIndex";
import { CustomersContext } from "../../Contexts/CustomersContext";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const RentingForm = () => {


    const [paymentReady, setPaymentReady]= useState(false);
    const auth = useSelector((state) => state.auth);
    const { id } = useParams();

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
    hotel_id: auth.hotel,
    customer_ssn: "",
    renting_status: 'renting',
    room_no: "",
    emp_SSN: id,
    booking_id: 'null',
    has_booked: false,
    arrival_time: checkInDate,
    departure_time: checkOutDate,
    created_at: joiningDate,
    last_updated: joiningDate,
  });

  // console.log(values.joining_date)
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hi = paymentReady;
    if (paymentReady == false) {
      console.log(paymentReady);
      setPaymentReady(!hi);
      console.log(paymentReady);
    }
    try {
      const { response } = await api.post("/emp/add-rent", values);
      console.log(response);
      console.log(paymentReady)
      setPaymentReady(!paymentReady)
      console.log(paymentReady)
      // addBookings(response.data.data.customer);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-xxl py-5 bg-light">
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
            Room Rental
          </h6>
          <h1 className="mb-5">
            Rent A{" "}
            <span className="text-warning text-uppercase">Luxury Room</span>
          </h1>
        </div>
        <div className="row g-5">
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
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="room_no" className="form-label">
                      Room Number
                    </label>
                    <input
                      onChange={(e) => onChange(e)}
                      type="number"
                      className="form-control"
                      id="room_no"
                      name="room_no"
                      value={values.room_no}
                      placeholder="123"
                      required
                    />
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
                      disabled
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
                      value={values.hotel_id}
                      placeholder="13"
                      required
                      readOnly
                      disabled
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
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            {paymentReady ? (
              <>
                Payment Form
                <h4 class="mb-3">Payment</h4>
                <div class="my-3">
                  <div class="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required=""
                    />
                    <label class="form-check-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required=""
                    />
                    <label class="form-check-label" for="paypal">
                      PayPal
                    </label>
                  </div>
                </div>
                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="cc-name" class="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />
                    <small class="text-body-secondary">
                      Full name as displayed on card
                    </small>
                    <div class="invalid-feedback">Name on card is required</div>
                  </div>

                  <div class="col-md-6">
                    <label for="cc-number" class="form-label">
                      Credit card number
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-expiration" class="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Expiration date required</div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Security code required</div>
                  </div>
                </div>
                <hr class="my-4" />
              </>
            ) : (
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-85 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/images/defaultBcg.jpeg"
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
                    src="/assets/images/room-8.jpeg"
                    style={{
                      visibility: "visible",
                    }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-85 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/images/room-7.jpeg"
                    style={{
                      visibility: "visible",
                    }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-85 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/images/room-10.jpeg"
                    style={{
                      visibility: "visible",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col-12">
            <button
              className="btn btn-warning w-100 py-3"
              onClick={handleSubmit}
              type="submit"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentingForm;
