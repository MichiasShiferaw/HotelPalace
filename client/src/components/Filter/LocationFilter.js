import React, { useState,Fragment } from "react";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import api from "../../apis/apiIndex";
import StarRating from "../StarRating";
import Overview from "../AllHotelDetails/Overview1";
const LocationFilter = () => {


  const [values, setValues]= useState({
    location:"",
    checkin:"",
    checkout:'',
    capacity:'',
    hotel_chain:'',
    rating:'',
    total_number_of_rooms:'',
    price:''
    
  })

  console.log(values.price)
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  const [location, setLocation] = useState("");
  const [hotels, setHotels] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/location/?location=${location}`,values);
      console.log(response.data.data.location);
      setHotels(response.data.data.location);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/location/?location=${values.location}`);
      console.log(response.data.data.location);
      setHotels(response.data.data.location);
    } catch (err) {
      console.log(err);
    }
  };

  const [checkInDate, setCheckInDate] = useState(
    new Date(Date.now() + 172800000)
  );
  console.log(checkInDate);
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(Date.now() + 345600000)
  );

  const [numGuest, setNumGuest] = useState(2);

// Design and implement an appropriate User Interface, through which a user will be able 
// to see the available rooms by giving different, multiple and combinations of criteria in order to 
// choose the room that he/she is interested in and book it or rent it. These criteria should be: the 
// dates (start, end) of booking or renting, the room capacity, the area, the hotel chain, the category 
// of the hotel, the total number of rooms in the hotel, the price of the rooms. The user should be 
// able to see the available choices when he/she changes the value of any of these criteria.
  return (
    <Fragment>
      <div className="container shadow-lg p-4 mb-5 bg-body-tertiary bg-white rounded">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row justify-content-center">
            <div className="col-md-10 mb-2 mb-lg-0 col-lg-4">
              <label htmlFor="location">Enter Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter a hotel name or destination ..."
                className="form-control"
                id="location"
                value={values.location}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="col-md-6 mb-2 mb-lg-0 col-lg-2">
              <label className="co">Check In</label>
              <DatePicker
                id="floatingInputGrid"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                dateFormat="MM/dd/yyyy"
                minDate={new Date(Date.now() + 172800000)}
                withPortal
              />
            </div>
            <div className="col-md-6 mb-2 mb-lg-0 col-lg-2">
              <label>Check Out</label>
              <DatePicker
                id="floatingInputGrid"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                dateFormat="MM/dd/yyyy"
                minDate={new Date(Date.now() + 259200000)}
                maxDate={new Date(Date.now() + 1.5552e10)}
                withPortal
              />
            </div>

            <div className="col-md-4 mb-2 mb-lg-0 col-lg-2">
              <label htmlFor="guests" className="font-weight-bold text-black">
                Guests
              </label>
              <div className="field-icon-wrap">
                <select name="" id="guests" className="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>

            <div className="col-md-10 mb-2 mb-lg-0 col-lg-4">
              <label htmlFor="hotel_chain">Hotel_Chain</label>
              <input
                type="text"
                name="hotel_chain"
                placeholder="Hotel_Chain"
                className="form-control"
                id="hotel_chain"
                // value={location}
                // onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="col-md-10 mb-2 mb-lg-0 col-lg-4">
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                name="rating"
                placeholder="Rating ..."
                className="form-control"
                id="rating"
                // value={location}
                // onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="col-md-10 mb-2 mb-lg-0 col-lg-4">
              <label htmlFor="room_capacity_input" className="form-label">
                Room Capacity
              </label>
              <input
                className="form-control"
                list="room_capacity"
                id="room_capacity_input"
                placeholder="Type to search..."
              />
              <datalist id="room_capacity">
                <option value="single">Single (rec. 2 guests ) </option>
                <option value="double">Double (rec. 3 guests)</option>
                <option value="deluxe">Deluxe (rec. 5 guests)</option>
                <option value="suite">Suite (rec. 7 guests)</option>
              </datalist>
            </div>

            <div className="col-md-10 mb-2 mb-lg-0 col-lg-4">
              <label htmlFor="num">Total Number of Rooms</label>
              <input
                type="text"
                name="num"
                placeholder="Enter a hotel name or destination ..."
                className="form-control"
                id="num"
                value={values.total_number_of_rooms}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="col-md-10 mb-2 mb-lg-0 col-lg-4">
              <label htmlFor="price">Max Price: ${values.price}</label>
              <input
              defaultValue={100}
                type="range"
                className="form-range"
                min="123"
                max="1000"
                step="100"
                id="price"
                value={values.price}
                onChange={(e) => onChange(e)}
              />
              {/* <input
                type="text"
                name="price"
                placeholder="Enter a hotel name or destination ..."
                className="form-control"
                id="price"
                // value={location}
                // onChange={(e) => setLocation(e.target.value)}
              /> */}
            </div>

            <div className="col-md-4 mb-2 mb-lg-0 col-lg-2">
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </form>
      </div>

      {/* <table className="table my-5">
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Hotel Location</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody> */}
      {hotels.map((hotel) => (
        <Overview
          key={hotel.hotel_id}
          details={hotel}
          // h={hotel.country}
          // hid={hotel.hotel_id}
          // hname={hotel.hotel_name}
          // hstars={hotel.rating}
          // h_chain={hotel.chain_id}
        />
      ))}
      {/* </tbody>
      </table> */}
      {hotels.length === 0 && <p>No Results Found</p>}
    </Fragment>
  );
};

export default LocationFilter;
