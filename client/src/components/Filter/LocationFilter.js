import React, { useState,Fragment } from "react";
import Button from 'react-bootstrap/Button'
// import "./Searchbar.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import api from "../../apis/apiIndex";
import StarRating from "../StarRating";
const LocationFilter = () => {
  const [location, setLocation] = useState("");
  const [hotels, setHotels] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/location/?location=${location}`);
      console.log(response.data.data.location);
      setHotels(response.data.data.location);
    } catch (err) {
      console.log(err);
    }
  };
  const [searchText, setsearchText] = useState("");
  const [checkInDate, setCheckInDate] = useState(
    new Date(Date.now() + 172800000)
  );
  console.log(checkInDate);
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(Date.now() + 345600000)
  );
  console.log(searchText);

  const [numGuest, setNumGuest] = useState(2);

  const add = () => {
    if (numGuest < 5) {
      setNumGuest(numGuest + 1);
    }
  };

  const subtract = () => {
    if (numGuest > 1) {
      setNumGuest(numGuest - 1);
    }
  };
  return (
    <Fragment>
      <div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <form className="d-flex justify-content-evenly" onSubmit={onSubmitForm}>
          <input
            type="text"
            name="location"
            placeholder="Enter a hotel name or destination ..."
            className="form-control w-50"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="row g-2 checkdates">
            <div className="col pe-3">
              <div className="co">Check In</div>
              <DatePicker
                id="floatingInputGrid"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                dateFormat="MM/dd/yyyy"
                minDate={new Date(Date.now() + 172800000)}
                withPortal
              />
            </div>
            <div className="col pe-3">
              <div className="co">Check Out</div>
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
          </div>
          <div className="d-flex justify-content-around">
            <button className="btn btn-primary" onClick={subtract}>
              -
            </button>
            <h3 className=" fs-2 mx-2 px-4 border">{numGuest}</h3>
            <button className="btn btn-primary" onClick={add}>
              +
            </button>
          </div>
          <Button className="btn btn-success" href = "/hotel/:id/checkout">Payment Page</Button>
          <Button className="btn btn-success" >Submit</Button>
        </form>
      </div>
      <table className="table my-5">
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Hotel Location</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.hotel_id}>
              <td>{hotel.hotel_name}</td>
              <td>
                {hotel.city},{hotel.province},{hotel.country}
              </td>
              <td>
                <div className="text-center">
                  <StarRating rating={hotel.rating} />
                  {hotel.rating}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {hotels.length === 0 && <p>No Results Found</p>}
    </Fragment>
  );
};

export default LocationFilter;
