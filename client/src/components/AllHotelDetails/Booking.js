import React from 'react'

const Booking = () => {
  return (
    <div
      className="container-fluid booking pb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn",
      }}
    >
      <div className="container">
        <div className="bg-white shadow p-3">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <div className="date" id="date1" data-target-input="nearest">
                    <label>Check In</label>
                    <input
                      type="date"
                      className="form-control datetimepicker-input"
                      placeholder="Check in"
                      data-target="#date1"
                      data-toggle="datetimepicker"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="date" id="date2" data-target-input="nearest">
                    <label>Check Out</label>
                    <input
                      type="date"
                      className="form-control datetimepicker-input"
                      placeholder="Check out"
                      data-target="#date2"
                      data-toggle="datetimepicker"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="ms-3">
                    Num of Guests{" "}
                    <i className="fa fa-user text-secondary" aria-hidden="true"></i>
                  </label>
                  <select className="form-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>

                  </select>
                </div>

              </div>
            </div>
            <div className="col-md-2">
              <button className="mt-3 btn btn-primary w-100">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking