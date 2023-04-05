import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import CustomerList from "./CustomerList";

// Delete/ Ban users
const Userdashboard = ({ children }) => {
  const activeLink =
    "hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500";
  const normalLink =
    "hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold";
  return (
    <>
      {/* <BrowserRouter> */}
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        {/* <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a> */}
        <a
          href="/"
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white text-decoration-none"
        >
          <span className="fs-5">Hotel Name</span>
        </a>
        <button
          className="navbar-toggler position-relative d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#empdashsidebar"
          aria-controls="empdashsidebar"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"/> */}
        <div className="d-flex justify-content-end">
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#">
                Dropdown
              </a>
            </div>
          </div>
          <div className="b-example-divider b-example-vr"></div>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#">
                Time
              </a>
            </div>
          </div>
          <div className="b-example-divider b-example-vr"></div>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="empdashsidebar"
            className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse p-3 text-bg-primary"
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <NavLink
                to="/emp/profile"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <span className="fs-5 text-white">Hey Employee</span>
              </NavLink>
              <hr />
              <ul className="list-unstyled ps-0">
                <li className="nav-item">
                  <NavLink
                    to={"/emp/dashboard"}
                    className={({ isActive }) =>
                      isActive
                        ? activeLink + "nav-link text-white"
                        : normalLink + "nav-link text-white"
                    }
                  >
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#speedometer2"></use>
                    </svg>
                    Dashboard
                  </NavLink>
                </li>
                <hr />
                <li className="nav-item dropend">
                  <button
                    className="btn text-white btn-toggle d-inline border-0 dropdown-toggle"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    data-bs-target="#booking-collapse"
                    aria-controls="booking-collapse"
                  >
                    Booking
                  </button>
                  <ul
                    className="ps-1 collapse submenu btn-toggle-nav list-unstyled fw-normal pb-1 small collapse show"
                    id="booking-collapse"
                  >
                    <li className="nav-item">
                      <NavLink
                        to={"/emp/booking"}
                        className="nav-link text-white link link-body-emphasis d-inline-flex text-decoration-none rounded"
                        activeclassName="active"
                      >
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        All Booking
                      </NavLink>
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        Edit Booking
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        Add Booking
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropend">
                  <button
                    className="btn text-white collapsed border-0 dropdown-toggle"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    data-bs-target="#customer-collapse"
                    aria-controls="booking-collapse"
                  >
                    Customer
                  </button>
                  <ul
                    className="ps-1 collapse submenu btn-toggle-nav list-unstyled fw-normal pb-1 small collapse show"
                    id="customer-collapse"
                  >
                    <li>
                      <NavLink
                        to="/emp/view-customers"
                        className="nav-link text-white"
                      >
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        All Customer
                      </NavLink>
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        Edit Customer
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        Add Customer
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropend">
                  <button
                    className="btn text-white collapsed border-0 dropdown-toggle"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    data-bs-target="#room-collapse"
                    aria-controls="room-collapse"
                  >
                    Room
                  </button>
                  <ul
                    className="ps-1 collapse submenu btn-toggle-nav list-unstyled fw-normal pb-1 small collapse show"
                    id="room-collapse"
                  >
                    <li>
                      <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        All Rooms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        Available Rooms
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropend">
                  <button
                    className="btn text-white collapsed border-0 dropdown-toggle"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    data-bs-target="#staff-collapse"
                    aria-controls="staff-collapse"
                  >
                    Staff
                  </button>
                  <ul
                    className="ps-1 collapse submenu btn-toggle-nav list-unstyled fw-normal pb-1 small collapse show"
                    id="staff-collapse"
                  >
                    <li>
                      <NavLink
                        to="/emp/view-staff" className="nav-link text-bg-white ">
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        All Staff
                      </NavLink>
                    </li>
                    <li>
                      <a href="#" className="nav-link text-bg-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        Edit Staff
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link text-bg-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                          <use xlinkHref="#table"></use>
                        </svg>
                        Add Staff
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/emp/calendar"
                    className="nav-link text-bg-white link"
                    activeclassName="active"
                  >
                    <svg className="bi pe-none me-2" width="16" height="16">
                      <use xlinkHref="#table"></use>
                    </svg>
                    Calendar
                  </NavLink>
                </li>
              </ul>

              <hr />
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
