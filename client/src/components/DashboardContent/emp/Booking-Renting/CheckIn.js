import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CustomersContext } from '../../../../Contexts/CustomersContext';
import api from '../../../../apis/apiIndex';



const CheckIn = () => {

    
    let updated = new Date();
    const offset = updated.getTimezoneOffset();
    updated = new Date(updated.getTime() - offset * 60 * 1000);
    updated = updated.toISOString().split("T")[0];

    const { id } = useParams();
    const auth = useSelector((state) => state.auth);

    console.log(id);


      const [booking_id, setBooking_id] = useState("");
      const [hotel_id, setHotel_id] = useState("");
    //   renting_status: "renting",
       const [customer_SSN, setCustomer_SSN] = useState("");
      const [room_no, setRoom_no] = useState("");
      const [arrival_time, setArrival_time] = useState("");
      const [departure_time, setDeparture_time] = useState("");
      const [created_at, setCreated_at]= useState("");
      const [emp_SSN, setEmp_SSN]= useState("")


    const dateformat = (olddate) => {
      var oldie = new Date(olddate);
      return oldie.toISOString().split("T")[0];
    };

    const { bookings, setBookings } = useContext(CustomersContext);



    const handleSubmit = async (e)=>{
        e.preventDefault()

        try {
          const response = await api.post("/emp/add-rent", {
            hotel_id,
            renting_status:"renting",
            customer_ssn: customer_SSN,
            emp_SSN,
            room_no,
            booking_id,
            has_booked: "false",
            arrival_time,
            departure_time,
            created_at,
            last_updated:updated,
          });
        //   addBooking(response.data.data.renting);
          // console.log(response.data.data);
        } catch (err) {
          console.log(err);
          // console.log(pc);
        }

    }



    const handleComplete = async (id1) => {
      console.log(id1);

      try {
        const response = await api.post(`emp/transfer-booking/${id1}`, {
          renting_status: "renting",
          last_updated: updated,
        });

        // const response = await api.post(`emp/transfer-booking/${id1}`, {
        //   renting_status: "renting",
        //   last_updated: updated,
        // });

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
      const response = await api.get(`/emp/get-booking/${id}`);
      console.log(response)
      setBooking_id(response.data.data.booking.booking_id);
      setHotel_id(response.data.data.booking.hotel_id);
      setEmp_SSN(auth.ssn)
    //   setBooking_status(response.data.data.booking.booking_status);
      setCustomer_SSN(response.data.data.booking.customer_ssn);
      setRoom_no(response.data.data.booking.room_no);
      setArrival_time(dateformat(response.data.data.booking.arrival_time));
      setDeparture_time(dateformat(response.data.data.booking.departure_time));
      setCreated_at(dateformat(response.data.data.booking.created_at));
    };

    fetchData();
  }, []);



  return (
    <>
      <div>
        <div className="py-5 text-center">

          <h2>Check In form</h2>

        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Booking_ID</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Hotel_ID</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$8</span>
              </li>

              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Room Capacity</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Room Capacity</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Room Capacity</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-7">
                  <label for="customer_SSN" className="form-label">
                    Customer SSN
                  </label>
                  <input
                    onChange={(e) => setCustomer_SSN(e.target.value)}
                    type="text"
                    className="form-control"
                    id="customer_SSN"
                    placeholder=""
                    value={customer_SSN}
                    required=""
                    disabled
                    readonly
                  />
                  <div className="invalid-feedback">
                    Valid Customer SSN is required.
                  </div>
                </div>
                <div className="col-sm-5">
                  <label for="emp_SSN" className="form-label">
                    Emp SSN
                  </label>
                  <input
                    onChange={(e) => setCustomer_SSN(e.target.value)}
                    type="text"
                    className="form-control"
                    id="emp_SSN"
                    placeholder=""
                    value={emp_SSN}
                    required=""
                    disabled
                    readonly
                  />
                  <div className="invalid-feedback">
                    Valid Customer SSN is required.
                  </div>
                </div>

                <div className="col-sm-4">
                  <label for="booking_id" className="form-label">
                    Booking Id
                  </label>
                  <div className="input-group has-validation">
                    <input
                      value={booking_id}
                      onChange={(e) => setBooking_id(e.target.value)}
                      type="text"
                      className="form-control"
                      id="booking_id"
                      placeholder="Room Number"
                      required=""
                      disabled
                      readonly
                    />
                    <div className="invalid-feedback">
                      Your Booking ID is required.
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <label for="hotel_id" className="form-label">
                    Hotel Id
                  </label>
                  <input
                    onChange={(e) => setHotel_id(e.target.value)}
                    type="text"
                    className="form-control"
                    id="hotel_id"
                    placeholder=""
                    value={hotel_id}
                    required=""
                    disabled
                    readonly
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-4">
                  <label for="room_no" className="form-label">
                    Room Number
                  </label>
                  <div className="input-group has-validation">
                    <input
                      value={room_no}
                      onChange={(e) => setRoom_no(e.target.value)}
                      type="text"
                      className="form-control"
                      id="room_no"
                      placeholder="Room Number"
                      required=""
                      disabled
                      readonly
                    />
                    <div className="invalid-feedback">
                      Your Room Number is required.
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="arrival_time" className="form-label">
                    Arrival Date
                  </label>
                  <input
                    value={arrival_time}
                    onChange={(e) => setArrival_time(e.target.value)}
                    type="text"
                    className="form-control"
                    id="arrival_time"
                    placeholder="you@example.com"
                    disabled
                    readonly
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="departure_time" className="form-label">
                    Departure Time
                  </label>
                  <input
                    value={departure_time}
                    onChange={(e) => setDeparture_time(e.target.value)}
                    type="text"
                    className="form-control"
                    id="departure_time"
                    placeholder="1234 Main St"
                    required=""
                    disabled
                    readonly
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label for="created_at" className="form-label">
                    Created On
                  </label>
                  <input
                    value={created_at}
                    onChange={(e) => setCreated_at(e.target.value)}
                    type="text"
                    className="form-control"
                    id="created_at"
                    placeholder="Apartment or suite"
                    disabled
                    readonly
                  />
                </div>
              </div>

              <hr className="my-4" />

              <p>Check if the case is applied</p>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label className="form-check-label" for="same-address">
                  The Customer is Present
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked=""
                    required=""
                  />
                  <label className="form-check-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" for="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label for="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small className="text-body-secondary">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">Name on card is required</div>
                </div>

                <div className="col-md-6">
                  <label for="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Expiration date required</div>
                </div>

                <div className="col-md-3">
                  <label for="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                onClick={handleSubmit}
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckIn