import React, { useState } from "react";
// import "./Searchbar.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

const Searchbar = () => {
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

  const add= ()=>{
    if(numGuest<5){
        setNumGuest(numGuest + 1);
    }

  }

  const subtract= ()=>{
    if (numGuest > 1){
        setNumGuest(numGuest - 1);

    }
    
  }
  return (
    <div className="searchbar-holder">
      <div className="row">
        <div className="test">
          <div>
            <div>
              <div className="d-flex">
                <div className="inp-holder-1">
                  <div className="inputbox-1">
                    <input
                      type="text"
                      placeholder="Enter a hotel name or destination"
                      value={searchText}
                      onChange={(e) => setsearchText(e.target.value)}
                    />
                  </div>
                  <div className="buttonbox">
                    <button onClick={() => console.log("Hello There")}>
                      &times;
                    </button>
                  </div>
                </div>
                <div className="inp-holder-2">
                  {/* <div className="icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png"
                      alt="map-pointer"
                    />
                  </div> */}
                  <div className="datepicker-holder"></div>
                </div>

                <div className="row g-2 checkdates">
                  <div className="input-group mb-3">
                    <div className="col-md pe-3">
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
                    <span className="input-group-text">
                      <i className="bi bi-arrow-right" />
                    </span>
                    <div className="col-md px-5 pe-3">
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
                </div>
                <div className="add-on">
                  <h3>{numGuest}</h3>
                  <div>
                    <button onClick={subtract}>-</button>
                    <button onClick={add}>+</button>
                  </div>
                </div>
                <div className="search-btn">
                  <Link to={`/hotelPage/${searchText}`}>
                    <button onClick={() => setsearchText("")}>Search</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export { Searchbar };
