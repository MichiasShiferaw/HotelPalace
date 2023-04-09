import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import DashboardData from "../../../data/EmpDashboardData.json"

const Dashboard = () => {
  const hi=DashboardData['Booking'];
  console.log(DashboardData['Booking']);
    {
      Object.keys(hi).map((section) =>
        console.log(section)

      );
    }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary bg-gradient fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon" data-bs-target="#sidebar" />
          </button>
          <a
            className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
            href="#"
          >
            Hotel Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavBar"
            aria-controls="topNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="topNavBar">
            <div className="d-flex ms-auto my-3 my-lg-0">
              <button className="btn btn-secondary">Hotel Name</button>
              <div className="b-example-divider b-example-vr"></div>
              <button className="btn btn-secondary">Time</button>
              <div className="b-example-divider b-example-vr"></div>
              <button className="btn btn-secondary">Rent Now</button>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* top navigation bar */}
      {/* offcanvas */}
      <div
        className="offcanvas offcanvas-start sidebar-nav bg-dark"
        tabIndex={-1}
        id="sidebar"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3">
                  CORE
                </div>
              </li>
              <li>
                <NavLink to={"/emp/dashboard"} className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="bi bi-speedometer2" />
                  </span>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                  Main
                </div>
              </li>
              <li>
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-book-fill" />
                  </span>
                  <span>Calendar</span>
                </a>
              </li>

{Object.keys(DashboardData).map((head1)=>(
  <li>
    <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href={head1}
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split" />
                  </span>
                  <span>{head1} Michias</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </span>
                </a>
                <div className="collapse" id={head1}>
                  <ul className="navbar-nav ps-3">
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>All Booking</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Edit Booking</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Adding Booking</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

  

))}

                


























              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#layouts"
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split" />
                  </span>
                  <span>Booking</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </span>
                </a>
                <div className="collapse" id="layouts">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>All Booking</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Edit Booking</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Adding Booking</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#layouts1"
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split" />
                  </span>
                  <span>Customers</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </span>
                </a>
                <div className="collapse" id="layouts1">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <NavLink
                        to="/emp/customers/all"
                        className="nav-link px-3"
                      >
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>All Customers</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/emp/customers/add"}
                        className="nav-link px-3"
                      >
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Add Customer</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#layouts2"
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split" />
                  </span>
                  <span>Rooms</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </span>
                </a>
                <div className="collapse" id="layouts2">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>All Rooms</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Available Rooms</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Add Rooms</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Delete Rooms</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#layouts3"
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split" />
                  </span>
                  <span>Staff</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </span>
                </a>
                <div className="collapse" id="layouts3">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>All Staffs</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Edit Staff</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Add Staff</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-book-fill" />
                  </span>
                  <span>Pages</span>
                </a>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                  Addons
                </div>
              </li>
              <li>
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-graph-up" />
                  </span>
                  <span>Charts</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-table" />
                  </span>
                  <span>Tables</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* offcanvas */}
      <main className="dashboard-main mt-5 pt-3">
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
