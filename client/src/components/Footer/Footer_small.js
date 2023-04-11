import React from "react";
import { Link } from "react-router-dom";

const Footer_small = () => {
  return (
    // <div>Footer, Contact, Customer, My Account</div>
    <>
      <footer
        id="footer"
        className="mt-5 pt-4 pb-auto bg-light "
      >
        <div className="row text-center">
          <div className="col-12 col-md">
            <img
              src="/assets/images/logo/logo.png"
              className="img-fluid h-50"
              alt="1"
            />
            <small className="d-block mb-2 text-muted text-center">
              ©Hotel Palace
            </small>
          </div>
          <div className="col-6 col-md">
            <h5>Employee Side</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="/emp/dashboard" className="link-secondary" href="/#">
                  Dashboard
                </Link>
              </li>
              <li>
                <a className="link-secondary" href="/#">
                  Add Rooms
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/#">
                  Change Booking Status
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Customer Side</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="/#">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/#">
                  Booking
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/#">
                  Hotel
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/#">
                  Room
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer_small;
