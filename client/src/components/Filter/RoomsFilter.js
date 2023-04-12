import React, { Fragment, useState } from "react";
import { useContext } from "react";
import { RoomContext } from "../../Contexts/BookingContext";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  console.log("2");
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    room_capacity,
    room_view,
    hotel_name,
    rating,
    city,
    num_of_rooms,
    chain_name,
    price,
    minPrice,
    maxPrice,
  } = context;

  // get unique capacity
  let room_capacities = getUnique(rooms, "room_capacity");
 room_capacities = ["all", ...room_capacities];
  room_capacities = room_capacities.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  // get unique room_view
  let room_views = getUnique(rooms, "room_view");
  // add all
  room_views = ["all", ...room_views];
  // map to jsx
  room_views = room_views.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let ratings = getUnique(rooms, "rating");
  ratings = ratings.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  // get unique types
  let cities = getUnique(rooms, "city");
  // add all
  cities = ["all", ...cities];
  // map to jsx
  cities = cities.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let val_num_of_rooms = getUnique(rooms, "num_of_rooms");
  val_num_of_rooms = val_num_of_rooms.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  // get unique types
  let chains_names = getUnique(rooms, "chain_name");
  // add all
  chains_names = ["all", ...chains_names];
  // map to jsx
  chains_names = chains_names.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

    const [checkInDate, setCheckInDate] = useState(
      new Date(Date.now() + 172800000)
    );

      const [checkOutDate, setCheckOutDate] = useState(
        new Date(Date.now() + 345600000)
      );

  return (
    // <Fragment>
    <div className="container shadow-lg pt-2 pb-4 mb-5 bg-body-tertiary bg-white rounded">
      {/* <section className="filter-container"> */}
      <h1 className="text-center ">Filter to Find Your Next Room!</h1>
      <form className="filter-form">
        <div className="row justify-content-center">
          <div className=" col-8 mb-2 mb-lg-0">
            <label htmlFor="chain_name">chain_name</label>
            <select
              name="chain_name"
              id="chain_name"
              onChange={handleChange}
              className="form-control"
              value={chain_name}
            >
              {chains_names}
            </select>
          </div>

          <div className="mb-2 mb-lg-0 col-3">
            <label htmlFor="chain_name">city</label>
            <select
              name="city"
              id="city"
              onChange={handleChange}
              className="form-control"
              value={city}
            >
              {cities}
            </select>
          </div>
          <div className="col-md-6 mb-2 mb-lg-0 col-lg-4">
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
          <div className="col-md-6 mb-2 mb-lg-0 col-lg-4">
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
          <div className="col-md-6 mb-2 mb-lg-0 col-lg-3">
            <label htmlFor="rating">Star Rating</label>
            <select
              name="rating"
              id="rating"
              onChange={handleChange}
              className="form-control"
              value={rating}
            >
              {ratings}
            </select>
          </div>

          <div className="col-md-6 mb-2 mb-lg-0 col-lg-3">
            <label htmlFor="num_of_rooms">Number of Rooms</label>
            <select
              name="num_of_rooms"
              id="num_of_rooms"
              onChange={handleChange}
              className="form-control"
              value={num_of_rooms}
            >
              {val_num_of_rooms}
            </select>
          </div>

          <div className="col-md-6 mb-2 mb-lg-0 col-lg-4">
            <label htmlFor="room_capacity">Room Types</label>
            <select
              name="room_capacity"
              id="room_capacity"
              onChange={handleChange}
              className="form-control"
              value={room_capacity}
            >
              {room_capacities}
            </select>
          </div>

          <div className="col-md-6 mb-2 mb-lg-0 col-lg-4">
            <label htmlFor="room_view">View</label>
            <select
              name="room_view"
              id="room_view"
              onChange={handleChange}
              className="form-control"
              value={room_view}
            >
              {room_views}
            </select>
          </div>
          <div className="col-9 mb-2 mb-lg-0 ">
            <label htmlFor="price">Room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
      </form>
      {/* </section> */}
    </div>
    // </Fragment>
  );
};

export default RoomsFilter;
