import React from 'react'
import CurrBooking from './CurrBooking';
import AllBooking from './AllBooking';

const DashboardContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h4>Dashboard</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="card h-100">
            <div className="card-header">
              <span className="me-2">
                <i className="bi bi-bar-chart-fill" />
              </span>
              Current Bookings
            </div>
            <div className="card-body">
                <CurrBooking/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="card">
            <div className="card-header">
              <span>
                <i className="bi bi-table me-2" />
              </span>{" "}
              Your Recent Bookings
            </div>
            <div className="card-body">
              
                <AllBooking/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent